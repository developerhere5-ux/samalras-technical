'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ListIcon, XIcon, PhoneCallIcon, WhatsappLogoIcon, CaretDownIcon } from '@phosphor-icons/react/ssr'
import { WA_HREF } from '../data/site'
import { SERVICES_LIST } from '../data/services'
import PromoBanner from './PromoBanner'

/* Services live in a dropdown rather than inline: five of them side by side no
   longer fit the bar, and grouping them keeps every service one hover away
   instead of pushing About/Contact off the end. */
const PRIMARY_LINKS = [{ href: '/', label: 'Home' }]
const SECONDARY_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const SERVICE_PATHS = new Set(SERVICES_LIST.map((s) => s.path))

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()
  const servicesRef = useRef(null)

  const onServicePage = SERVICE_PATHS.has(pathname)
  const isActive = (href) => pathname === href

  // Close both menus whenever the route changes, so a tap in the dropdown does
  // not leave it hanging open over the new page.
  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  // Dismiss the desktop dropdown on outside click or Escape.
  useEffect(() => {
    if (!servicesOpen) return
    const onPointerDown = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false)
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setServicesOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [servicesOpen])

  const linkClass = (href) =>
    `text-sm font-medium transition hover:text-blue-700 ${isActive(href) ? 'text-blue-700' : 'text-slate-600'}`

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      {/* z-50 so the Services dropdown paints above the PromoBanner, which is a
          later sibling and would otherwise win on DOM order alone. */}
      <nav
        className="glass-strong z-50 mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl px-4 sm:px-5"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center lg:flex-1" aria-label="Home">
          <img
            src="/images/logo-nav.webp"
            alt="Sama Alras Technical Services"
            className="h-10 w-auto"
            width="360"
            height="130"
          />
        </Link>

        {/* Items stretch to the full 4rem bar height so the dropdown's `top-full`
            resolves to the bottom edge of the navbar rather than the bottom of a
            ~20px line of text floating in the middle of it. */}
        <ul className="hidden items-stretch justify-center gap-6 self-stretch lg:flex">
          {PRIMARY_LINKS.map((link) => (
            <li key={link.href} className="flex items-center">
              <Link href={link.href} className={linkClass(link.href)} aria-current={isActive(link.href) ? 'page' : undefined}>
                {link.label}
              </Link>
            </li>
          ))}

          <li className="relative flex items-center" ref={servicesRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              className={`flex items-center gap-1.5 text-sm font-medium transition hover:text-blue-700 ${onServicePage || servicesOpen ? 'text-blue-700' : 'text-slate-600'
                }`}
            >
              Services
              <CaretDownIcon
                size={13}
                weight="bold"
                aria-hidden="true"
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* The positioning lives on this wrapper, NOT on the glass panel.
                `.glass-strong` in src/index.css declares `position: relative`, and
                because it is unlayered CSS it overrides Tailwind's `absolute`
                utility (v4 puts utilities in @layer utilities, which loses to
                unlayered rules). Putting `absolute` on the same element as
                `glass-strong` silently does nothing. */}
            {servicesOpen && (
              <div className="absolute top-full left-1/2 z-50 mt-3 w-72 -translate-x-1/2">
                <ul id="services-menu" className="glass-menu rounded-2xl p-2">
                  {SERVICES_LIST.map((service) => (
                    <li key={service.path}>
                      <Link
                        href={service.path}
                        aria-current={isActive(service.path) ? 'page' : undefined}
                        className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition hover:bg-slate-900/5 hover:text-blue-700 ${isActive(service.path) ? 'text-blue-700' : 'text-slate-700'
                          }`}
                      >
                        {service.card.title}
                        <span className="mt-0.5 block text-xs font-normal text-slate-500">{service.card.tagline}</span>
                      </Link>
                    </li>
                  ))}

                  {/* Reachability for humans, not for crawlers: this whole panel
                      is behind `servicesOpen`, so neither this link nor the five
                      above it exist in the exported HTML. The static internal
                      links to /services and the service pages are the ones in
                      Footer.jsx, which ship unconditionally on all 11 pages. */}
                  <li className="mt-1 border-t border-slate-900/10 pt-1">
                    <Link
                      href="/services"
                      aria-current={isActive('/services') ? 'page' : undefined}
                      className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:bg-slate-900/5 hover:text-blue-700 ${isActive('/services') ? 'text-blue-700' : 'text-slate-700'
                        }`}
                    >
                      View all services
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {SECONDARY_LINKS.map((link) => (
            <li key={link.href} className="flex items-center">
              <Link href={link.href} className={linkClass(link.href)} aria-current={isActive(link.href) ? 'page' : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-3 lg:flex-1">
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+971523606843"
              className="btn-press inline-flex items-center gap-2 rounded-full bg-linear-to-br from-blue-900 via-sky-500 to-sky-800 px-4 py-4 text-sm font-bold text-white shadow-lg shadow-blue-700/25 transition hover:bg-blue-800"
              aria-label="Call +97152360 6843"
            >
              <PhoneCallIcon size={18} weight="bold" aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="glass-chip grid h-10 w-10 place-items-center rounded-xl text-slate-900 lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <XIcon size={20} weight="bold" /> : <ListIcon size={20} weight="bold" />}
          </button>
        </div>
      </nav>

      <PromoBanner />

      {open && (
        <div className="glass-menu mx-auto mt-2 max-w-6xl rounded-2xl p-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {PRIMARY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-900/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-menu"
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-900/5"
              >
                Services
                <CaretDownIcon
                  size={13}
                  weight="bold"
                  aria-hidden="true"
                  className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {mobileServicesOpen && (
                <ul id="mobile-services-menu" className="mt-1 ml-3 space-y-0.5 border-l border-slate-900/10 pl-3">
                  {SERVICES_LIST.map((service) => (
                    <li key={service.path}>
                      <Link
                        href={service.path}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-900/5 hover:text-blue-700"
                      >
                        {service.card.title}
                      </Link>
                    </li>
                  ))}

                  <li>
                    <Link
                      href="/services"
                      className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-blue-700"
                    >
                      View all services
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {SECONDARY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-900/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex gap-3 border-t border-slate-900/10 pt-4">
            <a
              href="tel:+971523606843"
              className="btn-press flex flex-1 items-center justify-center gap-2 rounded-full bg-linear-to-br from-blue-900 via-sky-500 to-blue-800 px-4 py-3 text-sm font-bold text-white"
            >
              <PhoneCallIcon size={16} weight="bold" aria-hidden="true" /> Call Now
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press flex flex-1 items-center justify-center gap-2 rounded-full bg-linear-to-br from-green-900 via-green-500 to-green-800 px-4 py-3 text-sm font-bold text-white"
            >
              <WhatsappLogoIcon size={16} weight="bold" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
