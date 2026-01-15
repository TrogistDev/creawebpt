import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://creawebpt.vercel.app',
      lastModified: new Date(),
    },
  ]
}
