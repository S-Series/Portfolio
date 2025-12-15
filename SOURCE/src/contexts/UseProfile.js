import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";

const ProfileContext = createContext(null);

export function ProfileProvider({ children }) {
  const [lang, setLang] = useState("kr");
  const [isScrolled, setIsScrolled] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  /* ---------- auth helpers ---------- */
  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  /* ---------- context value ---------- */
  const value = useMemo(() => {
    return {
      lang,
      setLang,
      isScrolled,

      user,
      login,
      logout,
    };
  }, [lang, isScrolled, user]);

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) {
    throw new Error("useProfile must be used within ProfileProvider");
  }
  return ctx;
}
