import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [cookie, setCookie, removeCookie] = useCookies(["jwt"]);

  //   const storeToken = (token) => {
  //     const decodedToken = jwtDecode(token);
  //     setUser(decodedToken);
  //   };

  const login = (tokenStr) => {
    if (tokenStr) {
      setToken(tokenStr);
      const { exp } = jwtDecode(tokenStr);

      if (exp) {
        setCookie("jwt", tokenStr, {
          path: "/",
          maxAge: exp,
          sameSite: true,
        });
      }

      console.log("token", token);
      return;
    }

    logout();
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    removeCookie("jwt", { path: "/" });
  };

  useEffect(() => {
    if (cookie?.jwt) {
      setToken(cookie.jwt);
      const user = jwtDecode(cookie.jwt);
      setUser(user);
    }
  }, [cookie]);

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
