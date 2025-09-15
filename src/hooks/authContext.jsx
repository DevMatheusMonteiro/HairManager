import { createContext, useState, useContext, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { findUserById, createUser } from "../services/userService";

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

  async function register({
    email,
    password,
    name,
    telephone,
    role = "customer",
    extra,
    address,
  }) {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    const userId = authData.user?.id;

    if (authError) throw authError;

    const profileData = await createUser({
      id: userId,
      email,
      telephone,
      name,
      role,
      extra,
      address,
    });
    return profileData;
  }

  async function login({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  }

  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
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
