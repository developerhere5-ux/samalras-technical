import { getSitemapEntries } from '../data/pageMeta'

/**
 * Generated from the same PAGES map that produces every canonical URL, so the
 * sitemap cannot drift from the routes the way the hand-maintained
 * public/sitemap.xml did. Adding a service to SERVICES_LIST adds its entry here
 * automatically.
 *
 * `force-static` is required for metadata routes under `output: 'export'`;
 * it also pins `lastModified` to build time rather than request time.
 */
export const dynamic = 'force-static'

export default function sitemap() {
  const lastModified = new Date()
  return getSitemapEntries().map((entry) => ({ ...entry, lastModified }))
}
