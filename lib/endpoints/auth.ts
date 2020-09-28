import ufetch from "../ufetch";
import axios from "axios";

export class Auth {
  async signup(params: any) {
    const query_params = new URLSearchParams(params as any).toString();
    return await ufetch("/register", {
      method: "POST",
      body: query_params,
    });
  }

  async confirmaccount(integer_key: number) {
    const rs = await axios.post("http://51.116.114.155:8080/auth/keyinput/", {
      integer_key,
    });

    return rs;
  }

  async login(authentication_property: string, password: string) {
    //authentication_property: email or phone number for login
    const rs = await axios.post("http://51.116.114.155:8080/auth/token", {
      authentication_property: authentication_property,
      password: password,
      // authentication_property: "ogembodennis@gmail.com",
      // password: "@Beloved2020",
    });

    return rs;
    // const data = new URLSearchParams({
    //   authentication_property,
    //   password,
    // }).toString();
    // return await ufetch("/auth/token", {
    //   method: "POST",
    //   body: data,
    // });
  }

  async forgotpassword(authentication_property: string) {
    const data = new URLSearchParams(authentication_property).toString();
    return await ufetch("/auth/password-forgotten", {
      method: "POST",
      body: data,
    });
  }

  async updateUserProfile(userData: any) {
    const data = new URLSearchParams(userData).toString();
    return await ufetch("accounts/update", {
      method: "PUT",
      body: data,
    });
  }

  protected async generic_query(ctx: any) {
    return await ufetch(`/${ctx.endpoint}/${ctx.query_params}`, {
      method: ctx.method,
      ...ctx.options,
    });
  }
}
