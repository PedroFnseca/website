"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { useLanguage } from "./providers/LanguageProvider";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 px-6 py-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-1/4 h-64 w-64 animate-pulse rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-4 bottom-1/4 h-64 w-64 animate-pulse rounded-full bg-blue-500/10 blur-3xl animation-delay-2000" />
        <div className="absolute left-1/3 top-1/3 h-48 w-48 animate-pulse rounded-full bg-purple-500/10 blur-3xl animation-delay-4000" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h1 className="mb-4 bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-8xl font-extrabold text-transparent">
          {t("notFound.title")}
        </h1>

        <h2 className="mb-4 text-3xl font-bold text-foreground">
          {t("notFound.subtitle")}
        </h2>

        <p className="mb-8 text-lg text-muted-foreground">
          {t("notFound.description")}
        </p>

        <div className="flex justify-center">
          <Link
            href="/"
            className="glass-button group flex items-center gap-2 rounded-full px-6 py-3 font-medium text-foreground transition-all hover:scale-105 hover:shadow-lg"
          >
            <Home className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            {t("notFound.backHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}
