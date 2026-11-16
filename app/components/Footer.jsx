"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";

export default function Footer() {
  const { dictionary } = useLanguage();
  const footerNav = [
    { label: dictionary.footer.nav.about, href: "#about" },
    { label: dictionary.footer.nav.projects, href: "#projects" },
    { label: dictionary.footer.nav.experience, href: "#experience" },
    { label: dictionary.contact.eyebrow, href: "#contact" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
            aria-label="Footer"
          >
            {footerNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 text-muted-foreground">
            <Link
              href="https://github.com/PedroFnseca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors p-1"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/pedrofnseca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground font-mono">
          <p>{dictionary.footer.credit} · {new Date().getFullYear()}</p>
          <p className="text-[11px] text-muted-foreground/70">Next.js · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
