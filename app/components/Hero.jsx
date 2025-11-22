"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../providers/LanguageProvider";

export default function Hero() {
  const { dictionary, t } = useLanguage();

  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-4 sm:mt-10 text-3xl sm:text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">{dictionary.general.name}</span>
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.div
            className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#projects" className="apple-button text-center">
              {dictionary.general.viewProjects}
            </a>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-12 sm:mt-16 lg:mt-0 max-w-sm sm:max-w-md lg:max-w-none"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <div className="w-full aspect-square max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] mx-auto rounded-2xl shadow-xl ring-1 ring-gray-900/10 overflow-hidden">
              <Image
                src="/pedro-fonseca.jpg"
                alt="Pedro Fonseca"
                width={500}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
