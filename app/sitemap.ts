import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://reddyraj.com';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/september-cricket-news/`, lastModified, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/big-bash-league-2026-27/`, lastModified, changeFrequency: 'daily', priority: 0.8 },
  ];
}
