import Link from 'next/link'
import { ArrowRightIcon } from '@phosphor-icons/react/ssr'
import { SERVICES_LIST } from '../data/services'

export default function RelatedServices({ currentPath }) {
  const others = SERVICES_LIST.filter((service) => service.path !== currentPath)
  return (
    <section className="mobile-center relative py-16 sm:py-20" aria-labelledby="related-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rule max-w-2xl">
          <h2 id="related-heading" className="font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Explore Our Other Services in Dubai
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            One trusted team for your whole property. Take a look at what else we do across Dubai.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((service) => (
            <Link
              key={service.path}
              href={service.path}
              className="glass glass-card group flex flex-col rounded-2xl p-6 sm:p-7"
            >
              <h3 className="font-display text-lg font-bold text-slate-900">{service.card.title} in Dubai</h3>
              <p className="mt-1 text-sm font-medium text-blue-700">{service.card.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{service.card.description}</p>
              <span className="mt-5 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-blue-700 transition group-hover:text-blue-800 sm:justify-start">
                View details
                <ArrowRightIcon size={15} weight="bold" aria-hidden="true" />
              </span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="glass-strong group flex flex-col justify-center rounded-2xl p-6 text-center sm:p-7"
          >
            <h3 className="font-display text-lg font-bold text-slate-900">Not sure what you need?</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Tell us about your property and we will point you to the right team with a free quote.
            </p>
            <span className="mt-5 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-blue-700 transition group-hover:text-blue-800">
              Contact us
              <ArrowRightIcon size={15} weight="bold" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
