"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Github } from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";

const CODE_SNIPPET = `int userId = 0;
char title[64];
bool completed;

client.get("/todos/1")
      .getBody("userId", &userId)
      .getBody("title", title, sizeof(title))
      .getBody("completed", &completed);`;

export default function Esp32HttpClientShowcase() {
  const { dictionary } = useLanguage();
  const content = dictionary.esp32Showcase;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CODE_SNIPPET);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="esp32-http-client"
      className="py-20 bg-background"
      aria-labelledby="esp32-showcase-title"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {content.eyebrow}
            </p>

            <h2
              id="esp32-showcase-title"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
            >
              <span className="text-gradient">{content.title}</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              {content.description}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {content.stats.map((stat) => (
                <span key={stat} className="font-medium text-foreground/90">
                  {stat}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://esp32httpclient.com/getting-started/quickstart"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button inline-flex items-center justify-center gap-2"
              >
                <span>{content.primaryCta}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="https://esp32httpclient.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>{content.secondaryCta}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="https://github.com/PedroFnseca/esp32-http-client"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub - ESP32 HTTP Client"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative glass-card rounded-3xl p-6 sm:p-8 hover-lift">
              <button
                type="button"
                onClick={handleCopy}
                className="absolute top-4 right-4 glass-button inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
                aria-label={content.copyLabel}
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    <span>{content.copiedLabel}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{content.copyLabel}</span>
                  </>
                )}
              </button>

              <pre className="pt-4 text-xs sm:text-sm leading-relaxed overflow-x-auto text-foreground font-mono">
                <code>{CODE_SNIPPET}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
