import { createContext, useReducer } from "react";

export const Store = createContext<string | any>("");

type TTokens = {
  accessToken: string;
  refreshToken: string;
};

interface IGState {
  username: string;
  emailaddress: string;
  image: string;
  tokens: TTokens;
}

const gState: IGState = {
  username: "",
  emailaddress: "",
  image: "",
  tokens: { accessToken: "", refreshToken: "" },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USERNAME":
      return { ...state, username: action.payload };
    case "SET_EMAIL":
      return { ...state, emailaddress: action.payload };
    case "SET_IMAGE":
      return { ...state, image: action.payload };
    default:
      return state;
  }
};

export const ContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, gState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
