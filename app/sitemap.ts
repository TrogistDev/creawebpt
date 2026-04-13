import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.creawebpt.pt',
      lastModified: new Date(),
    },
  ]
}
