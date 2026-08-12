import { StarIcon } from '@phosphor-icons/react/ssr'
import { PAINTING } from '../data/services'

function ReviewCard({ review }) {
  return (
    <figure className="liquid-glass liquid-glass-clear mx-3 flex w-[19rem] shrink-0 flex-col rounded-2xl p-6 sm:w-[22rem] sm:p-7">
      <div className="flex justify-center gap-0.5 text-amber-500 sm:justify-start" role="img" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} size={16} weight="fill" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
        "{review.text}"
      </blockquote>
      <figcaption className="mt-5 flex items-center justify-center gap-3 border-t border-slate-900/10 pt-4 sm:justify-start">
        <span className="font-display grid h-10 w-10 place-items-center rounded-full bg-blue-700/10 text-sm font-bold text-blue-700">
          {review.name.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-semibold text-slate-900">{review.name}</p>
          <p className="text-xs text-slate-500">{review.service} · {review.area}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export default function Testimonials({ heading = PAINTING.testimonials.heading, reviews = PAINTING.testimonials.reviews }) {
  const loop = [...reviews, ...reviews]
  return (
    <section id="reviews" className="mobile-center relative overflow-hidden py-20 sm:py-24" aria-labelledby="reviews-heading">
      <div className="mx-auto mb-12 max-w-6xl px-4 sm:px-6">
        <div className="rule max-w-2xl">
          <h2 id="reviews-heading" className="font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {heading}
          </h2>
        </div>
      </div>

      <div className="marquee-viewport">
        <div className="marquee-track py-2">
          {loop.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
