
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user") || "null"));

  useEffect(() => {
    if (token) localStorage.setItem("token", token); else localStorage.removeItem("token");
    if (user) localStorage.setItem("user", JSON.stringify(user)); else localStorage.removeItem("user");
  }, [token, user]);

  const login = ({ username, password }) => {
    
    if (password === "test123") {
      const mockToken = "mock-jwt-" + Date.now();
      setToken(mockToken);
      setUser({ username });
      return { success: true, token: mockToken };
    } else {
      return { success: false, message: "Invalid password. Use test123" };
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
