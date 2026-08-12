import { Fragment } from 'react'
import Link from 'next/link'
import { StarIcon } from '@phosphor-icons/react/ssr'
import { STATS, wa } from '../data/site'
import { PAINTING, SERVICES_LIST } from '../data/services'
import { CallButton, WhatsAppButton } from './CtaButtons'
import Breadcrumbs from './Breadcrumbs'
import CountUp from './CountUp'

export default function Hero({ data = PAINTING.hero, tallImage = false, path = '/', serviceLinks = false }) {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-16 sm:pt-48 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="text-center lg:text-left">
            <Breadcrumbs path={path} />
            {/* The highlight line lives INSIDE the h1 on purpose. It renders as a
                block so it still looks like a second line, but the h1 text now
                reads as one complete phrase ("Plumbing Service in Dubai – Fast
                Same-Day Service") instead of stopping before the location. */}
            <h1 className="font-display text-4xl leading-[1.12] font-extrabold tracking-tight text sm:text-4xl lg:text-[2.65rem] text-shadow-2xs text-shadow-white">
              {data.h1Pre}
              {/* The explicit space matters: the span below is display:block, so it
                  looks like a new line, but textContent — which is what a crawler
                  reads — would otherwise run the two halves together as
                  "Plumbing Service in Dubai– Fast Same-Day Service". */}
              {/* Both halves are optional: the homepage runs a single short H1
                  with no highlight line, service pages use the two-part form. */}
              {data.h1Highlight ? (
                <>
                  {' '}
                  <span className="text-blue-600 text-shadow-2xl shadow-blue-600/30 font-semibold text-2xl font-display mt-1 block leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.65rem]">
                    {data.h1Highlight}
                  </span>
                </>
              ) : null}
            </h1>

            {/* Wrapped in <nav> rather than putting aria-label straight on the <p>:
                a paragraph has role="paragraph", which does not support an
                accessible name, so the label would simply be dropped. As a nav
                landmark it is announced, and the service links read as a group. */}
            {serviceLinks && (
              <nav aria-label="Services" className="mt-4">
                <p className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-base font-semibold lg:justify-start">
                  {SERVICES_LIST.map((service, i) => (
                    <Fragment key={service.path}>
                      {i > 0 && (
                        <span aria-hidden="true" className="text-slate-400">
                          ||
                        </span>
                      )}
                      <Link
                        href={service.path}
                        className="text-blue-700 underline-offset-4 transition hover:text-blue-900 hover:underline"
                      >
                        {service.navLabel}
                      </Link>
                    </Fragment>
                  ))}
                </p>
              </nav>
            )}

            {data.subtitle ? (
              <span aria-label="sub-title" className="mt-3 block text-[15px] font-semibold text-slate-600 sm:text-lg lg:text-xl lg:leading-snug text-pretty ">
                {data.subtitle}
              </span>
            ) : null}
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-slate-800 sm:text-lg lg:mx-0">
              {data.intro}
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:items-center lg:justify-start">
              <CallButton className="px-7 py-4 text-base" />
              <WhatsAppButton href={wa(data.whatsappText)} label="Get a Free Quote" className="px-7 py-4 text-base" />
            </div>
          </div>
          <div className="glass overflow-hidden rounded-2xl">
            <figure>
              <img
                src={data.image}
                alt={data.imageAlt}
                className={`${tallImage ? 'aspect-[3/2]' : 'aspect-video'} w-full object-cover`}
                width="1200"
                height={tallImage ? '800' : '675'}
                fetchPriority="high"
              />
            </figure>
            <div className="p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="font-display text-lg font-bold text-slate-900">
                  {data.panelHeading}
                </p>
                <p className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                  <StarIcon size={16} weight="fill" className="text-amber-500" aria-hidden="true" />
                  {data.rating}
                </p>
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-slate-900/10 pt-5">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <dd className="font-display text-2xl font-extrabold text-blue-700">
                      <CountUp value={stat.value} />
                    </dd>
                    <dt className="mt-0.5 text-xs font-medium text-slate-500">{stat.label}</dt>
                  </div>
                ))}
              </dl>
              <p className="mt-5 flex items-center gap-2.5 rounded-xl bg-emerald-600/10 px-4 py-3 text-sm font-medium text-emerald-800">
                <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </span>
                {data.badge}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
