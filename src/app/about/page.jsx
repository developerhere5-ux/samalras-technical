import Link from 'next/link'
import { UsersThreeIcon, CertificateIcon, HandshakeIcon, MapPinIcon, NavigationArrowIcon, ArrowRightIcon } from '@phosphor-icons/react/ssr'
import { buildMetadata, getPageMeta } from '../../data/pageMeta'
import { SERVICES_LIST } from '../../data/services'
import { STATS, BUSINESS_ADDRESS, BUSINESS_NAME } from '../../data/site'
import JsonLd from '../../components/JsonLd'
import Breadcrumbs from '../../components/Breadcrumbs'
import RelatedServices from '../../components/RelatedServices'
import { CallButton, WhatsAppButton } from '../../components/CtaButtons'

const PATH = '/about'

const MAP_QUERY = 'The Exchange Tower, Business Bay, Dubai'
const MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=15&output=embed`
const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_QUERY)}`

const VALUES = [
  {
    Icon: UsersThreeIcon,
    title: 'People first',
    text: 'Our tradesmen are employed, trained and insured by us, never day-hired from outside. That is how quality stays consistent from one project to the next.',
  },
  {
    Icon: CertificateIcon,
    title: 'Do it properly',
    text: 'Preparation is where a job is won or lost, whether it is a wall, a subfloor or a circuit. We never skip the groundwork, even when nobody would notice for the first six months.',
  },
  {
    Icon: HandshakeIcon,
    title: 'Keep our word',
    text: 'Fixed quotes, honest timelines and a written warranty. If something is not right, we come back and fix it. That promise is in every contract we sign.',
  },
]

export const metadata = buildMetadata(PATH)

export default function AboutPage() {
  return (
    <>
      <JsonLd blocks={getPageMeta(PATH).jsonLd} />

      {/* This section has no id or aria-labelledby for the tracking script to
          derive a placement from, so it names itself — otherwise its CTAs report
          the generic 'inline' and the marketing team cannot tell them apart. */}
      <section
        data-cta-placement="about"
        className="mobile-center relative pt-32 pb-16 sm:pt-40 sm:pb-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rule max-w-2xl">
            <Breadcrumbs path={PATH} />
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              The technical services team Dubai recommends
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Sama Alras Technical Services started in 2013 with one van, a handful of tradesmen
              and a simple rule: leave every home better than the customer imagined. Thirteen
              years on, our crews handle painting, SPC flooring, electrical work and AC duct
              cleaning across every community in Dubai, from Dubai Marina and Business Bay to
              Arabian Ranches and Dubai Hills Estate, and that rule has not changed.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass rounded-2xl p-8 sm:p-10">
              <h2 className="font-display text-xl font-extrabold text-slate-900 sm:text-2xl">Our story</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                <p>
                  Most home-service problems in Dubai are not caused by bad materials. They are
                  caused by rushed preparation, the wrong products for the climate, and crews
                  paid to finish fast rather than finish well. We built this company to be
                  the opposite of that.
                </p>
                <p>
                  Every project, from a studio repaint in JVC to SPC flooring in Emirates Hills
                  or rewiring an older villa, follows the same four-step system: a measured site
                  visit and fixed quote, a consultation on materials and finishes, meticulous
                  preparation and workmanship, then a walkthrough inspection before handover.
                </p>
                <p>
                  We are licensed in Dubai, fully insured, and our workmanship warranty is
                  written into every quotation. Electrical work is carried out to DEWA and UAE
                  safety standards. When we say something will last, we put it on paper.
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 sm:p-10">
              <h2 className="font-display text-xl font-extrabold text-slate-900 sm:text-2xl">By the numbers</h2>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <dd className="font-display text-3xl font-extrabold text-blue-700">{stat.value}</dd>
                    <dt className="mt-1 text-sm font-medium text-slate-500">{stat.label}</dt>
                  </div>
                ))}
              </dl>
              <p className="mt-6 border-t border-slate-900/10 pt-5 text-sm leading-relaxed text-slate-600">
                Figures taken from our own completed job records, 2013 to today.
              </p>

              <div className="mt-6 border-t border-slate-900/10 pt-6">
                <h3 className="font-display flex items-center justify-center gap-2 text-base font-bold text-slate-900 sm:justify-start">
                  <MapPinIcon size={18} weight="duotone" className="text-blue-700" aria-hidden="true" />
                  Where to find us
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{BUSINESS_ADDRESS}</p>
                <div className="mt-4 overflow-hidden rounded-xl border border-slate-900/10">
                  <iframe
                    src={MAP_EMBED}
                    title={`Map showing ${BUSINESS_NAME} location in Business Bay, Dubai`}
                    className="aspect-video w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href={MAP_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
                >
                  <NavigationArrowIcon size={15} weight="bold" aria-hidden="true" />
                  Get directions
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-xl font-extrabold text-slate-900 sm:text-2xl">What we stand for</h2>
            <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-3">
              {VALUES.map(({ Icon, title, text }) => (
                <div key={title} className="border-t border-slate-900/10 pt-6">
                  <Icon size={28} weight="duotone" className="text-blue-700" aria-hidden="true" />
                  <h3 className="font-display mt-3 text-base font-bold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Driven by SERVICES_LIST so a new service brings its own team block
              and deep link with no edit here. Deliberately no team photos — the
              copy describes how each crew actually works instead. */}
          <div className="mt-14">
            <h2 className="font-display text-xl font-extrabold text-slate-900 sm:text-2xl">
              Meet the teams behind the work
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Five specialist crews, all employed, trained and insured by us rather than day-hired
              per job. That is the whole reason one company can cover painting, plumbing, flooring,
              electrical work and AC duct cleaning without the quality changing between trades.
            </p>

            <div className="mt-8 space-y-5">
              {SERVICES_LIST.map((service) => (
                <article key={service.path} className="glass rounded-2xl p-7 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-base font-bold text-slate-900 sm:text-lg">
                      {service.team.heading}
                    </h3>
                    <span className="text-xs font-semibold tracking-wide text-blue-700 uppercase">
                      {service.card.title}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-slate-500">{service.team.lead}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {service.team.text}
                  </p>
                  <Link
                    href={service.path}
                    aria-label={`View details for ${service.serviceName}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
                  >
                    View details
                    <ArrowRightIcon size={15} weight="bold" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="glass-strong mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl p-8 sm:items-start sm:p-10 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-display text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                See the difference yourself
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                Book a free site visit and get a fixed quote the same day.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <CallButton showNumber />
              <WhatsAppButton label="WhatsApp Us" />
            </div>
          </div>
        </div>
      </section>

      <RelatedServices currentPath={PATH} />
    </>
  )
}
