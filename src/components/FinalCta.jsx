import { wa } from '../data/site'
import { PAINTING } from '../data/services'
import { CallButton, WhatsAppButton } from './CtaButtons'

export default function FinalCta({
  heading = PAINTING.finalCta.heading,
  text = PAINTING.finalCta.text,
  whatsappLabel = PAINTING.finalCta.whatsappLabel,
  whatsappText = PAINTING.finalCta.whatsappText,
}) {
  return (
    <section className="relative py-16 sm:py-20" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="liquid-glass liquid-glass-sky flex flex-col items-center gap-7 rounded-3xl p-8 text-center sm:p-10">
          <div className="max-w-xl">
            <h2 id="final-cta-heading" className="font-display text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              {heading}
            </h2>
            <p className="mt-2 text-base leading-relaxed text-slate-600">{text}</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <CallButton showNumber iconOnly />
            <WhatsAppButton href={wa(whatsappText)} label={whatsappLabel} iconOnly />
          </div>
        </div>
      </div>
    </section>
  )
}
