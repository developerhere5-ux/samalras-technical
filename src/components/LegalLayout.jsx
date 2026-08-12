import Breadcrumbs from './Breadcrumbs'

export default function LegalLayout({ title, updated, path, children }) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rule">
          <Breadcrumbs path={path} />
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-sm text-slate-500">Last updated: {updated}</p>
        </div>
        <div className="glass mt-8 space-y-6 rounded-2xl p-7 text-sm leading-relaxed text-slate-600 sm:p-10 sm:text-base [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-slate-900 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </section>
  )
}
