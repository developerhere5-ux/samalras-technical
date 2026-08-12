import { MapPinIcon, NavigationArrowIcon } from '@phosphor-icons/react/ssr'
import { BUSINESS_ADDRESS, BUSINESS_NAME, GBP_URL, GEO } from '../data/site'

/* Pinned by coordinate rather than by address string. The previous
   "The Exchange Tower, Business Bay, Dubai" query relied on Google resolving
   the tower by name, which drops the pin wherever the search lands. These are
   the GBP pin coordinates, so the embed and the schema agree exactly. */
const EMBED_SRC = `https://maps.google.com/maps?q=${GEO.latitude},${GEO.longitude}&z=16&output=embed`

export default function MapSection() {
  return (
    <section id="location" className="mobile-center relative py-16 sm:py-20" aria-labelledby="location-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rule max-w-2xl">
          <h2 id="location-heading" className="font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Find Us in Dubai
          </h2>
          <p className="mt-4 flex items-start justify-center gap-2.5 text-base leading-relaxed text-slate-600 sm:justify-start">
            <MapPinIcon size={20} weight="duotone" className="mt-0.5 shrink-0 text-blue-700" aria-hidden="true" />
            {BUSINESS_ADDRESS}
          </p>
        </div>

        <div className="glass mt-8 overflow-hidden rounded-2xl">
          <iframe
            src={EMBED_SRC}
            title={`Map showing ${BUSINESS_NAME} location in Business Bay, Dubai`}
            className="aspect-[16/9] w-full sm:aspect-[21/9]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Points at the Google Business Profile rather than a raw maps query, so
            the click lands on the verified listing (directions, hours, reviews)
            and reinforces the site ↔ GBP entity link. */}
        <a
          href={GBP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-chip mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
        >
          <NavigationArrowIcon size={16} weight="bold" aria-hidden="true" />
          Get directions
        </a>
      </div>
    </section>
  )
}
