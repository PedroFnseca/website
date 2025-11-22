"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { Star, GitFork, Calendar, RefreshCw } from "lucide-react";
import { fetchGitHubRepos } from "../services/githubService";

const formatTimeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  const intervals = {
    ano: 31536000,
    meses: 2592000,
    semanas: 604800,
    dias: 86400,
    horas: 3600,
    minutos: 60,
  };

  for (const [name, secondsInInterval] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInInterval);
    if (interval >= 1) {
      return `há ${interval} ${name}`;
    }
  }

  return "agora mesmo";
};

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("Destaques");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["github-repos"],
    queryFn: () => fetchGitHubRepos(),
    staleTime: 60 * 60 * 1000,
  });

  const projects = data?.repos || [];
  const stats = data?.stats || { totalRepos: 0, totalStars: 0, totalForks: 0 };

  const categoryMap = {
    JavaScript: "JavaScript",
    TypeScript: "JavaScript",
    C: "C",
    "C#": "C#",
    Python: "Python",
    "Jupyter Notebook": "Python",
    Java: "Java",
  };

  const normalizedProjects = projects.map((project) => ({
    ...project,
    normalizedCategory: categoryMap[project.category] || "Outros",
  }));

  const categories = [
    "Destaques",
    "Todos",
    "JavaScript",
    "C",
    "C#",
    "Python",
    "Java",
  ];

  const getFilteredProjects = () => {
    if (filter === "Destaques") {
      return normalizedProjects.sort((a, b) => b.stars - a.stars).slice(0, 6);
    }
    if (filter === "Todos") {
      return normalizedProjects;
    }
    return normalizedProjects.filter(
      (project) => project.normalizedCategory === filter
    );
  };

  const allFilteredProjects = getFilteredProjects();
  const totalPages = Math.ceil(allFilteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filteredProjects = allFilteredProjects.slice(startIndex, endIndex);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
            <p className="mt-4 text-muted-foreground">Carregando projetos...</p>
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-500">
              Erro ao carregar projetos: {error.message}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Meus Projetos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {stats.totalRepos} repositórios públicos no GitHub
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Star className="w-5 h-5" />
              <span className="font-semibold">{stats.totalStars} stars</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <GitFork className="w-5 h-5" />
              <span className="font-semibold">{stats.totalForks} forks</span>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "glass-button scale-110"
                  : "glass-button opacity-70 hover:opacity-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="glass-card rounded-3xl overflow-hidden hover-lift transition-all duration-500 ease-out hover:border-primary/30 cursor-pointer block"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-base font-bold text-primary px-3 py-1.5 bg-primary/20 rounded-lg border border-primary/30 shadow-sm">
                      {project.category || "Outros"}
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground text-sm font-medium">
                      {project.stars > 0 && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>{project.stars}</span>
                        </div>
                      )}
                      {project.forks > 0 && (
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          <span>{project.forks}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="font-medium">Criado:</span>
                      <span>{formatTimeAgo(project.createdAt)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span className="font-medium">Atualizado:</span>
                      <span>{formatTimeAgo(project.updatedAt)}</span>
                    </div>
                  </div>

                  {project.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.topics.slice(0, 4).map((topic) => (
                        <span
                          key={topic}
                          className="text-xs font-semibold bg-gradient-to-r from-primary/20 to-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20 hover:border-primary/40 transition-colors"
                        >
                          #{topic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {totalPages > 1 && (
          <motion.div
            className="flex justify-center items-center gap-2 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-500 ease-out ${
                currentPage === 1
                  ? "glass-button opacity-50 cursor-not-allowed"
                  : "glass-button hover:scale-105"
              }`}
            >
              Anterior
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg font-medium transition-all duration-500 ease-out ${
                      currentPage === page
                        ? "glass-button scale-110 border-primary/50"
                        : "glass-button opacity-70 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-500 ease-out ${
                currentPage === totalPages
                  ? "glass-button opacity-50 cursor-not-allowed"
                  : "glass-button hover:scale-105"
              }`}
            >
              Próxima
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
