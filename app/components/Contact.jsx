"use client";

import { motion } from "framer-motion";
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
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {t("contact.eyebrow")}
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t("contact.title")}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="mx-auto max-w-2xl divide-y divide-border">
          {contacts.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.id}
                href={item.href}
                target={item.id !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                id={`contact-${item.id}`}
                className="group flex items-center justify-between py-6 text-foreground transition-colors hover:text-foreground"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-colors group-hover:border-foreground group-hover:text-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
