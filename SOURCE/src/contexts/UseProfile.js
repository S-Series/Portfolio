import { createContext, useContext, useMemo, useState, useEffect } from "react";

const ProfileContext = createContext(null);

export function ProfileProvider({ children }) {
  const [lang, setLang] = useState("kr");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const value = useMemo(() => {
    return { lang, setLang, isScrolled };
  }, [lang, setLang, isScrolled]);

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}
