import { PhoneCallIcon, WhatsappLogoIcon } from '@phosphor-icons/react/ssr'
import { WA_HREF } from '../data/site'

/* Deliberately still Server Components with no onClick. Conversion tracking for
   every tel:/WhatsApp link on the site is handled by one delegated listener
   installed in raw markup by src/lib/tracking.js — which fires before
   hydration, whereas an onClick here could not. Adding one would both convert
   these to Client Components for nothing and double-count every tap. Placement
   is derived from the enclosing section, so Hero, Services and FinalCta each
   report themselves without any prop being threaded through. */

export function CallButton({ label = 'Call Now', className = '', showNumber = false, iconOnly = false }) {
  const accessibleLabel = showNumber ? 'Call +971523606843' : label
  return (
    <a
      href="tel:+971523606843"
      aria-label={iconOnly ? accessibleLabel : undefined}
      title={iconOnly ? accessibleLabel : undefined}
      className={`btn-press inline-flex items-center justify-center  gap-2 rounded-full bg-linear-to-br from-blue-900 via-sky-500 to-sky-800 font-semibold text-white shadow-lg shadow-blue-700/25 transition hover:bg-blue-800 ${iconOnly ? 'p-4' : 'px-5 py-3 text-sm'} ${className}`}
    >
      <PhoneCallIcon size={iconOnly ? 22 : 20} weight="bold" aria-hidden="true" />
      {!iconOnly && (showNumber ? '+97152360 6843' : label)}
    </a>
  )
}

export function WhatsAppButton({ href = WA_HREF, label = 'WhatsApp', className = '', iconOnly = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={iconOnly ? label : undefined}
      title={iconOnly ? label : undefined}
      className={`btn-press inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-br from-green-900 via-green-500 to-green-800 font-semibold text-white shadow-lg shadow-emerald-700/25 transition hover:bg-emerald-800 ${iconOnly ? 'p-4' : 'px-5 py-3 text-sm'} ${className}`}
    >
      <WhatsappLogoIcon size={iconOnly ? 22 : 17} weight="bold" aria-hidden="true" />
      {!iconOnly && label}
    </a>
  )
}
