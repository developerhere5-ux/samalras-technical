import { WhatsappLogoIcon, PhoneCallIcon } from '@phosphor-icons/react/ssr'

/* Currently unmounted — FloatingWhatsApp is what the root layout renders. The
   placement marker is kept in sync anyway so swapping this back in does not
   silently drop the floating dock out of conversion reporting. */
export default function FloatingButtons() {
  return (
    <div
      data-cta-placement="floating"
      className="fixed right-5 bottom-5 z-50 flex flex-col gap-4"
    >
      <a
        href="tel:+971523606843"
        className="btn-press grid h-12 w-12 place-items-center rounded-full bg-blue-700 text-white shadow-xl shadow-blue-700/30 transition hover:bg-blue-800 sm:h-16 sm:w-16"
        aria-label="Call us for a free painting quote or booking"
      >
        <PhoneCallIcon size={20} weight="light" aria-hidden="true" className="sm:h-8 sm:w-8 shadow-2xl shadow-black animate-icon-bounce" />
      </a>
      <a
        href="https://wa.me/971523606843"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-press grid h-12 w-12 place-items-center rounded-full bg-green-600 text-white shadow-xl shadow-green-600/30 transition hover:bg-green-800 sm:h-14 sm:w-14"
        aria-label="Chat with us on WhatsApp for a free painting quote or booking or any query"
      >
        <WhatsappLogoIcon size={20} weight="fill" aria-hidden="true" className="sm:h-9 sm:w-9 animate-icon-bounce" style={{ animationDelay: '0.75s' }} />
      </a>
    </div>
  )
}
