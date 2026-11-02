import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { defaultLanguage, languages, translations, type Dict, type Language } from "./translations";

const STORAGE_KEY = "lamdriving-lang";

function readSavedLanguage(): Language | null {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved && saved in translations ? (saved as Language) : null;
  } catch {
    // Storage can be blocked (private mode, strict privacy settings).
    return null;
  }
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return defaultLanguage;
  return readSavedLanguage() ?? defaultLanguage;
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Dict;
  // BCP 47 tag for Intl formatting.
  locale: string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Not persisting is fine; the choice still applies for this visit.
    }
  }, []);

  const locale = languages.find((l) => l.code === language)?.htmlLang ?? "vi";

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t: translations[language], locale }),
    [language, setLanguage, locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
