export async function fetchGitHubRepos(username = "PedroFnseca") {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar repositórios do GitHub");
  }

  const data = await response.json();

  const repos = data
    .filter((repo) => !repo.fork && !repo.private)
    .map((repo) => ({
      id: repo.id,
      title: repo.name,
      description: repo.description || "Sem descrição disponível",
      imageUrl: "/placeholder.svg?height=600&width=800",
      category: repo.language || "Other",
      url: repo.html_url,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      topics: repo.topics || [],
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
    }));

  const totalStars = repos.reduce((sum, repo) => sum + repo.stars, 0);
  const totalForks = repos.reduce((sum, repo) => sum + repo.forks, 0);

  return {
    repos,
    stats: {
      totalRepos: repos.length,
      totalStars,
      totalForks,
    },
  };
}
