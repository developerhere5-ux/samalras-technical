import { notFound } from 'next/navigation'
import { buildMetadata, getPageMeta } from '../../../data/pageMeta'
import { SERVICES_LIST, SERVICES_BY_PATH } from '../../../data/services'
import JsonLd from '../../../components/JsonLd'
import Hero from '../../../components/Hero'
import Overview from '../../../components/Overview'
import Services from '../../../components/Services'
import WhyUs from '../../../components/WhyUs'
import Process from '../../../components/Process'
import Testimonials from '../../../components/Testimonials'
import Areas from '../../../components/Areas'
import Faq from '../../../components/Faq'
import RelatedServices from '../../../components/RelatedServices'
import FinalCta from '../../../components/FinalCta'
import MapSection from '../../../components/MapSection'
import ContactForm from '../../../components/ContactForm'

/**
 * One dynamic segment covers all four service pages so that adding an object to
 * SERVICES_LIST still creates its route, its metadata and its sitemap entry with
 * no other edits — the property the Vite version had via ALL_PATHS.
 *
 * Static segments (/about, /contact, …) win over this one in Next's matcher, so
 * they are unaffected. `dynamicParams = false` means any slug not returned by
 * generateStaticParams 404s instead of rendering a fallback page.
 */
export function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({ service: service.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }) {
  const { service } = await params
  return buildMetadata(`/services/${service}`)
}

export default async function ServicePage({ params }) {
  const { service: slug } = await params
  const path = `/services/${slug}`
  const service = SERVICES_BY_PATH[path]
  if (!service) notFound()

  const tallImages = service.slug === 'ac-duct-cleaning-services'

  return (
    <>
      <JsonLd blocks={getPageMeta(path).jsonLd} />
      <Hero data={service.hero} tallImage={tallImages} path={path} />
      <Overview {...service.overview} />
      <Services {...service.services} tallImages={tallImages} />
      <WhyUs {...service.whyUs} />
      <Process {...service.process} />
      <Testimonials {...service.testimonials} />
      <Areas {...service.areas} />
      <Faq {...service.faq} />
      <RelatedServices currentPath={path} />
      <FinalCta {...service.finalCta} />
      <MapSection />
      <ContactForm {...service.contact} serviceOptions={service.services.items.map((i) => i.title)} />
    </>
  )
}
