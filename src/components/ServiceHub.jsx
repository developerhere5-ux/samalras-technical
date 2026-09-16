import Link from 'next/link'
import { CheckIcon, ArrowRightIcon } from '@phosphor-icons/react/ssr'
import { SERVICES_LIST } from '../data/services'

function HubCard({ service }) {
  const { card, path, navLabel } = service
  return (
    <article className="glass glass-card flex flex-col overflow-hidden rounded-2xl">
      <img
        src={card.image}
        alt={card.alt}
        className="aspect-video w-full object-cover"
        width="1200"
        height="675"
        loading="lazy"
      />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h2 className="font-display text-lg font-bold text-slate-900">{card.title}</h2>
        <p className="mt-1 text-sm font-medium text-blue-700">{card.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.description}</p>

        <ul className="mt-5 space-y-2.5">
          {card.features.map((feature) => (
            <li key={feature} className="flex items-start justify-center gap-2.5 text-sm text-slate-700 sm:justify-start">
              <CheckIcon size={16} weight="bold" className="mt-0.5 shrink-0 text-emerald-600" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          <Link
            href={path}
            className="btn-press inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/25 transition hover:bg-blue-800"
            aria-label={`View details for ${navLabel} services in Dubai`}
          >
            View Details
            <ArrowRightIcon size={17} weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}

/* Prop-driven like every other section: the homepage spreads HOME.hub, the
   /services hub spreads its own copy from SERVICES_HUB. Same cards either way —
   only the section heading and intro differ, which is what keeps the two pages
   from competing as duplicate content. */
export default function ServiceHub({ heading, intro }) {
  return (
    <section id="services" className="mobile-center relative py-20 sm:py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rule max-w-2xl">
          <h2 id="services-heading" className="font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{intro}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES_LIST.map((service) => (
            <HubCard key={service.path} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
