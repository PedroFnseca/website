"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Github, ExternalLink } from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";

const CODE_SNIPPET = `int userId = 0;
char title[64];
bool completed = false;

// Leitura em streaming: vincula campos diretamente a variáveis
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
      className="scroll-mt-16 py-16 sm:py-20 border-b border-border bg-background"
      aria-labelledby="esp32-showcase-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Coluna da esquerda: Descrição técnica & contexto */}
          <div className="lg:col-span-6 space-y-4">
            <span className="section-eyebrow block">
              {content.eyebrow}
            </span>

            <h2
              id="esp32-showcase-title"
              className="section-title"
            >
              {content.title}
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
              {content.description}
            </p>

            {/* Badges de recursos */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {content.stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded border border-border bg-secondary/50 px-2.5 py-1 text-xs font-mono text-foreground"
                >
                  {stat}
                </span>
              ))}
            </div>

            {/* Nota de benchmark contextualizada */}
            {content.benchmarkNote && (
              <p className="text-xs text-muted-foreground/80 border-l-2 border-border pl-3 pt-0.5">
                {content.benchmarkNote}
              </p>
            )}

            {/* Ações */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://github.com/PedroFnseca/ESP32-HTTP-Client"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span>{content.primaryCta}</span>
                <ArrowUpRight className="h-4 w-4 opacity-70" aria-hidden="true" />
              </a>

              <a
                href="https://esp32httpclient.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <ExternalLink className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span>{content.secondaryCta}</span>
              </a>
            </div>
          </div>

          {/* Coluna da direita: Exemplo de código C++ limpo */}
          <div className="lg:col-span-6">
            <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm">
              <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    example.cpp
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 rounded px-2 py-1 font-mono text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-tech" />
                      <span>{content.copiedLabel}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>{content.copyLabel}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 overflow-x-auto bg-card">
                <pre className="font-mono text-xs sm:text-sm leading-relaxed text-foreground">
                  <code>{CODE_SNIPPET}</code>
                </pre>
              </div>

              <div className="border-t border-border bg-secondary/20 px-4 py-2 text-[11px] font-mono text-muted-foreground flex items-center justify-between">
                <span>C++11 / C++17</span>
                <span>ESP32 Arduino Core</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
