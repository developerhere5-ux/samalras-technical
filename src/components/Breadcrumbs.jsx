import Link from 'next/link'
import { Fragment } from 'react'
import { CaretRightIcon } from '@phosphor-icons/react/ssr'
import { getTrail } from '../data/pageMeta'

/**
 * Visible breadcrumb trail. The labels come from the same getTrail() helper that
 * builds the BreadcrumbList JSON-LD in pageMeta.js, so the rendered trail and
 * the structured data always match — Google drops breadcrumb rich results when
 * they disagree.
 *
 * getTrail only yields a node for a parent segment that is a real page, so
 * /services/painting-services reads Home > Services > Painting while a service
 * nested under a segment with no page of its own quietly skips that level rather
 * than linking somewhere that 404s.
 *
 * Rendered above the <h1> on every page except the homepage, which is the root
 * of the trail and has nothing to link back to.
 */
export default function Breadcrumbs({ path }) {
  if (path === '/') return null

  const trail = getTrail(path)

  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-medium text-slate-500 sm:justify-start sm:text-sm">
        <li>
          <Link href="/" className="transition hover:text-blue-700">
            Home
          </Link>
        </li>
        {trail.map((entry, index) => (
          <Fragment key={entry.path}>
            <li aria-hidden="true" className="grid place-items-center text-slate-400">
              <CaretRightIcon size={12} weight="bold" />
            </li>
            <li>
              {index === trail.length - 1 ? (
                <span aria-current="page" className="text-slate-700">
                  {entry.name}
                </span>
              ) : (
                <Link href={entry.path} className="transition hover:text-blue-700">
                  {entry.name}
                </Link>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  )
}
