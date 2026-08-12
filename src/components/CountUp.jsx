'use client'

import { useEffect, useRef, useState } from 'react'

function parseStat(display) {
  const match = String(display).match(/^([\d,]*\.?\d+)(.*)$/)
  if (!match) return null
  const raw = match[1]
  return {
    target: parseFloat(raw.replace(/,/g, '')),
    suffix: match[2] || '',
    hasComma: raw.includes(','),
    decimals: raw.includes('.') ? raw.split('.')[1].length : 0,
  }
}

function formatValue(value, decimals, hasComma) {
  const fixed = value.toFixed(decimals)
  if (!hasComma) return fixed
  const [intPart, decPart] = fixed.split('.')
  const grouped = Number(intPart).toLocaleString('en-US')
  return decPart ? `${grouped}.${decPart}` : grouped
}

export default function CountUp({ value, className }) {
  const [display, setDisplay] = useState(value)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const parsed = parseStat(value)
    if (!parsed) return
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value)
      return
    }

    const zero = formatValue(0, parsed.decimals, parsed.hasComma) + parsed.suffix
    setDisplay(zero)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return
          started.current = true
          observer.disconnect()

          const duration = 1500
          let startTime = null
          const step = (now) => {
            if (startTime === null) startTime = now
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(formatValue(parsed.target * eased, parsed.decimals, parsed.hasComma) + parsed.suffix)
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        })
      },
      { threshold: 0.35 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
