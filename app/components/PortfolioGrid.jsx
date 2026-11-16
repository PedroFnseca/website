"use client";

import { useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Star, GitFork, ArrowUpRight, Code2 } from "lucide-react";
import { fetchGitHubRepos } from "../services/githubService";
import { useLanguage } from "../providers/LanguageProvider";

const LANGUAGE_DOT_COLOR = {
  javascript: "bg-amber-400",
  c: "bg-sky-500",
  csharp: "bg-violet-500",
  python: "bg-emerald-500",
  java: "bg-orange-500",
  other: "bg-zinc-400",
};

export default function PortfolioGrid() {
  const { dictionary } = useLanguage();
  const portfolio = dictionary.portfolio;
  const categories = portfolio.categories;
  const categoryMap = portfolio.languageCategoryMap;
  const categoryLabels = portfolio.categoryLabels;
  const fallbackCategoryLabel = portfolio.labels.fallbackCategory;

  const [filter, setFilter] = useState(() => categories[0]?.value ?? "featured");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const formatTimeAgo = useCallback(
    (dateString) => {
      if (!dateString) return "";

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
          const labels = portfolio.timeAgo.units[interval.key] || {};
          const label =
            quantity === 1
              ? labels.singular ?? interval.key
              : labels.plural ?? `${interval.key}s`;
          return `${portfolio.timeAgo.prefix} ${quantity} ${label}`;
        }
      }

      return portfolio.timeAgo.justNow;
    },
    [portfolio.timeAgo]
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
      return [...normalizedProjects]
        .sort((a, b) => b.stars - a.stars)
        .slice(0, 6);
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
      <section id="projects" className="scroll-mt-16 py-16 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs text-muted-foreground">
            {portfolio.loading}
          </p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section id="projects" className="scroll-mt-16 py-16 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs text-red-500">
            {portfolio.errorPrefix}: {error.message}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="scroll-mt-16 py-16 sm:py-20 bg-background border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <span className="section-eyebrow block">
              Repositórios
            </span>
            <h2 className="section-title">{portfolio.title}</h2>
            <p className="text-sm text-muted-foreground">
              <span className="font-mono font-medium text-foreground">
                {stats.totalRepos}
              </span>{" "}
              {portfolio.subtitleSuffix}
            </p>
          </div>

          <div className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded border border-border bg-card px-2.5 py-1">
              <Star className="w-3.5 h-3.5 text-tech" />
              <span className="font-semibold text-foreground">
                {stats.totalStars}
              </span>
              <span>{portfolio.stats.stars}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded border border-border bg-card px-2.5 py-1">
              <GitFork className="w-3.5 h-3.5 text-tech" />
              <span className="font-semibold text-foreground">
                {stats.totalForks}
              </span>
              <span>{portfolio.stats.forks}</span>
            </span>
          </div>
        </div>

        {/* Abas de categoria */}
        <div className="flex flex-wrap gap-2 border-b border-border pb-3 mb-6">
          {categories.map((category) => {
            const isActive = filter === category.value;
            return (
              <button
                key={category.value}
                onClick={() => handleFilterChange(category.value)}
                className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-foreground text-background"
                    : "bg-secondary/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => {
            const dotColor =
              LANGUAGE_DOT_COLOR[project.normalizedCategory] ||
              LANGUAGE_DOT_COLOR.other;

            return (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-border bg-card p-5 transition-colors duration-150 hover:border-tech/40 flex flex-col justify-between gap-3 shadow-none"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span className={`h-2 w-2 rounded-full ${dotColor}`} />
                      <span className="font-mono text-[11px] text-foreground">
                        {project.displayCategory}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                      {project.stars > 0 && (
                        <span className="inline-flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {project.stars}
                        </span>
                      )}
                      {project.forks > 0 && (
                        <span className="inline-flex items-center gap-1">
                          <GitFork className="w-3 h-3" />
                          {project.forks}
                        </span>
                      )}
                      <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/60 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-tech transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-border text-[11px] text-muted-foreground">
                  <div className="flex flex-wrap gap-1">
                    {project.topics.slice(0, 2).map((topic) => (
                      <span key={topic} className="font-mono text-[10px] text-muted-foreground">
                        #{topic}
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-[10px] shrink-0">
                    {formatTimeAgo(project.updatedAt)}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-colors border border-border ${
                currentPage === 1
                  ? "text-muted-foreground/30 border-border/40 cursor-not-allowed"
                  : "bg-card text-foreground hover:bg-secondary"
              }`}
            >
              {portfolio.buttons.previous}
            </button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-7 h-7 rounded text-xs font-mono transition-colors ${
                    currentPage === page
                      ? "bg-foreground text-background"
                      : "border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-colors border border-border ${
                currentPage === totalPages
                  ? "text-muted-foreground/30 border-border/40 cursor-not-allowed"
                  : "bg-card text-foreground hover:bg-secondary"
              }`}
            >
              {portfolio.buttons.next}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
