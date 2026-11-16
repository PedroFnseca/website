"use client";

import Image from "next/image";
import { ArrowDown, Github, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";

export default function Hero() {
  const { dictionary } = useLanguage();
  const hero = dictionary.hero;

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="border-b border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Coluna de texto */}
          <div className="md:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-tech" aria-hidden="true" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-foreground leading-[1.15]">
              {hero.headline}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl">
              {hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="btn-primary"
              >
                <span>{hero.viewProjects}</span>
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="https://github.com/PedroFnseca"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span>{hero.viewGithub}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Coluna da foto */}
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <div className="w-full max-w-[240px] sm:max-w-[280px]">
              <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-muted shadow-sm">
                <Image
                  src="/pedro-fonseca.jpg"
                  alt="Pedro Fonseca"
                  width={400}
                  height={400}
                  sizes="(max-width: 640px) 240px, 280px"
                  className="object-cover w-full h-full grayscale-[25%] contrast-[105%]"
                  priority
                  fetchPriority="high"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span>Pedro Fonseca</span>
                <span className="text-foreground font-medium">São Paulo, BR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
