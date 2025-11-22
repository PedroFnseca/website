"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Github, Linkedin } from "lucide-react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

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
              Pedro Fonseca
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
          <Link
            href="#projects"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Projetos
          </Link>
          <Link
            href="#timeline"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Jornada
          </Link>
          <Link
            href="#contact"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Contato
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  );
}
