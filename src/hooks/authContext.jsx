import { createContext, useState, useContext, useEffect } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);

  async function fetchProfile() {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();
    !error && setProfile(data);
    setLoading(false);
  }

  async function getSession() {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error("Erro ao buscar sessão:", error.message);
      return;
    }
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
    <AuthContext.Provider value={{ user, profile, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
