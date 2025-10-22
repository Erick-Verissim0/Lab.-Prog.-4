import React, { createContext, useState, ReactNode } from "react";
import axios from "axios";

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      setUser(response.data.user);
    } catch (error) {
      alert("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
