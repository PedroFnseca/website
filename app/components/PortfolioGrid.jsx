"use client";

import { useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Star, GitFork, Calendar, RefreshCw } from "lucide-react";
import { fetchGitHubRepos } from "../services/githubService";
import { useLanguage } from "../providers/LanguageProvider";

export default function PortfolioGrid() {
  const { dictionary } = useLanguage();
  const categories = dictionary.portfolio.categories;
  const categoryMap = dictionary.portfolio.languageCategoryMap;
  const categoryLabels = dictionary.portfolio.categoryLabels;
  const fallbackCategoryLabel = dictionary.portfolio.labels.fallbackCategory;

  const [filter, setFilter] = useState(
    () => categories[0]?.value ?? "featured"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const formatTimeAgo = useCallback(
    (dateString) => {
      if (!dateString) {
        return "";
      }

      const date = new Date(dateString);
      const now = new Date();
      const seconds = Math.floor((now - date) / 1000);

      const intervals = [
        { key: "year", value: 31536000 },
        { key: "month", value: 2592000 },
        { key: "week", value: 604800 },
        { key: "day", value: 86400 },
        { key: "hour", value: 3600 },
        { key: "minute", value: 60 },
      ];

      for (const interval of intervals) {
        const quantity = Math.floor(seconds / interval.value);
        if (quantity >= 1) {
          const labels = dictionary.portfolio.timeAgo.units[interval.key] || {};
          const label =
            quantity === 1
              ? labels.singular ?? interval.key
              : labels.plural ?? `${interval.key}s`;
          return `${dictionary.portfolio.timeAgo.prefix} ${quantity} ${label}`;
        }
      }

      return dictionary.portfolio.timeAgo.justNow;
    },
    [dictionary.portfolio.timeAgo]
  );

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["github-repos"],
    queryFn: () => fetchGitHubRepos(),
    staleTime: 60 * 60 * 1000,
  });

  const projects = data?.repos || [];
  const stats = data?.stats || { totalRepos: 0, totalStars: 0, totalForks: 0 };

  const normalizedProjects = projects.map((project) => {
    const normalizedCategory = categoryMap[project.category] || "other";

    return {
      ...project,
      normalizedCategory,
      displayCategory:
        categoryLabels[normalizedCategory] ||
        project.category ||
        fallbackCategoryLabel,
    };
  });

  const getFilteredProjects = () => {
    if (filter === "featured") {
      return normalizedProjects.sort((a, b) => b.stars - a.stars).slice(0, 6);
    }
    if (filter === "all") {
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
            <p className="mt-4 text-muted-foreground">
              {dictionary.portfolio.loading}
            </p>
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
              {dictionary.portfolio.errorPrefix}: {error.message}
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
            {dictionary.portfolio.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {stats.totalRepos} {dictionary.portfolio.subtitleSuffix}
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Star className="w-5 h-5" />
              <span className="font-semibold">
                {stats.totalStars} {dictionary.portfolio.stats.stars}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <GitFork className="w-5 h-5" />
              <span className="font-semibold">
                {stats.totalForks} {dictionary.portfolio.stats.forks}
              </span>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 px-4">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleFilterChange(category.value)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                filter === category.value
                  ? "glass-button scale-105 sm:scale-110"
                  : "glass-button opacity-70 hover:opacity-100"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-3xl overflow-hidden hover-lift transition-all duration-500 ease-out hover:border-primary/30 cursor-pointer block"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-base font-bold text-primary px-3 py-1.5 rounded-lg border border-primary/30">
                    {project.displayCategory}
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
                    <span className="font-medium">
                      {dictionary.portfolio.labels.created}
                    </span>
                    <span>{formatTimeAgo(project.createdAt)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span className="font-medium">
                      {dictionary.portfolio.labels.updated}
                    </span>
                    <span>{formatTimeAgo(project.updatedAt)}</span>
                  </div>
                </div>

                {project.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.topics.slice(0, 4).map((topic) => (
                      <span
                        key={topic}
                        className="text-xs font-semibold from-primary/20 to-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20 hover:border-primary/40 transition-colors"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>

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
              {dictionary.portfolio.buttons.previous}
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
              {dictionary.portfolio.buttons.next}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
