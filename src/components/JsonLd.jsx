/**
 * Renders the structured-data blocks built by src/data/pageMeta.js.
 *
 * Server component on purpose: the JSON must be in the HTML that ships from the
 * server, not injected after hydration, or crawlers that do not execute JS see
 * nothing. `<` is escaped so a stray "</script>" inside any copy string cannot
 * close the tag early.
 */
export default function JsonLd({ blocks = [] }) {
  return blocks.map((block, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(block).replace(/</g, '\\u003c') }}
    />
  ))
}
