'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SparkleIcon, ArrowRightIcon, XIcon } from '@phosphor-icons/react/ssr'
import { PROMO } from '../data/site'

const STORAGE_KEY = 'promo-dismissed'

export default function PromoBanner() {
  // Starts visible so the prerendered markup and the first client render match;
  // a previous dismissal is applied after mount instead.
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') setDismissed(true)
  }, [])

  if (!PROMO.enabled || dismissed) return null

  const close = () => {
    setDismissed(true)
    sessionStorage.setItem(STORAGE_KEY, '1')
  }

  return (
    <div
      className="liquid-glass liquid-glass-sky mx-auto mt-2 flex max-w-6xl items-center gap-2 rounded-xl py-1.5 pr-1.5 pl-3 text-blue-950 sm:gap-3 sm:py-2 sm:pr-2 sm:pl-4"
      role="region"
      aria-label="Promotion"
    >
      <SparkleIcon size={15} weight="fill" aria-hidden="true" className="shrink-0 text-blue-700" />

      <span className="hidden shrink-0 rounded-full bg-blue-700 px-2 py-0.5 text-[10px] font-extrabold tracking-wide text-white uppercase sm:inline">
        {PROMO.badge}
      </span>

      {/* One string per breakpoint keeps the strip to a single line on phones. */}
      <p className="min-w-0 flex-1 truncate text-xs font-semibold sm:text-sm">
        <span className="sm:hidden">{PROMO.short}</span>
        <span className="hidden sm:inline">{PROMO.full}</span>
      </p>

      <Link
        href={PROMO.ctaHref}
        className="btn-press inline-flex shrink-0 items-center gap-1 rounded-full bg-linear-to-br from-blue-900 via-sky-500 to-sky-800 px-2.5 py-1 text-[11px] font-bold text-white shadow-md shadow-blue-700/25 transition hover:bg-blue-800 sm:px-3.5 sm:py-1.5 sm:text-xs"
      >
        {PROMO.ctaLabel}
        <ArrowRightIcon size={12} weight="bold" aria-hidden="true" />
      </Link>

      <button
        type="button"
        onClick={close}
        aria-label="Dismiss promotion"
        className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-blue-900/50 transition hover:bg-blue-900/10 hover:text-blue-900"
      >
        <XIcon size={13} weight="bold" aria-hidden="true" />
      </button>
    </div>
  )
}
