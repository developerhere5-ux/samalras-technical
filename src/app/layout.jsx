import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import '../index.css'
import { SITE_URL, BUSINESS_NAME } from '../data/site'
import { trackingBootstrapScript } from '../lib/tracking'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

const GTM_ID = 'GTM-WQ6BC4J6'


const displayFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display-family',
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

/* Site-wide head. Anything that differs per page lives in the route's own
   `generateMetadata` (via buildMetadata in src/data/pageMeta.js) — keep this
   block to tags that are byte-identical on all nine pages. */
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Painting, Flooring, AC Duct Cleaning & Electrician & Plumber In Dubai | Sama Alras',
  description:
    'Painting, SPC flooring, AC duct cleaning and licensed electricians Plumbers in Dubai from one trusted team. Free site visit, fixed written quote and a warranty on every job.',
  authors: [{ name: BUSINESS_NAME }],
  icons: { icon: '/favicon.png' },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
  other: {
    'geo.region': 'AE-DU',
    'geo.placename': 'Dubai',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

/* Purely decorative blur field behind every page. */
function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full bg-[#0084ffda] blur-[250px]" />
      <div className="absolute top-1/4 -right-40 h-[42rem] w-[40rem] rounded-full bg-sky-500/50 backdrop-blur-sm shadow-lg shadow-sky-900 blur-[420px] " />
      <div className="absolute top-2/3 right-1/4 h-[26rem] w-[26rem] rounded-full bg-blue-600  blur-[150px] drop-shadow-xl" />
    </div>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${outfit.variable}`}>
      <body>
        {/* dataLayer + campaign capture + CTA listener + GTM, as one raw inline
            script and deliberately the first thing in the document body.

            It is NOT a <Script> tag: under `output: 'export'` there is no
            server render at request time, so next/script leaves nothing
            executable in the exported HTML — the snippet ends up as escaped
            string data inside the RSC flight payload and only runs once React
            has downloaded, hydrated and mounted it. Every call/WhatsApp tap
            before that fired no container at all, which cost us the Google Ads
            conversion linker and therefore the gclid → _gcl_aw cookie.
            dangerouslySetInnerHTML is the same idiom JsonLd.jsx uses, and for
            the same reason: it has to be in the HTML, not injected later.

            App Router owns <head> via the Metadata API, and React does not
            hoist inline scripts, so top-of-<body> is both the earliest place
            this can legally sit and where it renders verbatim. See
            src/lib/tracking.js for the full event schema. */}
        <script dangerouslySetInnerHTML={{ __html: trackingBootstrapScript(GTM_ID) }} />

        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Backdrop />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
