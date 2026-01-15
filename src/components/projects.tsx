import { useEffect, useState } from 'react';
import { ArrowUpRight, GitFork, Star } from 'lucide-react';

const GITHUB_USERNAME = 'DayOneAbu';
// Repos to showcase (exact repo names from GitHub)
const SELECTED_REPOS: string[] = [
  'alx-system_engineering-devops',
  'celavie-frontend',
  'hotel_reservation',
  'internship_manegment_system-php',
  'RAG-chat',
  'Xclone',
];

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
};

type GitHubUser = {
  public_repos: number;
  followers: number;
  following: number;
};

export const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [userStats, setUserStats] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError(null);

        const headers: HeadersInit = { Accept: 'application/vnd.github+json' };

        const userRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
          { headers }
        );

        if (!userRes.ok) {
          const errorText = await userRes.text();
          throw new Error(
            `Unable to load GitHub profile (${userRes.status}): ${
              errorText || 'Check the username.'
            }`
          );
        }

        const userJson: GitHubUser = await userRes.json();
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
          { headers }
        );

        if (!reposRes.ok) {
          const errorText = await reposRes.text();
          throw new Error(
            `Unable to load GitHub repositories (${reposRes.status}): ${
              errorText || 'Check the username.'
            }`
          );
        }

        const reposJson: GitHubRepo[] = await reposRes.json();

        const selected = reposJson
          .filter((repo) => SELECTED_REPOS.includes(repo.name))
          // Sort by most recently updated
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );

        setUserStats(userJson);
        setRepos(selected);
      } catch (err) {
        console.error(err);
        setError(
          err instanceof Error
            ? err.message
            : 'Something went wrong while talking to GitHub.'
        );
      } finally {
        setLoading(false);
      }
    };

    if (GITHUB_USERNAME && GITHUB_USERNAME.trim() !== '') {
      fetchGitHubData();
    } else {
      setLoading(false);
      setError('Set your GitHub username in the Projects section.');
    }
  }, []);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-10 mb-12 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            My GitHub Preview
          </h2>
          <p className="mt-3 text-muted-foreground text-base md:text-lg">
            A snapshot of the projects I&apos;ve been building recently — pulled
            live from my GitHub profile.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm md:text-xs">
          <div className="rounded-xl border border-white/10 px-4 py-3 bg-white/5 backdrop-blur-sm">
            <p className="text-muted-foreground">Public repos</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">
              {userStats ? userStats.public_repos : loading ? '—' : '0'}
            </p>
          </div>
          <div className="rounded-xl border border-white/10 px-4 py-3 bg-white/5 backdrop-blur-sm">
            <p className="text-muted-foreground">Followers</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">
              {userStats ? userStats.followers : loading ? '—' : '0'}
            </p>
          </div>
          <div className="rounded-xl border border-white/10 px-4 py-3 bg-white/5 backdrop-blur-sm">
            <p className="text-muted-foreground">Following</p>
            <p className="mt-1 text-2xl font-semibold text-foreground">
              {userStats ? userStats.following : loading ? '—' : '0'}
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-8 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {loading && (
        <div className="mt-8 text-center text-muted-foreground">
          Fetching projects from GitHub…
        </div>
      )}

      {!loading && repos.length === 0 && !error && (
        <div className="mt-8 text-center text-muted-foreground">
          No repositories found. Once you add projects to GitHub, they will
          appear here.
        </div>
      )}

      {!loading && repos.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-muted/30 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-accent/70 hover:bg-muted/50"
            >
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <h3 className="truncate text-lg font-semibold text-foreground">
                    {repo.name}
                  </h3>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                {repo.description && (
                  <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                    {repo.description}
                  </p>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-3">
                  {repo.language && (
                    <span className="rounded-full bg-black/20 px-3 py-1 text-[11px] uppercase tracking-wide">
                      {repo.language}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {repo.stargazers_count}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork className="h-3 w-3" />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

