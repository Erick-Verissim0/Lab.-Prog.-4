import React, { createContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

interface User {
  id: number;
  name: string;
  email: string;
  type?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  login: async () => false,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Tenta carregar o token e usuário do AsyncStorage quando o app inicia
  useEffect(() => {
    const loadStoredToken = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        const decoded: any = jwtDecode(storedToken);
        setUser({ id: decoded.id, name: decoded.name, email: decoded.email });
      }
    };
    loadStoredToken();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await axios.post("http://localhost:5001/users/login", {
        email,
        password,
      });

      const { token } = response.data;

      if (token) {
        await AsyncStorage.setItem("token", token);
        setToken(token);

        const decoded: any = jwtDecode(token);
        setUser({ id: decoded.id, name: decoded.name, email: decoded.email, type: decoded.type });

        return true;
      }

      return false;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return false;
    }
  };

  const logout = async () => {
    setUser(null);
    setToken(null);
    await AsyncStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
