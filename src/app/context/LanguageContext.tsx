"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type Language = "english" | "khmer";

interface LanguageContextType {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "english",
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("english");

  useEffect(() => {
    const stored = localStorage.getItem("user-language") as Language | null;
    if (stored) setLanguageState(stored);
  }, []);

  const setLanguage: Dispatch<SetStateAction<Language>> = (lang) => {
    const newLanguage = typeof lang === "function" ? lang(language) : lang;
    localStorage.setItem("user-language", newLanguage);
    setLanguageState(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
