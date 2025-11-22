"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Github, Linkedin } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../providers/LanguageProvider";
import { useState, useEffect } from "react";

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { t, dictionary } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  const isDarkMode = (theme === "system" ? resolvedTheme : theme) === "dark";

  const navigation = [
    { href: "#projects", label: t("header.nav.projects") },
    { href: "#timeline", label: t("header.nav.journey") },
    { href: "#contact", label: t("header.nav.contact") },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center gap-4">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-foreground">
              {dictionary.general.name}
            </span>
          </Link>
          <div className="flex gap-2">
            <Link
              href="https://github.com/PedroFnseca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/pedrofnseca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="flex gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-3">
          <LanguageSelector />
          <button
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
            className="glass-button rounded-full p-2 text-primary"
            aria-label={t("header.aria.themeToggle")}
          >
            {!mounted ? (
              <div className="h-5 w-5" />
            ) : isDarkMode ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
