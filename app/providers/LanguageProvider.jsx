"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { translations, languageOptions } from "../constants/translations";

const DEFAULT_LANGUAGE = "en";

const LanguageContext = createContext(null);

const availableLanguageCodes = languageOptions.map((option) => option.code);

const detectBrowserLanguage = (fallback) => {
  if (typeof navigator === "undefined") {
    return fallback;
  }

  const preferredLanguages = Array.isArray(navigator.languages)
    ? navigator.languages
    : [navigator.language];

  for (const locale of preferredLanguages) {
    if (!locale) {
      continue;
    }

    const trimmedLocale = locale.trim();

    if (availableLanguageCodes.includes(trimmedLocale)) {
      return trimmedLocale;
    }

    const baseLocale = trimmedLocale.split("-")[0];
    const match = availableLanguageCodes.find((code) =>
      code.startsWith(baseLocale)
    );

    if (match) {
      return match;
    }
  }

  return fallback;
};

export function LanguageProvider({
  children,
  defaultLanguage = DEFAULT_LANGUAGE,
}) {
  const hasUserSelection = useRef(false);
  const [language, setLanguageState] = useState(() =>
    detectBrowserLanguage(defaultLanguage)
  );

  const selectLanguage = useCallback((code) => {
    hasUserSelection.current = true;
    setLanguageState(code);
  }, []);

  useEffect(() => {
    const browserLanguage = detectBrowserLanguage(defaultLanguage);

    if (
      !hasUserSelection.current &&
      browserLanguage &&
      browserLanguage !== language
    ) {
      const animationFrameId = requestAnimationFrame(() => {
        setLanguageState(browserLanguage);
      });

      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [defaultLanguage, language]);

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
      setLanguage: selectLanguage,
      t,
      dictionary,
      availableLanguages: languageOptions,
    };
  }, [language, selectLanguage]);

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
