import { createContext, useState } from "react";
import JwtDecode from "jwt-decode";
import { useCookies } from "react-cookie";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [cookies, setCookie, removeCookie] = useCookies();

  //   const storeToken = (token) => {
  //     const decodedToken = JwtDecode(token);
  //     setUser(decodedToken);
  //   };

  const login = (token) => {
    if (token) {
      setToken(token);

      const decodedToken = JwtDecode(token);
      console.log(decodedToken);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
