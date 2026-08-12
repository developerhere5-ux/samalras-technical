'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRightIcon, CaretDownIcon } from '@phosphor-icons/react/ssr'

/**
 * The "about us" block that runs on the homepage and every service page.
 *
 * Collapsed by default to cut the scroll, but the truncation is done purely in
 * CSS (`line-clamp`) — the paragraphs are ALWAYS fully present in the HTML.
 * This is deliberate: each of these blocks is ~200 words of the most
 * keyword-dense copy on the page, so conditionally rendering it would hide it
 * from crawlers and throw away the ranking value of every service page.
 *
 * 4 lines on mobile, 5 from `sm` up.
 */
export default function Overview({ heading, paragraphs = [], links = [] }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="mobile-center relative py-14 sm:py-16" aria-labelledby="overview-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rule">
          <h2 id="overview-heading" className="font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {heading}
          </h2>
        </div>

        <div
          id="overview-content"
          className={`mt-6 space-y-4 text-base leading-relaxed text-slate-600 ${
            expanded ? '' : 'line-clamp-4 sm:line-clamp-5'
          }`}
        >
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>

        {paragraphs.length > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls="overview-content"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
          >
            {expanded ? 'Read less' : 'Read more'}
            <CaretDownIcon
              size={14}
              weight="bold"
              aria-hidden="true"
              className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        )}

        {links.length > 0 && (
          <div className="mt-7 flex flex-wrap justify-center gap-3 sm:justify-start">
            {links.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className="glass-chip inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
              >
                {link.label}
                <ArrowRightIcon size={15} weight="bold" aria-hidden="true" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
