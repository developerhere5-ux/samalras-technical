import { SITE_URL, BUSINESS_NAME, LICENSE_NO, AREAS, FACEBOOK_URL, INSTAGRAM_URL, GBP_URL, GEO } from './site'
import { SERVICES_LIST, SERVICES_BY_PATH } from './services'
import { HOME } from './home'

const OG_IMAGE = `${SITE_URL}/og-cover.jpg`
const TELEPHONE = '+971582731458'

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Office G06-128, The Exchange Tower',
  addressLocality: 'Business Bay, Dubai',
  addressRegion: 'Dubai',
  addressCountry: 'AE',
}

const AREA_SERVED = [
  { '@type': 'City', name: 'Dubai' },
  ...AREAS.slice(0, 9).map((a) => ({ '@type': 'Place', name: a })),
]

const OPENING_HOURS = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '08:00',
  closes: '22:00',
}

const LICENSE_IDENTIFIER = {
  '@type': 'PropertyValue',
  name: 'License Number',
  value: LICENSE_NO,
}

/* The Google Business Profile belongs in `sameAs` — it is the strongest signal
   available that the website entity and the GBP entity are the same business. */
const SAME_AS = [GBP_URL, FACEBOOK_URL, INSTAGRAM_URL]

function faqLd(faq, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    // Every other node carries an @id; without one the FAQ floated in the graph
    // as an anonymous node that nothing could reference.
    '@id': `${url}#faq`,
    isPartOf: { '@id': `${url}#webpage` },
    inLanguage: 'en',
    mainEntity: faq.items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  }
}

/**
 * A service page describes a SERVICE the business provides — not a separate
 * business. Each page used to emit its own LocalBusiness node carrying the same
 * name, address, phone and trade licence under a page-scoped @id, which put five
 * identical-looking companies into the graph and split the entity.
 *
 * Now there is exactly one business (`${SITE_URL}/#business`, emitted on every
 * page) and each service page adds a Service node that points at it via
 * `provider`. The trade-specific schema type is preserved losslessly through
 * `additionalType` rather than by minting a second business.
 *
 * Note there is deliberately no price, priceCurrency, priceRange or
 * PriceSpecification anywhere in this file — quoting is per-job.
 */
function serviceLd(service) {
  const url = `${SITE_URL}${service.path}`
  const node = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.serviceName,
    serviceType: service.serviceName,
    description: service.meta.description,
    url,
    image: OG_IMAGE,
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: AREA_SERVED,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.serviceName,
      itemListElement: service.services.items.map((it) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: it.title, description: it.description },
      })),
    },
  }

  // Only the genuinely trade-specific types add signal here. Flooring falls back
  // to the generic business type, which would be meaningless on a Service node.
  if (service.schemaType !== 'HomeAndConstructionBusiness') {
    node.additionalType = `https://schema.org/${service.schemaType}`
  }

  return node
}

const businessLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  legalName: BUSINESS_NAME,
  description:
    'Sama Alras Technical Services is a licensed Dubai company providing professional painting, licensed plumbing, SPC and other flooring, AC duct cleaning, and licensed electrical services across every community in Dubai.',
  url: `${SITE_URL}/`,
  telephone: TELEPHONE,
  image: OG_IMAGE,
  address: ADDRESS,
  identifier: LICENSE_IDENTIFIER,
  sameAs: SAME_AS,
  hasMap: GBP_URL,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },
  areaServed: AREA_SERVED,
  openingHoursSpecification: OPENING_HOURS,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Technical Services in Dubai',
    itemListElement: SERVICES_LIST.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.serviceName,
        url: `${SITE_URL}${s.path}`,
        description: s.card.description,
      },
    })),
  },
}

function webPageLd(path, title) {
  const url = `${SITE_URL}${path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    isPartOf: { '@type': 'WebSite', name: BUSINESS_NAME, url: `${SITE_URL}/` },
    about: { '@id': `${SITE_URL}/#business` },
    breadcrumb: { '@id': `${url}#breadcrumb` },
  }
}

/**
 * Home is not in PAGES as a trail node — it is prepended here and keeps the
 * trailing slash (`${SITE_URL}/`) that the rest of the graph uses for the site
 * root. Every other item is `${SITE_URL}${entry.path}`, extensionless, matching
 * the canonical exactly.
 */
function breadcrumbLd(path) {
  const url = `${SITE_URL}${path}`
  const entries = [{ name: 'Home', path: '/' }, ...getTrail(path)]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: entries.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: entry.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${entry.path}`,
    })),
  }
}

/**
 * The /services hub is the only page describing the whole catalogue rather than
 * one trade, so it carries an extra node enumerating every service. The list is
 * derived from SERVICES_LIST, so a new service joins it with no edit here.
 *
 * It references the one business node by @id rather than repeating it, and — as
 * everywhere else in this file — carries no price data of any kind.
 */
function servicesCollectionLd(path) {
  const url = `${SITE_URL}${path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#collection`,
    name: 'Technical Services in Dubai',
    description:
      'Every service provided by Sama Alras Technical Services in Dubai: painting, plumbing, SPC and other flooring, licensed electrical work and AC duct cleaning.',
    isPartOf: { '@id': `${url}#webpage` },
    about: { '@id': `${SITE_URL}/#business` },
    inLanguage: 'en',
    mainEntity: {
      '@type': 'ItemList',
      '@id': `${url}#servicelist`,
      name: 'Technical Services in Dubai',
      numberOfItems: SERVICES_LIST.length,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: SERVICES_LIST.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: service.serviceName,
        url: `${SITE_URL}${service.path}`,
      })),
    },
  }
}

/* `crumb` is the visible breadcrumb label AND the BreadcrumbList name, so the
   rendered trail and the structured data can never disagree. `priority` and
   `changeFrequency` feed src/app/sitemap.js. */
const PAGES = {
  '/': {
    title: 'Best Home Services Providers Near You In Dubai',
    // Service names only, as requested.
    description:
      'Painting Services, Plumbing Services, SPC Flooring, Electrician Services and AC Duct Cleaning in Dubai.',
    keywords:
      'technical services dubai, painting services dubai, house painting dubai, villa painting dubai, apartment painting dubai, plumbing services dubai, plumber in dubai, emergency plumber dubai, water heater repair dubai, spc flooring dubai, vinyl flooring dubai, laminate flooring dubai, ac duct cleaning dubai, ac duct cleaning services dubai, duct sanitisation dubai, electrician dubai, emergency electrician dubai, electrical wiring dubai, home maintenance dubai',
    crumb: 'Home',
    priority: 1.0,
    changeFrequency: 'weekly',
  },
  /* The hub for the five service pages. Without a route of its own, /services is
     only a directory in the export and Apache answers it with a 403. */
  '/services': {
    title: 'Our Services | Home Maintenance & Technical Services in Dubai',
    description:
      'Browse all five technical services from Sama Alras: painting, plumbing, SPC flooring, licensed electrical work and AC duct cleaning across every community in Dubai. Free site visit, fixed written quote and a workmanship warranty on every job.',
    keywords:
      'technical services dubai, home maintenance services dubai, home maintenance company dubai, technical services company dubai, property maintenance dubai, painting services dubai, plumbing services dubai, spc flooring dubai, electrician dubai, ac duct cleaning dubai, all home services dubai',
    crumb: 'Services',
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  '/about': {
    title: 'About Us | Sama Alras Technical Services in Dubai',
    description:
      'Sama Alras Technical Services is a trusted Dubai company for painting, plumbing, flooring, AC duct cleaning and electrical work, serving 4,800+ homes and businesses since 2013. Meet the five specialist teams behind the work.',
    keywords:
      'about sama alras, technical services company dubai, painting flooring electrical dubai, plumbing company dubai, ac duct cleaning company dubai, licensed technical services team dubai',
    crumb: 'About',
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  '/contact': {
    title: 'Contact Us | Sama Alras Technical Services in Dubai',
    description:
      'Contact Sama Alras Technical Services for a free quote on painting, flooring, AC duct cleaning or electrical work in Dubai. Call +971 58 273 1458, WhatsApp or send the quick form, 7 days a week.',
    keywords:
      'contact sama alras, free quote dubai, painter flooring electrician dubai contact, ac duct cleaning quote dubai',
    crumb: 'Contact',
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Sama Alras Technical Services',
    description:
      'How Sama Alras Technical Services collects, uses and protects your personal information when you request a quote or use our website.',
    keywords: '',
    crumb: 'Privacy Policy',
    priority: 0.3,
    changeFrequency: 'yearly',
  },
  '/terms': {
    title: 'Terms & Conditions | Sama Alras Technical Services',
    description:
      'The terms and conditions that apply to quotes, bookings, warranties and services provided by Sama Alras Technical Services in Dubai.',
    keywords: '',
    crumb: 'Terms & Conditions',
    priority: 0.3,
    changeFrequency: 'yearly',
  },
}

for (const service of SERVICES_LIST) {
  PAGES[service.path] = {
    title: service.meta.title,
    description: service.meta.description,
    keywords: service.meta.keywords,
    crumb: service.navLabel,
    priority: 0.9,
    changeFrequency: 'weekly',
  }
}

export const ALL_PATHS = Object.keys(PAGES)

/** Ordered trail for a path, excluding Home. Each entry is { name, path }.
 *  A parent segment only becomes a trail node if it is a REAL page in PAGES —
 *  so the trail can never link to a URL that does not exist. */
export function getTrail(path) {
  if (path === '/') return []
  const segments = path.split('/').filter(Boolean)
  const trail = []
  let acc = ''
  for (const segment of segments) {
    acc += `/${segment}`
    if (PAGES[acc]) trail.push({ name: PAGES[acc].crumb, path: acc })
  }
  return trail
}

/** Visible breadcrumb label for a path — same string the JSON-LD uses. */
export function getCrumb(path) {
  return (PAGES[path] || PAGES[FALLBACK_PATH]).crumb
}

/** Rows for src/app/sitemap.js, so the sitemap can never drift from the routes. */
export function getSitemapEntries() {
  return ALL_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    priority: PAGES[path].priority,
    changeFrequency: PAGES[path].changeFrequency,
  }))
}

const FALLBACK_PATH = '/'
const SERVICES_HUB_PATH = '/services'

/**
 * One business entity, identical on all ten pages. /about, /contact and the
 * legal pages previously emitted a stripped-down node under the same
 * `${SITE_URL}/#business` id the homepage used for its full node — one entity
 * described two different ways depending on where a crawler landed.
 */
function businessNodeFor() {
  return businessLd
}

function faqFor(path) {
  if (path === '/') return HOME.faq
  if (SERVICES_BY_PATH[path]) return SERVICES_BY_PATH[path].faq
  return null
}

export function getPageMeta(path) {
  const key = PAGES[path] ? path : FALLBACK_PATH
  const page = PAGES[key]
  const canonical = `${SITE_URL}${key}`

  const jsonLd = [businessNodeFor()]
  const service = SERVICES_BY_PATH[key]
  if (service) jsonLd.push(serviceLd(service))
  if (key === SERVICES_HUB_PATH) jsonLd.push(servicesCollectionLd(key))
  const faq = faqFor(key)
  if (faq) jsonLd.push(faqLd(faq, canonical))
  jsonLd.push(webPageLd(key, page.title))
  jsonLd.push(breadcrumbLd(key))

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords || '',
    canonical,
    og: {
      title: page.title,
      description: page.description,
      url: canonical,
      image: OG_IMAGE,
    },
    jsonLd,
  }
}

/**
 * Adapts getPageMeta() into the object Next's App Router expects back from
 * `generateMetadata`. Next *replaces* rather than merges `openGraph` and
 * `twitter` when a page defines them, so the shared fields the root layout
 * sets (type, locale, siteName, card) are repeated here instead of inherited —
 * otherwise every page but the 404 would silently lose them.
 */
export function buildMetadata(path) {
  const meta = getPageMeta(path)

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords || undefined,
    alternates: { canonical: meta.canonical },
    openGraph: {
      type: 'website',
      locale: 'en_AE',
      siteName: BUSINESS_NAME,
      title: meta.og.title,
      description: meta.og.description,
      url: meta.og.url,
      images: [{ url: meta.og.image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.og.title,
      description: meta.og.description,
      images: [meta.og.image],
    },
  }
}
