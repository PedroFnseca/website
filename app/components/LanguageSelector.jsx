"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Flag, Globe, Languages } from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";

const ICON_MAP = {
  Flag,
  Globe,
  Languages,
};

export default function LanguageSelector() {
  const { language, setLanguage, availableLanguages, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const currentLanguage =
    availableLanguages.find((option) => option.code === language) ??
    availableLanguages[0];

  const CurrentIcon = currentLanguage?.icon
    ? ICON_MAP[currentLanguage.icon] ?? Flag
    : Flag;

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={toggleOpen}
        className="glass-button flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={t("header.aria.languageSelector")}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {CurrentIcon && (
          <CurrentIcon
            className={`h-4 w-4 ${
              currentLanguage?.colorClass ?? "text-primary"
            }`}
          />
        )}
        <span>{currentLanguage?.shortLabel ?? language}</span>
        <ChevronDown className="h-3 w-3" />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 min-w-[180px] rounded-2xl bg-background/90 p-2 shadow-xl backdrop-blur"
          role="listbox"
        >
          {availableLanguages.map((option) => {
            const OptionIcon = option.icon
              ? ICON_MAP[option.icon] ?? Flag
              : Flag;
            const isActive = option.code === language;

            return (
              <button
                key={option.code}
                type="button"
                onClick={() => handleSelect(option.code)}
                role="option"
                aria-selected={isActive}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                }`}
              >
                {OptionIcon && (
                  <OptionIcon
                    className={`h-4 w-4 ${option.colorClass ?? "text-primary"}`}
                  />
                )}
                <div className="flex flex-col">
                  <span className="font-medium">{option.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {option.shortLabel}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
