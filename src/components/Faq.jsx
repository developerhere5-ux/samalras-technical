import { PlusIcon } from '@phosphor-icons/react/ssr'
import { PAINTING } from '../data/services'

export default function Faq({ heading = PAINTING.faq.heading, intro = PAINTING.faq.intro, items = PAINTING.faq.items }) {
  return (
    <section id="faq" className="mobile-center relative py-20 sm:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rule">
            <h2 id="faq-heading" className="font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {heading}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">{intro}</p>
          </div>

          <div className="space-y-3">
            {items.map((faq) => (
              <details key={faq.q} className="glass-strong group rounded-2xl px-6 py-5 ">
                <summary className=" flex cursor-pointer list-none items-center justify-between gap-4 font-display text-sm font-bold text-slate-900 sm:text-base [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-700/10 text-blue-700 transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
                    <PlusIcon size={16} weight="bold" />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
