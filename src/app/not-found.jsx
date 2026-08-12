import Link from 'next/link'
import { ArrowRightIcon } from '@phosphor-icons/react/ssr'
import { SERVICES_LIST } from '../data/services'

/* Exported to out/404.html; public/.htaccess serves it via ErrorDocument.
   Noindex because a 404 body should never enter the index. */
export const metadata = {
  title: 'Page not found | Sama Alras Technical Services',
  description: 'The page you were looking for is not here. Browse our services in Dubai instead.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="mobile-center relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rule">
          <p className="font-display text-sm font-bold tracking-wide text-blue-700 uppercase">404</p>
          <h1 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            We could not find that page
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            The link may be out of date. Here is everything we do in Dubai — or head
            back to the homepage.
          </p>
        </div>

        <ul className="mt-8 space-y-2.5">
          {SERVICES_LIST.map((service) => (
            <li key={service.path}>
              <Link
                href={service.path}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
              >
                {service.card.title} in Dubai
                <ArrowRightIcon size={14} weight="bold" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
          <Link
            href="/"
            className="btn-press inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/25 transition hover:bg-blue-800"
          >
            Back to homepage
          </Link>
          <Link
            href="/contact"
            className="glass-chip inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-blue-700"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
