"use client";

import { createContext, useContext, useState, useEffect } from "react";

// import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api";
import { toast } from "sonner";

interface User {
  email: string;
  userID: string;
  name?: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const UserContext = createContext<UserContextType>({
  user: null,
  login: async () => {},
  logout: async () => {},
  loading: false,
});

const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { data } = await api.post("/Account/login", { email, password });
      setUser(data);
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(data));
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast("Error");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await api.post("/Account/logout");
      setUser(null);
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.error("Logout Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, loading, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUserContext };
