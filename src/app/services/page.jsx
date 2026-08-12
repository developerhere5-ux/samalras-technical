import { buildMetadata, getPageMeta } from '../../data/pageMeta'
import { SERVICES_HUB } from '../../data/home'
import JsonLd from '../../components/JsonLd'
import Breadcrumbs from '../../components/Breadcrumbs'
import ServiceHub from '../../components/ServiceHub'
import FinalCta from '../../components/FinalCta'
import ContactForm from '../../components/ContactForm'

/**
 * The hub for the five service pages. It is a static segment, so Next's matcher
 * prefers it over the sibling [service] dynamic segment and the service pages
 * are unaffected.
 *
 * Without this route the export produced an out/services/ directory and no
 * out/services.html, so Apache answered /services with a 403 under
 * `Options -Indexes` — on a URL the service pages themselves link up to.
 */
const PATH = '/services'

export const metadata = buildMetadata(PATH)

export default function ServicesPage() {
  return (
    <>
      <JsonLd blocks={getPageMeta(PATH).jsonLd} />

      <section className="mobile-center relative pt-32 sm:pt-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rule max-w-2xl">
            <Breadcrumbs path={PATH} />
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {SERVICES_HUB.h1}
            </h1>
            {SERVICES_HUB.lead.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <ServiceHub heading={SERVICES_HUB.heading} intro={SERVICES_HUB.intro} />
      <FinalCta {...SERVICES_HUB.finalCta} />
      <ContactForm {...SERVICES_HUB.contact} />
    </>
  )
}
