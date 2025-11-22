"use client";

import { motion } from "framer-motion";

export default function WearYourStory() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvedor full stack com foco em alta performance, capaz de
            criar soluções que vão desde sistemas de baixo nível até aplicações
            modernas em nuvem. Uno experiência prática, rigor técnico e
            curiosidade científica para transformar ideias em produtos reais,
            escaláveis e bem estruturados. Atuo com profundidade em backend,
            automações, engenharia de software e computação experimental sempre
            buscando inovação, clareza e impacto em cada projeto.
          </p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="#timeline"
              className="apple-button inline-flex items-center"
            >
              Ver Minha Jornada
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
