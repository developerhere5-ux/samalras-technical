export const BUSINESS_NAME = 'Sama Alras Technical Services'
export const PHONE_DISPLAY = '+971 58 273 1458'
export const PHONE_LINK = 'tel:+971582731458'
export const WEB3FORMS_ACCESS_KEY = '2dacad65-0000-4caa-871e-e3501fa9b960'
export const SITE_URL = 'https://samalras.com'
export const LICENSE_NO = '923026'
export const BUSINESS_ADDRESS = 'Office G06-128, The Exchange Tower, Business Bay, Dubai, United Arab Emirates'

export const wa = (text) => `https://wa.me/971582731458?text=${encodeURIComponent(text)}`

export const WA_HREF = wa('Hi! I would like a free quote in Dubai.')

export const FACEBOOK_URL = 'https://www.facebook.com/samaalrastechnical/'
export const INSTAGRAM_URL = 'https://www.instagram.com/samaalras/'

/* Google Business Profile share link. Resolves to the knowledge panel for
   "SAMA ALRAS TECHNICAL SERVICES" (Knowledge Graph MID /g/11npdcmgw8).
   Used as the map/directions destination and, more importantly, in `sameAs`
   and `hasMap` so the website entity and the GBP entity reconcile. */
export const GBP_URL = 'https://share.google/v2XOAaBq1nnG4rdmv'

/* Taken from the Google Business Profile map pin. Six decimal places is ~11cm —
   any more is noise. Single source of truth for both the embedded map and the
   GeoCoordinates node in the LocalBusiness schema, so the pin and the
   structured data can never disagree. */
export const GEO = { latitude: 25.186342, longitude: 55.260148 }

/* Promo strip under the navbar. `short` is what phones get, `full` takes over
   from sm up. Set `enabled: false` to pull the banner off every page. */
export const PROMO = {
  enabled: true,
  badge: '20% OFF',
  short: '20% off your first visit',
  full: 'Get 20% off your first visit — free site survey and a fixed quote',
  ctaLabel: 'Claim offer',
  ctaHref: '/contact',
}

export const AREAS = [
  'Dubai Marina', 'Downtown Dubai', 'Business Bay', 'Jumeirah', 'Palm Jumeirah',
  'Arabian Ranches', 'Dubai Hills Estate', 'JVC', 'JLT', 'The Springs',
  'Mirdif', 'Al Barsha', 'Motor City', 'Damac Hills', 'Deira', 'Bur Dubai',
  'International City', 'Silicon Oasis', 'Town Square', 'Emirates Hills',
]

export const STATS = [
  { value: '4,800+', label: 'Projects completed' },
  { value: '13+', label: 'Years in Dubai' },
  { value: '4.9/5', label: 'Average rating' },
  { value: '5 yr', label: 'Written warranty' },
]
