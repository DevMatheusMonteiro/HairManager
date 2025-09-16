import { createContext, useState, useContext, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { findUserById, createUser } from "../services/userService";
import { register, login, logout } from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();

  async function fetchProfile() {
    if (!user) {
      setProfile(null);
      return;
    }
    const data = await findUserById(user.id);
    setProfile(data);
  }

  async function getSession() {
    const { data } = await supabase.auth.getSession();
    setUser(data.session?.user ?? null);
  }

  useEffect(() => {
    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) =>
      setUser(session?.user ?? null)
    );

    return () => subscription.unsubscribe();
  }, []);
  useEffect(() => {
    fetchProfile();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, profile, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
