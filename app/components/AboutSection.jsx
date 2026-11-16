"use client";

import { useLanguage } from "../providers/LanguageProvider";

export default function AboutSection() {
  const { dictionary } = useLanguage();
  const about = dictionary.about;

  return (
    <section
      id="about"
      className="scroll-mt-16 bg-background py-16 sm:py-20 border-b border-border"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Coluna de título e identificação */}
          <div className="lg:col-span-4 space-y-2">
            <span className="section-eyebrow block">
              {about.eyebrow}
            </span>
            <h2 id="about-heading" className="section-title">
              {about.title}
            </h2>
          </div>

          {/* Coluna narrativa editorial (parágrafos humanos) */}
          <div className="lg:col-span-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            {about.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="first:text-foreground/90">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
