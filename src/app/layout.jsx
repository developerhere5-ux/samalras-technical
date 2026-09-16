import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import '../index.css'
import { SITE_URL, BUSINESS_NAME } from '../data/site'
// import { trackingBootstrapScript } from '../lib/tracking'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

const GTM_ID = 'GTM-WQDCRSF7'


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

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Painting, Flooring, AC Duct Cleaning & Electrician & Plumber, Cleaning Services, & Carpenter In Dubai | Sama Alras',
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
      <div className="absolute -top-32 -left-32 h-144 w-[36rem] rounded-full bg-[#0084ffda] blur-[250px]" />
      <div className="absolute top-1/4 -right-40 h-[42rem] w-[40rem] rounded-full bg-sky-500/50 backdrop-blur-sm shadow-lg shadow-sky-900 blur-[420px] " />
      <div className="absolute top-2/3 right-1/4 h-[26rem] w-[26rem] rounded-full bg-blue-600  blur-[150px] drop-shadow-xl" />
    </div>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${outfit.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Navbar />
        <Backdrop />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
