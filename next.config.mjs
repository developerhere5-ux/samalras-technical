/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Fully static HTML export into `out/`. The site has no server-side work at
     runtime — the contact form posts straight to Web3Forms from the browser —
     so exporting keeps the current Apache/Hostinger deployment working while
     still building fine on Vercel. */
  output: 'export',

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  /* Canonical URLs are extensionless and have no trailing slash
     (https://samalras.com/about), which is what `public/.htaccess` serves and
     what every canonical/sitemap/JSON-LD entry already claims. Leaving this
     false keeps <Link> hrefs identical to the canonicals, so internal clicks
     never bounce through a 301. */
  trailingSlash: false,

  /* The image optimizer needs a server. Images in public/ are already
     hand-compressed to WebP under a byte budget by `npm run images`. */
  images: { unoptimized: true },
}

export default nextConfig
