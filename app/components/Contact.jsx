"use client";

import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";

const contacts = [
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    value: "@PedroFnseca",
    href: "https://github.com/PedroFnseca",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "pedrofnseca",
    href: "https://www.linkedin.com/in/pedrofnseca",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "pedropereira.pp264@gmail.com",
    href: "mailto:pedropereira.pp264@gmail.com",
  },
];

export default function Contact() {
  const { dictionary } = useLanguage();
  const contact = dictionary.contact;

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-background py-16 sm:py-20 border-b border-border"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl mb-10 space-y-2">
          <span className="section-eyebrow block">
            {contact.eyebrow}
          </span>
          <h2 id="contact-heading" className="section-title">
            {contact.title}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
            {contact.subtitle}
          </p>
        </div>

        <div className="max-w-2xl divide-y divide-border border-t border-b border-border">
          {contacts.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.id !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                id={`contact-${item.id}`}
                className="group flex items-center justify-between py-4 text-foreground transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground group-hover:text-foreground transition-colors">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground group-hover:text-tech transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
