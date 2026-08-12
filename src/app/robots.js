import { SITE_URL } from '../data/site'

/* Metadata routes must opt into static generation explicitly under
   `output: 'export'` — without it Next 16 treats them as dynamic and refuses
   to export. Emits out/robots.txt. */
export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
