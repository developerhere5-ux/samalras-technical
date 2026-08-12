import { buildMetadata, getPageMeta } from '../../data/pageMeta'
import JsonLd from '../../components/JsonLd'
import Breadcrumbs from '../../components/Breadcrumbs'
import ContactForm from '../../components/ContactForm'
import MapSection from '../../components/MapSection'
import Areas from '../../components/Areas'
import RelatedServices from '../../components/RelatedServices'

const PATH = '/contact'

export const metadata = buildMetadata(PATH)

export default function ContactPage() {
  return (
    <>
      <JsonLd blocks={getPageMeta(PATH).jsonLd} />

      <section className="relative pt-32 pb-4 sm:pt-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rule max-w-2xl pb-10">
            <Breadcrumbs path={PATH} />
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Contact us
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Call, WhatsApp or send the form. A real person replies within minutes,
              7 days a week, 8am-10pm.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
      <MapSection />
      <Areas />
      <RelatedServices currentPath={PATH} />
    </>
  )
}
