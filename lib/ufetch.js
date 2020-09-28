const ufetch = async (endpoint, options = {}) => {
  const api_url = process.env.URL;
  let l_storage = localStorage.getItem("cp-a");
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  if (l_storage) {
    l_storage = JSON.parse(l_storage);
    headers["Authorization"] = `Bearer ${l_storage.access}`;
  }

  if (options !== undefined) {
    if (options.headers) {
      for (let h in options.headers) {
        headers[h] = options.headers[h];
      }
    }
  }
  options.headers = headers;

  let results = null;
  let dbugText = null;
  let data = null;

  try {
    results = await fetch(`${api_url}${endpoint}`, options);
    dbugText = await results.text();
    try {
      // console.log( dbugText);
      if (dbugText.includes("Token is invalid or expired")) {
        const refreshed = await refreshTOken(api_url, l_storage);
        if (refreshed.access) {
          l_storage.access = refreshed.access;
          window.localStorage.setItem("cp-a", JSON.stringify(l_storage));
          options.headers["Authorization"] = `Bearer ${refreshed.access}`;
          results = await fetch(`${api_url}${endpoint}`, options);
          dbugText = await results.text();
        } else {
          return { error: "Failed to refresh token" };
        }
      }
      data = JSON.parse(dbugText);
    } catch (e) {
      return { error: dbugText };
    }
    if (data.error) {
    }
    return data;
  } catch (e) {
    return { error: e.message };
  }
};

export const refreshTOken = async (url, l_storage) => {
  try {
    let response = await fetch(`${url}/auth/token/refresh/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ refresh: l_storage.refresh }),
    });
    let responseData = await response.text();

    return JSON.parse(responseData);
  } catch (e) {
    return { error: e.message };
  }
};
export default ufetch;
