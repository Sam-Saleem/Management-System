import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext(null);
export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const getUserToken = () => {
    console.log("cookiesss:::", Cookies);
    const token = Cookies.get("authToken");
    console.log("tokennnn", token);
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log("decodedToken", decodedToken);
      return decodedToken;
    }
    return null;
  };

  useEffect(() => {
    const token = getUserToken();
    setToken(token);
  }, []);

  return (
    <AuthContext.Provider value={{ token, getUserToken }}>
      {children}
    </AuthContext.Provider>
  );
};
