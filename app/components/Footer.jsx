"use client";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";

export default function Footer() {
  const { dictionary } = useLanguage();
  const footerNav = [
    { label: dictionary.footer.nav.about, href: "#about" },
    { label: dictionary.footer.nav.projects, href: "#projects" },
    { label: dictionary.footer.nav.journey, href: "#timeline" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {footerNav.map((item) => (
            <div key={item.label} className="pb-6">
              <Link
                href={item.href}
                className="text-sm leading-6 text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-6">
          <Link
            href="https://github.com/PedroFnseca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/pedrofnseca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
        <p className="mt-8 text-center text-sm leading-5 text-muted-foreground">
          {dictionary.footer.credit} ® {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
