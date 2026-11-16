"use client";

import { useLanguage } from "../providers/LanguageProvider";

export default function FeaturedCases() {
  const { dictionary } = useLanguage();
  const cases = dictionary.featuredCases;

  if (!cases) return null;

  return (
    <section
      className="py-16 sm:py-20 border-b border-border bg-background"
      aria-labelledby="cases-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl mb-10 space-y-2">
          <span className="section-eyebrow block">
            {cases.eyebrow}
          </span>
          <h2 id="cases-heading" className="section-title">
            {cases.title}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            {cases.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.items.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-card p-6 flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                <span className="inline-block text-[11px] font-mono font-medium text-tech uppercase">
                  {item.tag}
                </span>

                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {item.context && (
                  <p className="text-xs text-muted-foreground/90 border-l-2 border-border pl-3 pt-0.5">
                    {item.context}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-border">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.stack}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
