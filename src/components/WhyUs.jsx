import { PAINTING } from '../data/services'
import { getIcon } from './icons'

export default function WhyUs({ heading = PAINTING.whyUs.heading, intro = PAINTING.whyUs.intro, reasons = PAINTING.whyUs.reasons }) {
  return (
    <section id="why-us" className="mobile-center relative py-20 sm:py-24" aria-labelledby="why-us-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="glass rounded-2xl p-7 sm:p-10">
          <div className="rule max-w-2xl">
            <h2 id="why-us-heading" className="font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{intro}</p>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => {
              const Icon = getIcon(reason.icon)
              return (
                <div key={reason.title} className="border-t border-slate-900/10 pt-6">
                  <Icon size={28} weight="duotone" className="text-blue-700" aria-hidden="true" />
                  <h3 className="font-display mt-3 text-base font-bold text-slate-900">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{reason.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
