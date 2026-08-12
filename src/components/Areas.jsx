import { MapPinIcon } from '@phosphor-icons/react/ssr'
import { AREAS } from '../data/site'

const DEFAULT_HEADING = 'Serving You Near You, All Dubai Areas Covered'
const DEFAULT_INTRO = 'Our teams are stationed across the city, so a professional is never more than 30 minutes away.'

export default function Areas({ heading = DEFAULT_HEADING, intro = DEFAULT_INTRO }) {
  return (
    <section id="areas" className="mobile-center relative py-16 sm:py-20" aria-labelledby="areas-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rule max-w-2xl">
          <h2 id="areas-heading" className="font-display text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
            {heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{intro}</p>
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-2.5 sm:justify-start">
          {AREAS.map((area) => (
            <li key={area} className="glass-chip flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-slate-700 sm:text-sm">
              <MapPinIcon size={13} weight="bold" className="text-blue-700" aria-hidden="true" />
              {area}
            </li>
          ))}
          <li className="flex items-center rounded-full bg-blue-700/10 px-4 py-2 text-xs font-semibold text-blue-800 sm:text-sm">
            + every Dubai community
          </li>
        </ul>
      </div>
    </section>
  )
}
