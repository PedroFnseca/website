"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">Pedro Fonseca</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Desenvolvedor Full Stack apaixonado por tecnologia, ciência e
            inovação. Criando soluções elegantes e eficientes do backend à
            nuvem.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#projects" className="apple-button">
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold leading-6 text-foreground"
            >
              Entre em contato <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <div className="w-[500px] h-[500px] rounded-2xl shadow-xl ring-1 ring-gray-900/10 overflow-hidden">
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
