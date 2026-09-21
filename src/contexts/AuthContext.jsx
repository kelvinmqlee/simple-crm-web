import { createContext, useState } from "react";

// eslint-disable-next-line
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);

    //localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);

    //localStorage.removeItem("user");
  };

  const hasRole = (role) => {
    return user?.role === role;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, hasRole }}>
      {children}
    </AuthContext.Provider>
  );
}
