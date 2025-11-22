"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { translations, languageOptions } from "../constants/translations";

const DEFAULT_LANGUAGE = "pt-BR";

const LanguageContext = createContext(null);

export function LanguageProvider({
  children,
  defaultLanguage = DEFAULT_LANGUAGE,
}) {
  const [language, setLanguage] = useState(defaultLanguage);

  const value = useMemo(() => {
    const dictionary = translations[language] || translations[DEFAULT_LANGUAGE];

    const t = (path, fallback) => {
      if (!path) {
        return fallback ?? "";
      }

      const segments = path.split(".");
      let current = dictionary;

      for (const segment of segments) {
        if (current && Object.prototype.hasOwnProperty.call(current, segment)) {
          current = current[segment];
        } else {
          current = undefined;
          break;
        }
      }

      if (current === undefined || current === null) {
        return fallback ?? path;
      }

      return current;
    };

    return {
      language,
      setLanguage,
      t,
      dictionary,
      availableLanguages: languageOptions,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
