import { WhatsappLogoIcon, PhoneCallIcon } from '@phosphor-icons/react/ssr'

export default function FloatingWhatsApp() {
  return (
    /* data-cta-placement is read by the delegated click listener in
       src/lib/tracking.js. These buttons sit outside header/footer/section, so
       without it both would report the generic "inline" placement and the
       marketing team could not separate the floating dock — consistently the
       highest-intent tap on mobile — from a CTA in the page body. */
    <div
      data-cta-placement="floating"
      className="fixed right-5 bottom-5 z-50 flex flex-col gap-4"
    >
      <a
        href="tel:+971582731458"
        className="bg-linear-to-br from-blue-900 via-sky-500 to-blue-800  btn-press grid h-14 w-14 place-items-center rounded-full text-white transition sm:h-16 sm:w-16"
        aria-label="Call us for a free quote or booking"
      >
        <PhoneCallIcon size={24} weight="fill" aria-hidden="true" className="animate-icon-bounce sm:h-7 sm:w-7" />
      </a>
      <a
        href="https://wa.me/971582731458"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-linear-to-br from-green-900 via-green-500 to-green-800 btn-press grid h-14 w-14 place-items-center rounded-full text-white transition sm:h-14 sm:w-14"
        aria-label="Chat with us on WhatsApp for a free quote or booking or any query"
      >
        <WhatsappLogoIcon size={26} weight="fill" aria-hidden="true" className="animate-icon-bounce sm:h-8 sm:w-8" style={{ animationDelay: '0.75s' }} />
      </a>
    </div>
  )
}
