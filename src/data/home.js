export const HOME = {
  hero: {
    /* Single short H1 — no highlight line and no subtitle on the homepage. The
       service names sit directly under it as links instead (Hero's
       `serviceLinks` prop), so the H1 stays tight while every service is still
       one click and one crawl-hop from the top of the page. */
    h1Pre: 'Best Home Maintenance Services Provider In Dubai',
    h1Highlight: '',
    subtitle: '',
    intro:
      'Looking for the best home maintenance services provider near you in Dubai? Sama Alras Technical Services covers painting, plumbing, SPC flooring, licensed electrical work and AC duct cleaning with one trusted team. Our tradesmen are employed, trained and insured by us rather than day-hired, so the same standard of workmanship turns up on every job. You get a free site visit, a fixed written quote before anything starts, tidy work and a written warranty, in every community across Dubai, seven days a week with 24/7 emergency cover.',
    image: '/images/home-hero.webp',
    imageAlt: 'Sama Alras Technical Services team providing painting, plumbing, flooring, AC duct cleaning and electrical work in Dubai',
    panelHeading: 'Why Dubai chooses us',
    rating: '4.9/5 from 1,200+ reviews',
    badge: 'Teams available today for same-day site visits',
    whatsappText: 'Hi! I would like a free quote in Dubai.',
  },
  hub: {
    heading: 'Our Services in Dubai',
    intro:
      'Five specialist teams under one trusted name. Choose a service to see full details, or call us and we will point you to the right crew.',
  },
  overview: {
    heading: 'Your One-Stop Technical Services Company in Dubai',
    paragraphs: [
      'Sama Alras Technical Services is a licensed Dubai company that has looked after homes and businesses across the city since 2013. Instead of juggling separate contractors, you get five specialist teams under one roof: professional painting, licensed plumbing, SPC and other flooring, licensed electrical work, and AC duct cleaning.',
      'Our painting team delivers spotless interiors, durable exteriors and clean, on-time handovers. Our plumbers handle emergency leaks, blocked drains, kitchen sink problems, water heater repair and full bathroom installation, with 24/7 cover. Our flooring team supplies and fits waterproof SPC flooring along with vinyl, laminate, wooden, epoxy and carpet floors. Our licensed electricians handle wiring, lighting, DB boards, sockets, fans and 24/7 emergency call-outs. Our AC duct cleaning team clears and sanitises your air conditioning ducts, coils and vents for cleaner air and better cooling.',
      'Every job comes with a free site visit, fixed written pricing and a workmanship warranty, backed by insured, background-checked tradesmen. Looking for a technical services company near you? We serve every community in Dubai, including Dubai Marina, Downtown Dubai, Business Bay, Jumeirah, Palm Jumeirah, Arabian Ranches, Dubai Hills Estate, JVC, JLT, The Springs, Mirdif, Al Barsha, Motor City and Silicon Oasis. Whatever your property needs, one trusted call covers it, choose a service below to see full details.',
    ],
    links: [
      { label: 'Painting Services', to: '/services/painting-services' },
      { label: 'Plumbing Services', to: '/services/plumbing-services' },
      { label: 'SPC Flooring', to: '/services/spc-flooring-services' },
      { label: 'Electrician Services', to: '/services/electrician-services' },
      { label: 'AC Duct Cleaning', to: '/services/ac-duct-cleaning-services' },
    ],
  },
  whyUs: {
    heading: 'Why Dubai Trusts Sama Alras Technical Services',
    intro:
      'Whether you need a wall painted, a leak traced, a floor fitted, a duct cleaned or a fault fixed, you get the same standard: skilled, insured tradesmen, honest pricing and work that is done properly the first time.',
    reasons: [
      { icon: 'users', title: 'One team for every job', text: 'Painting, plumbing, flooring, AC duct cleaning and electrical work under one roof. One trusted contact for your whole home or office, not five different companies.' },
      { icon: 'shield-check', title: 'Licensed and insured', text: 'A licensed Dubai company with fully insured, background-checked tradesmen and a written workmanship warranty on every project.' },
      { icon: 'receipt', title: 'Fixed quotes, no surprises', text: 'Free site visits and clear written quotations. The price we agree is the price you pay, with no hidden extras.' },
      { icon: 'clock', title: 'On time, same-day visits', text: 'Punctual crews, realistic schedules and same-day site visits, with 24/7 cover for plumbing and electrical emergencies.' },
      { icon: 'medal', title: 'Experienced professionals', text: 'Skilled painters, plumbers, flooring fitters, duct cleaning technicians and electricians with years of hands-on experience in Dubai homes and businesses.' },
      { icon: 'broom', title: 'Clean, tidy handover', text: 'We protect your space, clear up after ourselves and hand over a job finished to a standard we are proud of.' },
    ],
  },
  process: {
    heading: 'How It Works, From Quote to Handover',
    steps: [
      { step: '1', title: 'Tell us what you need', text: 'Call or WhatsApp us with your painting, plumbing, flooring, AC duct cleaning or electrical job. We arrange a free site visit, often the same day.' },
      { step: '2', title: 'Get a fixed quote', text: 'We measure up, assess the work and send a clear written quote with fixed pricing and the earliest available slot.' },
      { step: '3', title: 'We do the work', text: 'The right specialist crew arrives on time, protects your space and completes the work safely and to a high standard.' },
      { step: '4', title: 'Inspect and hand over', text: 'We walk the finished job with you, sort any final touches, clean up and hand over with a written warranty.' },
    ],
  },
  testimonials: {
    heading: 'What Dubai Says About Us',
    reviews: [
      { name: 'Sarah M.', area: 'Arabian Ranches', service: 'Villa Painting', text: 'Repainted our entire villa inside and out in five days. The team protected everything, the finish is flawless and the price matched the quote exactly.' },
      { name: 'Ahmed K.', area: 'Dubai Marina', service: 'Emergency Plumber', text: 'Pipe burst under the kitchen at 1am. They answered instantly, talked me through the stopcock and had a plumber here in 40 minutes. Absolute lifesavers.' },
      { name: 'Omar A.', area: 'Dubai Hills Estate', service: 'SPC Flooring', text: 'Fitted SPC flooring through our whole villa in two days. It looks exactly like real oak and survived a kitchen flood without a mark.' },
      { name: 'Rashid M.', area: 'Mirdif', service: 'Emergency Electrician', text: 'Our power went out at 11pm and they had an electrician at our door within the hour. Found the fault, fixed it and the price was fair.' },
      { name: 'Priya R.', area: 'Business Bay', service: 'Office Painting', text: 'They painted our 4,000 sq ft office over a single weekend. We walked in Monday to perfect brand-matched walls and no smell. Zero downtime.' },
    ],
  },
  areas: {
    heading: 'Serving You Near You, All Dubai Areas Covered',
    intro: 'Our teams are stationed across the city, so a trusted painter, plumber, flooring fitter, duct cleaning technician or electrician is never far from you.',
  },
  faq: {
    heading: 'Sama Alras Technical Services, Answered',
    intro: 'Services, areas, coverage and warranties. If your question is not here, WhatsApp us and a real person replies within minutes.',
    items: [
      { q: 'What services does Sama Alras Technical Services offer in Dubai?', a: 'We offer five core services, each handled by its own specialist team. Painting covers villas, apartments, offices and building exteriors, plus move-in and move-out repaints and waterproofing with wall repair. Plumbing covers 24/7 emergency call-outs, leak detection and pipe repair, blocked drains and sewers, kitchen sink drain problems, water heater repair and installation, and bathroom and sanitary ware fitting. Flooring covers supply and installation of 100% waterproof SPC flooring along with vinyl and LVT, wooden and parquet, laminate, epoxy and carpet. Electrical covers wiring and rewiring, light and chandelier installation, DB board and fuse box repair, switches, sockets and power points, ceiling fans and 24/7 emergency fault finding. AC duct cleaning covers ducts, evaporator and condenser coils, vents, grilles, filters and drain trays, plus anti-bacterial sanitisation and commercial HVAC work. Every one of them includes a free site visit, a fixed written quote and a workmanship warranty.' },
      { q: 'Can one team handle painting, plumbing, flooring and electrical work together?', a: 'Yes, and it is usually cheaper and faster than hiring separately. Because all five trades are in-house, we sequence them in the correct order on a single schedule: plumbing and electrical first chasing, pipework and wiring, then painting, then flooring last so newly laid floors are not damaged by paint, water or cable work. Hiring separate contractors almost always means each blames the other for damage and you coordinate the timeline yourself. With one company there is a single point of contact, one written quote covering everything, one team accountable for the finished result and one warranty rather than four. This matters most on renovations, handovers and villa refurbishments where several trades overlap in the same rooms within a tight window, and especially in bathrooms and kitchens where plumbing, tiling, electrics and paint all meet.' },
      { q: 'Which areas of Dubai do you cover?', a: 'We serve every community in Dubai. That includes Dubai Marina, Downtown Dubai, Business Bay, Jumeirah, Palm Jumeirah, Arabian Ranches, Dubai Hills Estate, JVC, JLT, The Springs, Mirdif, Al Barsha, Motor City, Damac Hills, Deira, Bur Dubai, International City, Silicon Oasis, Town Square and Emirates Hills. Our crews are stationed across the city rather than run from a single depot, which is how we keep same-day site visits realistic instead of promising them and arriving the following week. There is no minimum job size or travel surcharge for any Dubai community. If you are unsure whether we reach your building or compound, send the location on WhatsApp and we will confirm immediately along with the earliest available slot.' },
      { q: 'Are you licensed and insured?', a: 'Yes. Sama Alras Technical Services is a licensed Dubai company holding trade licence 923026, and every tradesman on our team is background-checked, uniformed and covered by full liability insurance, so you are protected if anything is damaged while we work. Electrical work is carried out to DEWA and UAE safety standards without exception, and plumbing work to UAE plumbing and building standards with every water connection pressure-tested before sign-off, including on small jobs where shortcuts are most tempting and most dangerous. Every project carries a written workmanship warranty printed on the quotation rather than promised verbally, running up to five years on exterior painting and waterproofing. We are happy to provide the licence number and insurance details before you book, and we would encourage you to ask any Dubai contractor for the same.' },
      { q: 'Do you offer emergency call-outs?', a: 'Yes, for both plumbing and electrical faults, 24 hours a day and seven days a week across every Dubai community. Call us immediately for a burst pipe, an overflowing toilet, water coming through a ceiling, a total power failure, repeated tripping that will not reset, sparking or scorched sockets, a burning smell, or water reaching a DB board, and we will tell you on the phone whether to isolate the water at the stopcock or the main switch before we arrive. Emergency jobs are dispatched to the nearest available licensed plumber or electrician rather than queued behind scheduled work. Painting, flooring and AC duct cleaning are not emergency services, but we do offer same-day site visits and, for move-out repaints where a handover date is looming, same-day and next-day completion. Our standard hours are 8am to 10pm, seven days a week.' },
    ],
  },
  finalCta: {
    heading: 'Get your free quote today',
    text: 'Painting, plumbing, flooring, AC duct cleaning or electrical work, one trusted team. Free site visit, fixed written quote and a written warranty. Open 7 days a week, 8am-10pm, with 24/7 emergency cover.',
    whatsappLabel: 'WhatsApp Us',
    whatsappText: 'Hi! I would like a free quote in Dubai.',
  },
  contact: {
    heading: 'Request a quick quote',
    intro: 'Tell us what you need, painting, plumbing, flooring, AC duct cleaning or electrical, and we reply within minutes with a fixed price and the earliest available slot.',
    messageLabel: 'What do you need help with?',
    messagePlaceholder: 'e.g. 2-bedroom apartment in JVC, painting the living room and fixing a blocked kitchen sink',
  },
}

/* Copy for the /services hub page. It renders the same ServiceHub cards the
   homepage does, so its own heading, intro and lead are deliberately written
   from a different angle — how the trades fit together, where we cover and how
   quoting works — rather than repeating HOME.hub. Two pages carrying the same
   section copy compete with each other in search. */
export const SERVICES_HUB = {
  h1: 'All our technical services in Dubai',
  lead: [
    'Sama Alras Technical Services covers five trades from one licensed Dubai company: painting, plumbing, SPC and other flooring, licensed electrical work, and AC duct cleaning. Each trade has its own permanent crew, employed, trained and insured by us rather than day-hired for the job, which is why the standard of work does not change when the trade does.',
    'Open any service below for the full detail: exactly what is covered, how the work is carried out, the areas we reach and the questions we are asked most. If your job crosses two or three trades, and renovations usually do, we sequence them on a single schedule under one quotation so you are never coordinating contractors yourself.',
  ],
  heading: 'Choose the service you need',
  intro:
    'Every service here starts the same way: a free site visit to measure up and see the job properly, then a fixed written quote before any work begins, and a written workmanship warranty when we hand over. We cover every community in Dubai, from Dubai Marina, Business Bay and Palm Jumeirah to Arabian Ranches, Dubai Hills Estate, JVC and Mirdif, seven days a week from 8am to 10pm, with 24/7 cover for plumbing and electrical emergencies.',
  finalCta: {
    heading: 'Not sure which service you need?',
    text: 'Describe the property and what is wrong, and we will send the right crew for a free site visit and a fixed written quote before anything starts. Open 7 days a week, 8am-10pm, with 24/7 emergency cover for plumbing and electrical faults.',
    whatsappLabel: 'WhatsApp Us',
    whatsappText: 'Hi! I would like a free quote in Dubai.',
  },
  contact: {
    heading: 'Tell us about the job',
    intro: 'Send us the property type, the area of Dubai you are in and what needs doing. We reply within minutes with the earliest available slot and arrange a free site visit for your fixed quote.',
    messageLabel: 'What do you need help with?',
    messagePlaceholder: 'e.g. 3-bedroom villa in Arabian Ranches, repaint the interior and fit SPC flooring in two bedrooms',
  },
}
