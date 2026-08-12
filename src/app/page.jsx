import { buildMetadata, getPageMeta } from '../data/pageMeta'
import { HOME } from '../data/home'
import JsonLd from '../components/JsonLd'
import Hero from '../components/Hero'
import ServiceHub from '../components/ServiceHub'
import Overview from '../components/Overview'
import WhyUs from '../components/WhyUs'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'
import Areas from '../components/Areas'
import Faq from '../components/Faq'
import FinalCta from '../components/FinalCta'
import MapSection from '../components/MapSection'
import ContactForm from '../components/ContactForm'

const PATH = '/'

export const metadata = buildMetadata(PATH)

export default function HomePage() {
  return (
    <>
      <JsonLd blocks={getPageMeta(PATH).jsonLd} />
      <Hero data={HOME.hero} path={PATH} serviceLinks />
      <ServiceHub {...HOME.hub} />
      <Overview {...HOME.overview} />
      <WhyUs {...HOME.whyUs} />
      <Process {...HOME.process} />
      <Testimonials {...HOME.testimonials} />
      <Areas {...HOME.areas} />
      <Faq {...HOME.faq} />
      <FinalCta {...HOME.finalCta} />
      <MapSection />
      <ContactForm {...HOME.contact} />
    </>
  )
}
