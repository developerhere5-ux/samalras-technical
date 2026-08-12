import Link from 'next/link'
import { PhoneCallIcon, WhatsappLogoIcon, FacebookLogoIcon, InstagramLogoIcon } from '@phosphor-icons/react/ssr'
import { BUSINESS_NAME, WA_HREF, LICENSE_NO, BUSINESS_ADDRESS, FACEBOOK_URL, INSTAGRAM_URL } from '../data/site'
import { SERVICES_LIST } from '../data/services'

export default function Footer() {
  return (
    <footer className="mobile-center relative border-t border-slate-900/10 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block" aria-label="Home">
              <img
                src="/images/logo-nav.webp"
                alt="Sama Alras Technical Services"
                className="h-12 w-auto"
                width="360"
                height="130"
                loading="lazy"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              Sama Alras Technical Services has served Dubai since 2013. Professional
              painting, SPC and other flooring, and licensed electrical work, delivered
              by one trusted team and backed by a written warranty.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
              <a href="tel:+971582731458" className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-blue-700">
                <PhoneCallIcon size={16} weight="bold" aria-hidden="true" /> +971 58 273 1458
              </a>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-emerald-700"
              >
                <WhatsappLogoIcon size={16} weight="bold" aria-hidden="true" /> WhatsApp
              </a>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3 sm:justify-start">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Sama Alras Technical Services on Facebook"
                className="glass-chip grid h-10 w-10 place-items-center rounded-full text-slate-600 transition hover:text-blue-700"
              >
                <FacebookLogoIcon size={20} weight="regular" aria-hidden="true" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Sama Alras Technical Services on Instagram"
                className="glass-chip grid h-10 w-10 place-items-center rounded-full text-slate-600 transition hover:text-blue-700"
              >
                <InstagramLogoIcon size={20} weight="regular" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Services">
            <h3 className="font-display text-sm font-bold tracking-wide text-slate-900 uppercase">
              <Link href="/services" className="transition hover:text-blue-700">
                Our services
              </Link>
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES_LIST.map((service) => (
                <li key={service.path}>
                  <Link href={service.path} className="text-sm text-slate-600 transition hover:text-blue-700">
                    {service.card.title} in Dubai
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-bold tracking-wide text-slate-900 uppercase">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/about" className="transition hover:text-blue-700">About us</Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-blue-700">Contact us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="transition hover:text-blue-700">Privacy policy</Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-blue-700">Terms and conditions</Link>
              </li>
              <li>
                <a href="tel:+971582731458" className="transition hover:text-blue-700">+971 58 273 1458</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-900/10 pt-6 sm:flex-row">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} {BUSINESS_NAME}, Dubai. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">License No: {LICENSE_NO}</p>
          </div>
          <p className="max-w-xs text-center text-xs leading-relaxed text-slate-500 sm:text-right">
            {BUSINESS_ADDRESS}
          </p>
        </div>
      </div>
    </footer>
  )
}
