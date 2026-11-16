"use client";

import { useState } from "react";
import { Briefcase, GraduationCap, Building2 } from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";

export default function Timeline() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const { dictionary } = useLanguage();

  const content = dictionary.experience || dictionary.timeline;
  const filters = content.filters || [];
  const events = content.events || [];

  const filteredEvents = (
    selectedFilter === "all"
      ? events
      : events.filter((event) => event.type === selectedFilter)
  ).sort((a, b) => (b.sortYear || b.year) - (a.sortYear || a.year));

  return (
    <section
      id="experience"
      className="scroll-mt-16 py-16 sm:py-20 bg-background border-b border-border"
      aria-labelledby="experience-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho da seção */}
        <div className="mb-8 space-y-2 max-w-2xl">
          <span className="section-eyebrow block">
            Trajetória
          </span>
          <h2 id="experience-title" className="section-title">
            {content.title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            {content.subtitle}
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 border-b border-border pb-4 mb-8">
          {filters.map((option) => {
            const isActive = selectedFilter === option.value;
            return (
              <button
                key={option.value}
                onClick={() => setSelectedFilter(option.value)}
                className={`rounded px-3 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-foreground text-background"
                    : "bg-secondary/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Lista cronológica inversa */}
        <div className="space-y-6">
          {filteredEvents.map((event, index) => {
            const isCareer = event.type === "career";
            return (
              <div
                key={`${event.year}-${event.title}-${index}`}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-6 border-b border-border last:border-b-0"
              >
                {/* Período / Ano */}
                <div className="md:col-span-3">
                  <span className="font-mono text-xs font-semibold text-tech block">
                    {event.year}
                  </span>
                  {event.organization && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                      <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{event.organization}</span>
                    </span>
                  )}
                </div>

                {/* Detalhes & Descrição */}
                <div className="md:col-span-9 space-y-1.5">
                  <div className="flex items-center gap-2">
                    {isCareer ? (
                      <Briefcase className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    ) : (
                      <GraduationCap className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    )}
                    <h3 className="text-base font-semibold text-foreground">
                      {event.title}
                    </h3>
                  </div>

                  {event.role && (
                    <p className="text-xs font-medium text-foreground/80">
                      {event.role}
                    </p>
                  )}

                  <p className="text-sm leading-relaxed text-muted-foreground pt-1">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
