"use client";

import { motion } from "framer-motion";
import { Code, Paintbrush, Megaphone, Smartphone } from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";

const ICON_MAP = {
  Paintbrush,
  Code,
  Megaphone,
  Smartphone,
};

export default function Services() {
  const { dictionary } = useLanguage();
  const services = dictionary.services.items.map((service) => {
    const Icon = service.icon ? ICON_MAP[service.icon] ?? Code : Code;
    return {
      ...service,
      Icon,
    };
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {dictionary.services.title}
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card p-6 rounded-lg hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <service.Icon
                className={`w-12 h-12 mb-4 ${
                  service.colorClass ?? "text-primary"
                }`}
              />
              <h3 className="text-xl font-bold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
