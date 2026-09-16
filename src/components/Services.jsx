import { CheckIcon } from '@phosphor-icons/react/ssr'
import { PAINTING } from '../data/services'
import { CallButton, WhatsAppButton } from './CtaButtons'

function ServiceCard({ service, tall = false }) {
  return (
    <article id={service.id} className="glass glass-card flex flex-col overflow-hidden rounded-2xl">
      <img
        src={service.image}
        alt={service.alt}
        className={`${tall ? 'aspect-4/3' : 'aspect-video'} w-full object-cover`}
        width="1200"
        height={tall ? '900' : '675'}
        loading="lazy"
      />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h2 className="font-display text-lg font-bold text-slate-900">{service.title}</h2>
        <p className="mt-1 text-sm font-medium text-blue-700">{service.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>

        <ul className="mt-5 space-y-2.5">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start justify-center gap-2.5 text-sm text-slate-700 sm:justify-start">
              <CheckIcon size={16} weight="bold" className="mt-0.5 shrink-0 text-emerald-600" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
          <CallButton className="flex-1" />
          <WhatsAppButton href={service.waHref} className="flex-1" />
        </div>
      </div>
    </article>
  )
}

export default function Services({ heading = PAINTING.services.heading, intro = PAINTING.services.intro, items = PAINTING.services.items, tallImages = false }) {
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
          {items.map((service) => (
            <ServiceCard key={service.id} service={service} tall={tallImages} />
          ))}
        </div>
      </div>
    </section>
  )
}
