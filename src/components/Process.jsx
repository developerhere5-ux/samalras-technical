import { PAINTING } from '../data/services'

export default function Process({ heading = PAINTING.process.heading, steps = PAINTING.process.steps }) {
  return (
    <section id="process" className="mobile-center relative py-20 sm:py-24" aria-labelledby="process-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rule max-w-2xl">
          <h2 id="process-heading" className="font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {heading}
          </h2>
        </div>

        <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <li key={item.step} className="relative">
              <span className="font-display mx-auto grid h-11 w-11 place-items-center rounded-full bg-blue-700 text-base font-bold text-white sm:mx-0">
                {item.step}
              </span>
              <h3 className="font-display mt-4 text-base font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
