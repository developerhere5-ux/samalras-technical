'use client'

import { useState } from 'react'
import { PhoneCallIcon, WhatsappLogoIcon, ClockIcon, MapPinIcon, CircleNotchIcon } from '@phosphor-icons/react/ssr'
import { PHONE_LINK, PHONE_DISPLAY, WA_HREF, WEB3FORMS_ACCESS_KEY } from '../data/site'
import { SERVICES_LIST } from '../data/services'
import { readAttribution, attributionEmailFields, pushDataLayer } from '../lib/tracking'

const inputClass =
  'w-full rounded-xl border border-slate-900/15 bg-white/80 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700/20'

const DEFAULT_OPTIONS = SERVICES_LIST.map((s) => s.card.title)

export default function ContactForm({
  heading = 'Request a quick quote',
  intro = 'Tell us what you need and we reply within minutes with a fixed price and the earliest available slot.',
  messageLabel = 'What do you need help with?',
  messagePlaceholder = 'e.g. 2-bedroom apartment in JVC, painting the living room and fitting SPC flooring in the bedrooms',
  serviceOptions = DEFAULT_OPTIONS,
}) {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const set = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
    if (errors[field]) setErrors({ ...errors, [field]: undefined })
  }

  const submit = async (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name'
    if (!form.phone.trim()) next.phone = 'Enter your phone number'
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setStatus('sending')
    /* Campaign data captured on the visitor's first page view and held in
       sessionStorage by the bootstrap in src/lib/tracking.js, so a lead is
       attributable even when the visitor landed on an ad, browsed three
       service pages and only then filled this in. Relabelled for the email
       because the recipient is the business owner, not an analyst. */
    const attribution = readAttribution()
    const service = form.service || 'Not specified'
    const pagePath = typeof window === 'undefined' ? '' : window.location.pathname

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New quote request from ${form.name.trim()}`,
          from_name: 'Sama Alras website',
          name: form.name.trim(),
          phone: form.phone.trim(),
          service,
          message: form.message.trim() || 'No extra details provided.',
          'Submitted from page': pagePath,
          ...attributionEmailFields(attribution),
        }),
      })
      const data = await res.json()
      const ok = res.ok && data.success !== false
      setStatus(ok ? 'success' : 'error')

      /* Success branch only. Firing this on submit — which is what a GTM form
         trigger would do — would count every failed send and every validation
         bounce as a conversion and quietly inflate the Google Ads numbers the
         bidding runs on. */
      if (ok) {
        pushDataLayer({
          event: 'generate_lead',
          form_name: 'quote_request',
          cta_placement: 'contact',
          service_selected: service,
          page_path: pagePath,
          attribution,
        })
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="mobile-center relative pb-20 sm:pb-24" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="liquid-glass liquid-glass-sky overflow-hidden rounded-3xl">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-slate-900/10 p-8 sm:p-10 lg:border-r lg:border-b-0">
              <div className="rule">
                <h2 id="contact-heading" className="font-display text-2xl font-extrabold tracking-tight text-slate-900">
                  {heading}
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600 sm:text-base">
                  {intro}
                </p>
              </div>

              <ul className="mt-8 space-y-4 text-sm text-slate-700">
                <li className="flex items-center justify-center gap-3 sm:justify-start">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-700/10 text-blue-700">
                    <PhoneCallIcon size={19} weight="duotone" aria-hidden="true" />
                  </span>
                  <a href={PHONE_LINK} className="font-semibold text-slate-900 hover:text-blue-700">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-center justify-center gap-3 sm:justify-start">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-700/10 text-emerald-700">
                    <WhatsappLogoIcon size={19} weight="duotone" aria-hidden="true" />
                  </span>
                  <a
                    href={WA_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-900 hover:text-emerald-700"
                  >
                    WhatsApp us directly
                  </a>
                </li>
                <li className="flex items-center justify-center gap-3 sm:justify-start">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-700/10 text-blue-700">
                    <ClockIcon size={19} weight="duotone" aria-hidden="true" />
                  </span>
                  Open 7 days a week, 8am-10pm
                </li>
                <li className="flex items-center justify-center gap-3 sm:justify-start">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-700/10 text-blue-700">
                    <MapPinIcon size={19} weight="duotone" aria-hidden="true" />
                  </span>
                  Serving every community in Dubai
                </li>
              </ul>
            </div>

            {status === 'success' ? (
              <div className="flex flex-col items-start justify-center p-8 sm:p-10">
                <h3 className="font-display text-xl font-extrabold text-slate-900">Request received</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">
                  Thanks, {form.name.trim()}. We will call or WhatsApp you at{' '}
                  <span className="font-semibold text-slate-900">{form.phone.trim()}</span> shortly
                  with your fixed quote. Need us sooner? Call {PHONE_DISPLAY}.
                </p>
              </div>
            ) : (
              <form className="p-8 text-left sm:p-10" onSubmit={submit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cf-name" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Name
                    </label>
                    <input
                      id="cf-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      className={inputClass}
                      value={form.name}
                      onChange={set('name')}
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-semibold text-slate-800">
                      Phone
                    </label>
                    <input
                      id="cf-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+971 5x xxx xxxx"
                      className={inputClass}
                      value={form.phone}
                      onChange={set('phone')}
                      aria-invalid={Boolean(errors.phone)}
                    />
                    {errors.phone && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="cf-service" className="mb-1.5 block text-sm font-semibold text-slate-800">
                    Service
                  </label>
                  <select id="cf-service" className={inputClass} value={form.service} onChange={set('service')}>
                    <option value="">Choose a service (optional)</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label htmlFor="cf-message" className="mb-1.5 block text-sm font-semibold text-slate-800">
                    {messageLabel}
                  </label>
                  <textarea
                    id="cf-message"
                    rows={4}
                    placeholder={messagePlaceholder}
                    className={inputClass}
                    value={form.message}
                    onChange={set('message')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-press mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-700/25 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  {status === 'sending' && (
                    <CircleNotchIcon size={18} weight="bold" className="animate-spin" aria-hidden="true" />
                  )}
                  {status === 'sending' ? 'Sending...' : 'Send quote request'}
                </button>
                <p className="mt-3 text-xs text-slate-500" role="status">
                  {status === 'error'
                    ? 'Something went wrong sending your request. Please call us or use the WhatsApp link instead.'
                    : 'We only use your details to reply to this request. No spam, ever.'}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
