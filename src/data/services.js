import { wa } from './site'

const PAINTING = {
  slug: 'painting-services',
  path: '/services/painting-services',
  navLabel: 'Painting',
  schemaType: 'HousePainter',
  serviceName: 'Painting Services in Dubai',
  overview: {
    heading: 'Best Painting Services in Dubai',
    paragraphs: [
      'Sama Alras Technical Services has painted thousands of villas, apartments and offices across Dubai since 2013. Our painters combine careful surface preparation with premium, climate-ready paints from Jotun, National Paints and Caparol, so your walls look immaculate and stay that way through Dubai’s heat and humidity.',
      'Every painting project is fully prepared before a single coat goes on: we fill cracks, sand, prime and protect your furniture and floors. From a quick one-room refresh to a full villa repaint or a weekend office job, you get fixed pricing, tidy workmanship and a written warranty of up to five years.',
      'Looking for painters near you? We cover every community in Dubai with free, same-day site visits, including Dubai Marina, Downtown Dubai, Business Bay, Jumeirah, Palm Jumeirah, Arabian Ranches, Dubai Hills Estate, JVC, JLT, The Springs, Mirdif and Al Barsha. Need more than paint? The same trusted team also fits SPC flooring, handles licensed electrical work and cleans AC ducts, so one company can look after your whole property.',
    ],
    links: [
      { label: 'SPC & Flooring Services', to: '/services/spc-flooring-services' },
      { label: 'Electrician Services', to: '/services/electrician-services' },
      { label: 'AC Duct Cleaning', to: '/services/ac-duct-cleaning-services' },
      { label: 'Plumbing Services', to: '/services/plumbing-services' },
      { label: 'All Services', to: '/' },
    ],
  },
  card: {
    title: 'Painting Services',
    tagline: 'Villa, apartment, office & exterior',
    description:
      'Professional painters in Dubai for villas, apartments, offices and building exteriors, plus move-out repaints and waterproofing. Full surface preparation, premium paints and a written warranty on every job.',
    image: '/images/services/villa-painting.webp',
    alt: 'Sama Alras painters rolling fresh paint on a villa wall in Dubai',
    features: ['Interior & exterior painting', 'Premium climate-ready paints', 'Free colour consultation', 'Up to 5-year warranty'],
  },
  team: {
    heading: 'The painting crew',
    lead: 'Surface preparation specialists first, painters second',
    text: 'Our painters in Dubai spend more of the job on preparation than on paint, because that is what decides whether a finish survives the climate. They fill and rake out cracks, sand back flaking coats and choose the right primer for plaster, previously glossed woodwork or exterior render, then work with Jotun, National Paints and Caparol systems. The same crew handles villa painting, apartment repaints, after-hours office and commercial painting, exterior facades and move-out handovers, so nobody is learning a new surface on your wall.',
  },
  meta: {
    title: 'Painting Services in Dubai | Villa, Apartment & Office Painters',
    description:
      'Painting services in Dubai for villas, apartments, offices and building exteriors, plus move-out repaints and waterproofing. Experienced painters using Jotun, National Paints and Caparol, with full surface preparation, free colour consultation and a warranty of up to 5 years. Call or WhatsApp now.',
    keywords:
      'painting services in dubai, painters in dubai, painters near me, painting company near me, best painters dubai, professional painters dubai, villa painting dubai, villa painters dubai, apartment painting dubai, flat painting dubai, house painting dubai, office painting dubai, commercial painting dubai, exterior painting dubai, wall painting dubai, move out painting dubai, painting services dubai marina, painters business bay, villa painting arabian ranches, painters jvc, painting services jumeirah',
  },
  hero: {
    h1Pre: 'Painting Services',
    h1Highlight: 'in Dubai',
    subtitle: 'Professional & Experienced Painters in Dubai Near You',
    intro:
      'Professional painting services in Dubai for villas, apartments, offices and building exteriors. On time, on budget, and backed by a written 5-year warranty.',
    image: '/images/services/painting-hero.webp',
    imageAlt: 'Professional Sama Alras painters painting a modern villa exterior in Dubai',
    panelHeading: 'Why Dubai chooses us',
    rating: '4.9/5 from 1,200+ reviews',
    badge: 'Teams available today for same-day site visits',
    whatsappText: "Hi! I'd like a free painting quote in Dubai.",
  },
  services: {
    heading: 'Professional Painting Services in Dubai',
    intro:
      'One expert team for every painting job in Dubai. Every project includes free colour consultation, full surface preparation and a written warranty.',
    items: [
      {
        id: 'villa-painting',
        image: '/images/services/villa-painting.webp',
        alt: 'Painters rolling fresh paint on a villa exterior wall in Dubai',
        waHref: wa("Hi! I'd like a free quote for villa painting in Dubai."),
        title: 'Villa Painting Services in Dubai',
        tagline: 'Interior and exterior villa painters',
        description:
          'Complete villa painting in Dubai: interiors, exteriors, boundary walls, pergolas and gates. Our villa painters handle everything from Arabian Ranches family homes to Palm Jumeirah waterfront villas with full surface preparation, premium Jotun and Caparol paints, and dust-free workmanship.',
        features: ['Villa interior and exterior wall painting', 'Heat-resistant weatherproof coatings', 'Free colour consultation and samples', '5-year workmanship warranty'],
      },
      {
        id: 'apartment-painting',
        image: '/images/services/apartment-painting.webp',
        alt: 'Painter repainting an apartment wall in Dubai with the city skyline in the window',
        waHref: wa("Hi! I'd like a free quote for apartment painting in Dubai."),
        title: 'Apartment Painting Services in Dubai',
        tagline: 'Flats, studios and penthouses',
        description:
          'Fast, affordable apartment painting in Dubai with fixed transparent pricing. From studio apartments in JVC to penthouses in Dubai Marina, our apartment painters finish most flats in 1-2 days: furniture covered, floors protected, and a spotless clean-up before handover.',
        features: ['Studio to 4-bedroom flat painting', 'Low-VOC washable emulsions', 'Most apartments done in 1-2 days', 'Fixed quote with no hidden costs'],
      },
      {
        id: 'office-commercial-painting',
        image: '/images/services/office-commercial-painting.webp',
        alt: 'After-hours office painting crew at work on a commercial building in Dubai',
        waHref: wa("Hi! I'd like a free quote for office or commercial painting in Dubai."),
        title: 'Office & Commercial Painting Services in Dubai',
        tagline: 'Zero-downtime business painting',
        description:
          'Professional office painting in Dubai delivered after hours, overnight or on weekends so your business never stops. We paint offices, retail stores, restaurants, clinics, gyms and warehouses across Business Bay, DIFC, Deira and every free zone, fully insured and DM-compliant.',
        features: ['After-hours and weekend scheduling', 'Offices, retail, warehouses and clinics', 'Brand-colour matching available', 'Fully insured commercial painters'],
      },
      {
        id: 'exterior-building-painting',
        image: '/images/services/exterior-building-painting.webp',
        alt: 'Exterior building painting in Dubai, high-rise facade with rope access painters',
        waHref: wa("Hi! I'd like a free quote for exterior or building painting in Dubai."),
        title: 'Exterior & Building Painting Services in Dubai',
        tagline: 'Facades built for UAE weather',
        description:
          'Exterior wall and facade painting in Dubai engineered for 45°C summers, humidity and sand abrasion. Our exterior painting contractors use UV-resistant, weatherproof paint systems with proper crack filling and priming, so buildings, villas and compounds stay vibrant for years.',
        features: ['Building facade and compound painting', 'UV and weatherproof paint systems', 'Rope-access and scaffold teams', 'Crack filling and priming included'],
      },
      {
        id: 'move-in-move-out-painting',
        image: '/images/services/move-in-move-out-painting.webp',
        alt: 'Move-out painting in Dubai, repainted rental apartment ready for handover',
        waHref: wa('Hi! I need move-out or move-in painting in Dubai. Can I get a quick quote?'),
        title: 'Move-In / Move-Out Painting Services in Dubai',
        tagline: 'Same-day deposit-saving repaints',
        description:
          'Moving out of a rental in Dubai? Our move-out painting service restores apartments and villas to landlord-approved handover condition, often the same day you call. Tenants use us to secure their full security deposit; landlords use us to get units market-ready fast.',
        features: ['Same-day and next-day slots', 'Landlord-approved handover finish', 'Touch-ups or full repaint options', 'Works around your moving schedule'],
      },
      {
        id: 'waterproofing-wall-repair',
        image: '/images/services/waterproofing-wall-repair.webp',
        alt: 'Waterproofing and wall crack repair in Dubai, sealed wall protected from rain',
        waHref: wa('Hi! I need waterproofing or wall crack repair and painting in Dubai.'),
        title: 'Waterproofing & Wall Repair Services in Dubai',
        tagline: 'Fix the cause, then paint',
        description:
          'Cracks, damp patches and peeling paint always come back unless the root cause is fixed. Our waterproofing and painting contractors in Dubai repair wall cracks, damp-proof ceilings, waterproof roofs and bathrooms, then repaint with a finish that lasts, backed by warranty.',
        features: ['Wall crack repair and repainting', 'Ceiling and roof waterproofing', 'Damp and mould treatment', 'Up to 5-year waterproofing warranty'],
      },
    ],
  },
  whyUs: {
    heading: "Why We're Rated the Best Painting Company in Dubai",
    intro:
      "Anyone can hold a roller. Delivering a flawless, long-lasting finish in Dubai's climate, on schedule and on budget, takes a professional system.",
    reasons: [
      { icon: 'medal', title: 'Verified professional painters', text: 'Every painter on our team has 5+ years of hands-on experience, is background-checked, uniformed and trained on current application techniques.' },
      { icon: 'receipt', title: 'Fixed quotes, zero surprises', text: 'The price we quote is the price you pay. Written quotations cover paint, labour, materials and clean-up. No mid-project extras, ever.' },
      { icon: 'paint-bucket', title: 'Paints made for UAE weather', text: 'We use Jotun, National Paints and Caparol systems: heat-reflective and UV-stable outside, low-VOC and washable inside.' },
      { icon: 'clock', title: 'On time, every time', text: 'Same-day site visits, punctual crews and realistic schedules we actually keep. Move-out repaints can be done the day you call.' },
      { icon: 'shield-check', title: 'Insured and warranty-backed', text: 'Full liability insurance on every job plus a written workmanship warranty, up to 5 years on exterior painting and waterproofing.' },
      { icon: 'broom', title: 'Spotless handover', text: 'Furniture wrapped, floors masked, sockets taped. When we leave, the only evidence we were there is a perfect paint job.' },
    ],
  },
  process: {
    heading: 'From Quote to Flawless Finish in 4 Steps',
    steps: [
      { step: '1', title: 'Free site visit and quote', text: 'Call or WhatsApp us. We visit the same day, measure up and send a fixed written quote within hours. No obligation, no hidden extras.' },
      { step: '2', title: 'Colour and paint selection', text: 'Our consultants help you choose shades and finishes from Jotun, National Paints and Caparol, with free samples tested on your actual walls.' },
      { step: '3', title: 'Preparation and painting', text: 'Furniture covered, floors masked, cracks filled and surfaces primed. Then our professional painters apply premium coats with clean edges.' },
      { step: '4', title: 'Inspection and handover', text: 'We walk the site with you, fix any touch-ups on the spot, deep-clean the space and hand over with a written workmanship warranty.' },
    ],
  },
  testimonials: {
    heading: 'What Dubai Says About Our Painters',
    reviews: [
      { name: 'Sarah M.', area: 'Arabian Ranches', service: 'Villa Painting', text: 'Repainted our entire villa inside and out in five days. The team protected everything, the finish is flawless and the price matched the quote exactly.' },
      { name: 'Ahmed K.', area: 'Dubai Marina', service: 'Apartment Painting', text: 'Booked on WhatsApp at 9am and my 2-bedroom flat was painted by the next evening. Professional painters, zero mess, and my landlord returned the full deposit.' },
      { name: 'Priya R.', area: 'Business Bay', service: 'Office Painting', text: 'They painted our 4,000 sq ft office over a single weekend. We walked in Monday to perfect brand-matched walls and no smell. Zero downtime for the team.' },
      { name: 'James T.', area: 'Jumeirah', service: 'Waterproofing & Repair', text: 'Other companies just painted over our damp ceiling and it kept coming back. These guys fixed the waterproofing first, then repainted. Eight months on, still perfect.' },
    ],
  },
  areas: {
    heading: 'Painters Near You, All Dubai Areas Covered',
    intro: 'Our crews are stationed across the city, so a professional painting team is never more than 30 minutes away.',
  },
  faq: {
    heading: 'Painting Services in Dubai, Answered',
    intro: 'Timelines, paints, preparation and warranties. If your question is not here, WhatsApp us and a real person replies within minutes.',
    items: [
      { q: 'How long does it take to paint an apartment or villa in Dubai?', a: 'A one to two bedroom apartment normally takes one to two days, a three bedroom apartment two to three days, and a full villa three to seven days depending on size, ceiling height and the condition of the existing surfaces. Walls that need crack filling, damp treatment or a colour change from dark to light need an extra coat and add roughly a day. Occupied homes take slightly longer than empty ones because we work room by room and re-protect furniture each morning. Move-out repaints are the fastest job we do and can often be finished the same day you call. We confirm the exact schedule in writing after the free site visit, so you know the finish date before any work starts.' },
      { q: "Do you use paints suitable for Dubai's climate?", a: "Yes, and the choice matters more here than almost anywhere. For exteriors we use heat-reflective, UV-resistant weatherproof systems from Jotun, National Paints and Caparol, which are formulated to hold their colour through 45°C summers, coastal humidity and blown sand rather than chalking and fading within a season. Exterior walls get crack filling and a bonding primer before topcoats, because in Dubai's heat most exterior paint failures start at the substrate, not the paint. Interiors get low-VOC, washable emulsions that are safe for families and pets and can be wiped clean, which matters in high-traffic hallways and children's rooms. We confirm the exact product and finish with you at the free colour consultation before ordering." },
      { q: 'Are your painters insured and do you offer a warranty?', a: 'Yes to both. Every painter on our team is trained, background-checked, uniformed and covered by full liability insurance, so you are protected if anything is damaged while we work in your home or office. Sama Alras Technical Services holds Dubai trade licence 923026. Every project is covered by a written workmanship warranty that is printed on your quotation rather than promised verbally, running up to five years on exterior painting and waterproofing and covering defects such as peeling, blistering and flaking caused by our workmanship. If something does go wrong inside the warranty period, we return and put it right at no charge. We also walk the finished job with you before handover so any touch-ups are done while the crew is still on site.' },
      { q: 'Can you paint my office outside working hours?', a: 'Yes. After-hours and weekend commercial painting is one of our most requested services in Dubai, and we schedule it as standard rather than as a special request. We work evenings, overnight and across weekends so your staff arrive to finished walls and zero disruption, which is why the service suits offices, retail units, clinics and warehouses where daytime closure is not an option. For occupied workplaces we use low-odour, low-VOC emulsions so rooms are usable immediately rather than needing to air out. We protect desks, IT equipment and flooring before starting and clear everything before your team returns. Larger fit-outs can be phased floor by floor so only one area is out of use at a time.' },
      { q: 'Do you provide move-out painting for rental apartments in Dubai?', a: 'Yes, and it is one of the most common jobs we handle. Our move-out painting service restores rental apartments and villas to landlord-approved handover condition so your property passes its final inspection and you recover your security deposit. We repair nail holes, wall anchors, scuffs, hairline cracks and any damp patches, then repaint in a standard landlord-approved white or the original scheme, matching the finish the handover requires. Because tenancy handovers rarely leave much notice, same-day and next-day slots are available across every Dubai community we serve. Send us photos on WhatsApp and we can usually quote a fixed price without a site visit, then complete a standard apartment in a single day.' },
      { q: 'Do I need to move out while you paint my villa or apartment?', a: 'Almost never. For interior painting in an occupied home we work room by room so you always have somewhere to sleep, cook and work, and most families stay in the property throughout. Before a brush is opened we move furniture to the centre of the room and sheet it, mask skirting, sockets, switches, door frames and floors, and seal off the work area so dust does not travel through the apartment. The low-VOC washable emulsions we use for interiors have very little odour, so a room is normally usable again the same evening rather than needing days to air out. Exterior and full-villa repaints are different only in scale, and if you would rather be out of the way during a whole-property job we will compress the schedule and work extended days to shorten it.' },
      { q: 'What surface preparation is included before painting?', a: 'All of it, because preparation is where a paint job is actually won or lost in Dubai. Every quotation includes washing down and degreasing the surface, scraping back any flaking or blistering paint, filling nail holes and hairline cracks, raking out and repairing wider cracks properly rather than skimming over them, sanding to a smooth finish and applying the correct primer for the substrate. Bare plaster, previously glossed woodwork, damp-affected walls and exterior render each need a different primer, and using the wrong one is the most common reason a repaint peels within a year in this climate. Where cracks or peeling are caused by water ingress we identify and fix the source first through our waterproofing and wall repair service, because painting over an active damp problem simply hides it until the next summer.' },
    ],
  },
  finalCta: {
    heading: 'Get your free painting quote today',
    text: 'Free site visit, fixed written quote within hours, finishes backed by a 5-year warranty. Open 7 days a week, 8am-10pm.',
    whatsappLabel: 'WhatsApp Us',
    whatsappText: 'Hi! I would like a free painting quote in Dubai.',
  },
  contact: {
    heading: 'Request a quick quote',
    intro: 'Tell us what needs painting and we reply within minutes with a fixed price and the earliest available slot.',
    messageLabel: 'What needs painting?',
    messagePlaceholder: 'e.g. 2-bedroom apartment in JVC, walls and ceilings, before June 30',
  },
}

const SPC = {
  slug: 'spc-flooring-services',
  path: '/services/spc-flooring-services',
  navLabel: 'SPC Flooring',
  schemaType: 'HomeAndConstructionBusiness',
  serviceName: 'SPC Flooring in Dubai',
  overview: {
    heading: 'Why SPC Flooring Is the Smart Choice in Dubai',
    paragraphs: [
      'SPC flooring has quickly become one of the most popular floors in Dubai, and for good reason. Its rigid stone-plastic core is 100% waterproof, so an SPC floor will not swell, warp or fade the way laminate or real wood can in Dubai’s heat and humidity, while still giving you a realistic wood or stone look underfoot.',
      'We supply and install SPC flooring in villas, apartments and offices, along with vinyl, laminate, wooden, parquet, epoxy and carpet options. Every job starts with a free on-site measurement and a proper subfloor check, because a flat, dry base is what keeps a floor silent, level and stable for years.',
      'Searching for SPC flooring near you? Our SPC flooring Dubai teams cover every community in Dubai, including Dubai Marina, Downtown Dubai, Business Bay, Jumeirah, Palm Jumeirah, Arabian Ranches, Dubai Hills Estate, JVC, JLT, The Springs, Mirdif and Al Barsha, and most rooms are ready to walk on the same day they are fitted. We also offer painting, licensed electrical work and AC duct cleaning, so your whole home upgrade can be handled by one team.',
    ],
    links: [
      { label: 'Painting Services', to: '/services/painting-services' },
      { label: 'Electrician Services', to: '/services/electrician-services' },
      { label: 'AC Duct Cleaning', to: '/services/ac-duct-cleaning-services' },
      { label: 'Plumbing Services', to: '/services/plumbing-services' },
      { label: 'All Services', to: '/' },
    ],
  },
  card: {
    title: 'SPC Flooring',
    tagline: 'Waterproof rigid-core floors affordable and quality work',
    description:
      'Supply and installation of 100% waterproof, scratch-resistant SPC flooring in Dubai, plus vinyl, laminate, wooden, parquet and epoxy floors. Free on-site measurement, fast fitting and clean handover.',
    image: '/images/services/spc/spc_flooring_clean.webp',
    alt: 'Wide plank SPC flooring being click-locked into place in a Dubai apartment',
    features: ['100% waterproof SPC floors', 'Free on-site measurement', 'Fast click-lock installation', 'Wide colour & finish range'],
  },
  team: {
    heading: 'The flooring team',
    lead: 'Subfloor readers who fit over what is already there',
    text: 'Our flooring fitters know that an SPC floor fails at the subfloor, not the plank. They check level, moisture and hollow tiles before quoting, which is how most of our SPC flooring in Dubai goes down over existing tiles without lifting them. They click-lock rigid-core SPC, vinyl and LVT, laminate, wooden and parquet, epoxy and carpet, and will tell you plainly when a kitchen, bathroom or balcony calls for something other than SPC rather than fitting it everywhere.',
  },
  meta: {
    title: 'SPC Flooring in Dubai | 100% Waterproof Supply & Installation',
    description:
      'SPC flooring in Dubai supplied and installed by Sama Alras: 100% waterproof, scratch-resistant floors for villas, apartments and offices, plus vinyl and LVT, laminate, wooden and epoxy. Free measurement, fitting over existing tiles and fast installation across Dubai. Call or WhatsApp now.',
    keywords:
      'spc flooring, spc floor, spc flooring dubai, spc flooring in dubai, spc flooring near me, flooring company near me, flooring spc, waterproof spc flooring, spc vinyl flooring dubai, vinyl flooring dubai, lvt flooring dubai, laminate flooring dubai, wooden flooring dubai, parquet flooring dubai, epoxy flooring dubai, carpet flooring dubai, flooring installation dubai, flooring contractors dubai, spc flooring dubai marina, flooring jvc, flooring business bay, flooring arabian ranches',
  },
  hero: {
    h1Pre: 'SPC Flooring in',
    h1Highlight: 'Dubai',
    subtitle: 'Waterproof, Scratch-Resistant SPC Floors Fitted Across Dubai',
    intro:
      'A modern SPC floor gives you the look of real wood or stone with a rigid, 100% waterproof core built for Dubai homes and offices. Free measurement, expert fitting and a clean handover, with SPC flooring near you anywhere in the city.',
    image: '/images/services/spc/hero.webp',
    imageAlt: 'Close-up of waterproof SPC flooring planks with a realistic wood-grain finish',
    panelHeading: 'Why Dubai chooses our floors',
    rating: '4.9/5 from 1,200+ reviews',
    badge: 'Free on-site measurement available today',
    whatsappText: 'Hi! I would like a free quote for SPC flooring in Dubai.',
  },
  services: {
    heading: 'Our Flooring Services in Dubai',
    intro:
      'From rigid-core SPC flooring to vinyl, laminate, wooden and epoxy floors, our flooring SPC specialists supply and fit the right surface for every room. Every job includes free measurement, subfloor checks and a tidy, dust-controlled installation.',
    items: [
      {
        id: 'spc-flooring',
        image: '/images/services/spc/spc-flooring.webp',
        alt: 'Rigid-core SPC flooring planks installed in a bright Dubai living room',
        waHref: wa('Hi! I would like a free quote for SPC flooring in Dubai.'),
        title: 'SPC Flooring Supply & Installation',
        tagline: '100% waterproof rigid core',
        description:
          'SPC flooring (stone-plastic composite) is the toughest floating floor for Dubai: a rigid, 100% waterproof core with a realistic wood or stone top layer. We supply and install SPC flooring in villas, apartments and offices with a fast click-lock fit, so an SPC floor is ready to walk on the same day. Ask for SPC flooring near you and we measure for free.',
        features: ['100% waterproof stone-plastic core', 'Scratch, dent and fade resistant', 'Fast click-lock, no messy glue', 'Realistic wood and stone finishes'],
      },
      {
        id: 'vinyl-flooring',
        image: '/images/services/spc/vinyl_lvt_flooring_worker.webp',
        alt: 'Luxury vinyl LVT flooring rolled out in a modern Dubai apartment',
        waHref: wa('Hi! I would like a free quote for vinyl flooring in Dubai.'),
        title: 'Vinyl & LVT Flooring',
        tagline: 'Soft underfoot, water-resistant',
        description:
          'Luxury vinyl tile (LVT) and vinyl flooring give a warm, quiet, water-resistant floor that suits bedrooms, retail and clinics. We fit glue-down and click vinyl over a properly prepared subfloor for a smooth, long-lasting finish across Dubai.',
        features: ['Luxury vinyl tile (LVT) and planks', 'Warm and quiet underfoot', 'Great for bedrooms and retail', 'Glue-down or click options'],
      },
      {
        id: 'wooden-parquet-flooring',
        image: '/images/services/spc/wooden_parquet_flooring_worker_dubai.webp',
        alt: 'Engineered wooden parquet flooring laid in a Dubai villa',
        waHref: wa('Hi! I would like a free quote for wooden or parquet flooring in Dubai.'),
        title: 'Wooden & Parquet Flooring',
        tagline: 'Engineered and solid wood',
        description:
          'Engineered wood and parquet flooring bring natural warmth to villas and premium apartments. We supply, fit and finish wooden floors with the right underlay and expansion gaps so they stay stable in Dubai’s humidity, with sanding and refinishing available too.',
        features: ['Engineered and solid wood floors', 'Classic parquet patterns', 'Sanding and refinishing service', 'Stable in Dubai humidity'],
      },
      {
        id: 'laminate-flooring',
        image: '/images/services/spc/laminate_flooring_worker_dubai_house.webp',
        alt: 'Laminate wood-effect flooring being installed in a Dubai bedroom',
        waHref: wa('Hi! I would like a free quote for laminate flooring in Dubai.'),
        title: 'Laminate Flooring',
        tagline: 'Budget-friendly wood look',
        description:
          'Laminate flooring is a fast, affordable way to get a wood-look floor with a tough scratch-resistant surface. Ideal for bedrooms, living rooms and offices, our laminate floors click together over a foam underlay for a quick, clean installation anywhere in Dubai.',
        features: ['Affordable wood-effect finish', 'Scratch-resistant top layer', 'Quick click-lock installation', 'Easy to clean and maintain'],
      },
      {
        id: 'epoxy-flooring',
        image: '/images/services/spc/epoxy_flooring_worker_dubai_house.webp',
        alt: 'Seamless grey epoxy resin flooring in a Dubai garage and warehouse',
        waHref: wa('Hi! I would like a free quote for epoxy flooring in Dubai.'),
        title: 'Epoxy Flooring',
        tagline: 'Seamless resin for high traffic',
        description:
          'Epoxy resin flooring creates a seamless, hard-wearing, easy-clean surface for garages, warehouses, kitchens, gyms and car parks. We prepare the concrete, fill cracks and apply a durable epoxy coating that resists chemicals, oil and heavy traffic across Dubai.',
        features: ['Seamless, easy-clean surface', 'For garages, warehouses and gyms', 'Chemical and abrasion resistant', 'Slip-resistant finishes available'],
      },
      {
        id: 'carpet-flooring',
        image: '/images/services/spc/carpet_flooring_worker_dubai_house.webp',
        alt: 'Carpet tiles being laid in a Dubai office fit-out',
        waHref: wa('Hi! I would like a free quote for carpet or carpet tiles in Dubai.'),
        title: 'Carpet & Carpet Tiles',
        tagline: 'Comfort for homes and offices',
        description:
          'Soft broadloom carpet and modular carpet tiles for bedrooms, majlis rooms, offices and meeting spaces. We supply and fit acoustic-friendly carpet that reduces noise and adds comfort, with hard-wearing commercial ranges for busy Dubai workplaces.',
        features: ['Broadloom carpet and carpet tiles', 'Residential and commercial ranges', 'Noise-reducing and comfortable', 'Fast, tidy office fit-outs'],
      },
    ],
  },
  whyUs: {
    heading: 'Why Choose Us for SPC Flooring in Dubai',
    intro:
      'A great floor is 90% preparation. We measure accurately, check your subfloor and fit every plank properly, so your SPC flooring looks perfect and lasts for years.',
    reasons: [
      { icon: 'drop', title: '100% waterproof floors', text: 'SPC flooring has a rigid stone-plastic core that will not swell or warp, ideal for kitchens, bathrooms and Dubai humidity.' },
      { icon: 'ruler', title: 'Free accurate measurement', text: 'We visit, measure every room and account for cuts and wastage, so your quote is exact with no surprise material costs.' },
      { icon: 'stack', title: 'Proper subfloor preparation', text: 'We level, clean and lay the correct underlay before fitting. A flat, dry subfloor is what keeps a floor silent and stable.' },
      { icon: 'receipt', title: 'Fixed, transparent pricing', text: 'Supply and installation quoted per square metre in writing. The price you approve is the price you pay.' },
      { icon: 'sparkle', title: 'Clean, fast installation', text: 'Dust-controlled cutting, tidy workmanship and most rooms finished in a single day so you can move back in quickly.' },
      { icon: 'shield-check', title: 'Warranty on every floor', text: 'Manufacturer product warranties plus our own workmanship guarantee on the installation, all in writing.' },
    ],
  },
  process: {
    heading: 'How We Install Your Floor in 4 Steps',
    steps: [
      { step: '1', title: 'Free measurement and quote', text: 'We visit your property in Dubai, measure each room and send a fixed written quote per square metre, including materials and fitting.' },
      { step: '2', title: 'Choose your floor', text: 'Pick your SPC, vinyl, laminate, wooden or epoxy range with real samples so you can see the colour and finish in your own light.' },
      { step: '3', title: 'Subfloor prep and underlay', text: 'We clean and level the subfloor, fix any dips, then lay the correct underlay or moisture barrier for a stable, quiet floor.' },
      { step: '4', title: 'Installation and handover', text: 'Precise cutting, tight click-lock joints and neat skirting and beading. We clean up and hand over a floor ready to walk on.' },
    ],
  },
  testimonials: {
    heading: 'What Dubai Says About Our Floors',
    reviews: [
      { name: 'Omar A.', area: 'Dubai Hills Estate', service: 'SPC Flooring', text: 'Fitted SPC flooring through our whole villa in two days. It looks exactly like real oak, feels solid underfoot and survived a kitchen flood without a mark.' },
      { name: 'Lina H.', area: 'JVC', service: 'Vinyl Flooring', text: 'Searched for SPC flooring near me and found Sama Alras. Free measurement, honest pricing and a beautiful finish in the bedrooms. Highly recommend.' },
      { name: 'David P.', area: 'Business Bay', service: 'Epoxy Flooring', text: 'Epoxy floor in our warehouse is seamless and so easy to clean. The team prepped the concrete properly, which is why it still looks new.' },
      { name: 'Fatima S.', area: 'Arabian Ranches', service: 'Wooden Flooring', text: 'They laid engineered parquet in our majlis and sanded our old floors. Careful, clean work and the result is stunning.' },
    ],
  },
  areas: {
    heading: 'SPC Flooring Installers Near You, All Dubai Areas',
    intro: 'Our flooring teams cover every community in Dubai, so professional SPC flooring installation is never far from you.',
  },
  faq: {
    heading: 'SPC Flooring in Dubai, Answered',
    intro: 'Timelines, subfloors, durability and installation. If your question is not here, WhatsApp us and a real person replies within minutes.',
    items: [
      { q: 'What is SPC flooring and why is it popular in Dubai?', a: 'SPC stands for stone-plastic composite: a rigid, 100% waterproof floating floor built around a dense limestone and PVC core, topped with a photographic wood or stone layer and a wear coat. It suits Dubai specifically because the stone core barely moves with temperature and humidity, so it does not swell like laminate or cup and warp like solid wood when air conditioning cycles on and off or a villa is left empty over summer. The rigid core also spans minor subfloor imperfections better than flexible vinyl, and the wear layer resists the scratches and grit damage that come with sand being walked indoors. Because it click-locks without adhesive it goes down over most existing tiles, so there is no demolition, no dust and no waiting for screed to cure.' },
      { q: 'Can SPC flooring be installed over my existing tiles?', a: 'In most cases, yes, and this is one of the main reasons people choose SPC in Dubai. The boards click-lock into a floating floor over sound, level tiles or concrete, so there is no need to break out the existing floor, no demolition debris and no disruption to neighbours. What matters is flatness rather than looks: wide grout lines, hollow or drummy tiles, or dips greater than roughly 3mm over two metres will telegraph through and can cause the floor to flex or click underfoot. During the free on-site measurement we check the subfloor with a level, tap for loose tiles and check for damp, then tell you honestly whether a self-levelling compound is needed first and what it adds to the price before you commit.' },
      { q: 'How long does SPC flooring installation take?', a: 'Most individual rooms are finished in a single day once the subfloor is prepared, and you can walk on the floor immediately because there is no adhesive curing time. A typical two bedroom apartment takes one to two days, and a full villa two to three days depending on floor area, layout complexity and how many doorways, thresholds and staircases need trimming. Rooms with many cuts around cabinetry or curved walls take longer than open living areas of the same size. If self-levelling is required we allow drying time before laying, which usually adds a day. We confirm the exact schedule in writing after the on-site measurement, and we move furniture, lay the floor and fit skirting or beading as one continuous job.' },
      { q: 'Is SPC flooring really waterproof?', a: 'Yes. The stone-plastic core contains no wood fibre, so unlike laminate it cannot absorb water, swell at the edges or delaminate. Spills, wet mopping, a washing machine overflow or a bathroom leak will not damage the boards themselves, and the floor can be dried and kept in service rather than replaced. That makes SPC a genuinely safe choice for kitchens, bathrooms, laundry rooms and villa entrances where wood and laminate fail. Two practical caveats worth knowing: the boards are waterproof but the subfloor beneath them is not, so standing water should still be cleared promptly, and in wet rooms we seal the perimeter so water cannot travel underneath. We also fit a moisture barrier underlay over concrete as standard.' },
      { q: 'Do you offer SPC flooring near me across Dubai?', a: 'Yes. We supply and install SPC flooring in every Dubai community, including Dubai Marina, Downtown Dubai, Business Bay, Jumeirah, Palm Jumeirah, Arabian Ranches, Dubai Hills Estate, JVC, JLT, The Springs, Mirdif, Al Barsha, Motor City and Silicon Oasis, for villas, apartments, townhouses and offices alike. The free on-site measurement is genuinely free with no obligation, and we bring physical samples so you can see the colour and texture in your own lighting rather than choosing from a screen. Call or WhatsApp us with your area and approximate square metreage and we will arrange a visit, usually the same day, then send a fixed written quote per square metre with the installation date included.' },
      { q: 'SPC flooring vs vinyl, laminate and wooden flooring, which is best for Dubai?', a: 'It depends on the room, but SPC wins more often than not in this climate. SPC has a rigid stone-composite core, so unlike laminate it will not swell or blow at the joints if water sits on it, and unlike thin vinyl or LVT it does not telegraph every imperfection in the subfloor beneath. Laminate flooring is usually the cheapest option and looks good in a dry bedroom or majlis, but a single washing-machine leak or a mopping accident can ruin a whole run. Vinyl and LVT are genuinely waterproof and softer underfoot, which suits bedrooms and kids rooms, though they dent more easily under heavy furniture. Real wooden and parquet flooring is the most beautiful and the least forgiving, since Dubai humidity swings and underfloor damp make movement and cupping a real risk. We supply and fit all of them and will tell you honestly which suits each room.' },
      { q: 'Can SPC flooring be used in kitchens, bathrooms and balconies in Dubai?', a: 'Kitchens and guest bathrooms, yes; wet shower rooms and open balconies, no. Because the core is stone composite rather than wood fibre, SPC is completely unaffected by spills, mopping, a dishwasher leak or a washing machine overflow, which makes it an excellent kitchen and laundry floor and a common choice for guest WCs. What it is not designed for is standing water and direct sun. In a shower enclosure water eventually finds the joints and gets underneath, where it cannot dry out, so tiling remains the right answer there. On an uncovered balcony or terrace, Dubai sunlight and surface temperatures well above 60°C will expand the planks and can lift the locking joints, so SPC should stay indoors or under fully covered, shaded areas. We will flag any room on your plan where a different floor is the sensible choice rather than fitting SPC everywhere.' },
    ],
  },
  finalCta: {
    heading: 'Get your free SPC flooring quote today',
    text: 'Free on-site measurement, fixed written quote per square metre and fast, tidy installation. Open 7 days a week, 8am-10pm.',
    whatsappLabel: 'WhatsApp Us',
    whatsappText: 'Hi! I would like a free SPC flooring quote in Dubai.',
  },
  contact: {
    heading: 'Request a free flooring quote',
    intro: 'Tell us the rooms and approximate area and we reply within minutes with a price per square metre and the earliest fitting slot.',
    messageLabel: 'What flooring do you need?',
    messagePlaceholder: 'e.g. 3-bedroom apartment in JVC, approx 120 sqm, SPC flooring in living room and bedrooms',
  },
}

const ELECTRICIAN = {
  slug: 'electrician-services',
  path: '/services/electrician-services',
  navLabel: 'Electrician',
  schemaType: 'Electrician',
  serviceName: 'Electrician Services in Dubai',
  overview: {
    heading: 'Licensed Electricians for Every Job in Dubai',
    paragraphs: [
      'Whether you have typed “electrician near me” after a sudden power cut, need electrical services near me for a new project, or are looking for reliable electricians in my area, Sama Alras has a licensed electrician ready to help anywhere in Dubai. From an electrical repair near me to a full electrical installation, our team handles small electrical repairs through to complete rewiring, always working safely and to DEWA standards.',
      'As an established electrical contractor and the trusted electrician service Dubai relies on, we cover electrical installation, electrical maintenance, emergency repairs and planned electrical repair services: tripping DB boards, faulty sockets, lighting and chandeliers, ceiling fans and home electrics of every kind. Each electrical technician tests the work before leaving and explains what was done in plain language.',
      'Electrical faults rarely wait for a convenient time, so for anything electrical near me we offer same-day visits and 24/7 emergency electrician cover across every community in Dubai, including Dubai Marina, Downtown Dubai, Business Bay, Jumeirah, Palm Jumeirah, Arabian Ranches, Dubai Hills Estate, JVC, JLT, The Springs, Mirdif and Al Barsha. Need more than an electrician? We also provide painting, SPC flooring and AC duct cleaning under the same trusted roof.',
    ],
    links: [
      { label: 'Painting Services', to: '/services/painting-services' },
      { label: 'SPC & Flooring Services', to: '/services/spc-flooring-services' },
      { label: 'AC Duct Cleaning', to: '/services/ac-duct-cleaning-services' },
      { label: 'Plumbing Services', to: '/services/plumbing-services' },
      { label: 'All Services', to: '/' },
    ],
  },
  card: {
    title: 'Electrician Services',
    tagline: 'Wiring, lighting & repairs',
    description:
      'Licensed electricians in Dubai for wiring and rewiring, light and chandelier installation, DB board repairs, switches and sockets, ceiling fans and 24/7 emergency fault finding. Safe, tidy and fully insured.',
    image: '/images/services/electrician/electrician.webp',
    alt: 'Licensed electrician in Dubai wiring a distribution board',
    features: ['Licensed & insured electricians', 'Wiring, lighting & DB boards', '24/7 emergency call-outs', 'Safe, certified workmanship'],
  },
  team: {
    heading: 'The electrical team',
    lead: 'Licensed electricians who diagnose before they replace',
    text: 'Every electrician on our team works to DEWA and UAE safety standards, on small jobs as well as full rewires, because that is exactly where shortcuts get taken and where they get dangerous. They trace the actual fault behind a tripping breaker instead of swapping the breaker and waiting for the callback, and handle wiring and rewiring, DB board and fuse box repair, light and chandelier installation, switches, sockets and ceiling fans. They also carry the 24/7 emergency rota for electrical faults across Dubai.',
  },
  meta: {
    title: 'Electrician in Dubai | Electrical Services, Repairs & Emergency 24/7',
    description:
      "Need an electrician in Dubai? Sama Alras provides licensed electricians for electrical installation, electrical repairs and maintenance, wiring, DB boards, lighting, sockets and fans, plus 24/7 emergency electrician call-outs. Searching 'electrician near me' in Dubai? Call or WhatsApp now.",
    keywords:
      'electrician, electrician near me, emergency electrician, emergency electrician near me, electrical services near me, electricians in my area, electrical near me, electrical technician, electrical contractor, electrical maintenance, home electrics, electrical repair near me, electrician emergency, electrical installation, electrical repair services, electrical repairs, electrician in dubai, electrician service dubai, emergency electrician dubai, 24 hour electrician dubai, electrical wiring dubai, rewiring dubai, db board repair dubai, chandelier installation dubai, electrician dubai marina, electrician business bay, electrician jvc, electrician mirdif, electrician arabian ranches',
  },
  hero: {
    h1Pre: 'Electrician Services in',
    h1Highlight: 'Dubai',
    subtitle: 'Licensed Electricians & Electrical Services in Dubai Near You',
    intro:
      "From a single faulty socket to full home rewiring, our licensed electricians in Dubai handle every electrical installation, repair and maintenance job safely and to code. Searching for an electrician near me? We offer same-day call-outs and 24/7 emergency electrician cover across the city.",
    image: '/images/services/electrician/electrician_samaalras.webp',
    imageAlt: 'Electrician safely testing a distribution board in a Dubai home',
    panelHeading: 'Why Dubai calls our electricians',
    rating: '4.9/5 from 1,200+ reviews',
    badge: '24/7 emergency electricians on call',
    whatsappText: 'Hi! I need an electrician in Dubai. Can I get a quick quote?',
  },
  services: {
    heading: 'Our Electrical Services in Dubai',
    intro:
      'One licensed team for every electrical job in Dubai, from small repairs to full installations. Every visit is carried out safely, tested and left clean and tidy.',
    items: [
      {
        id: 'wiring-rewiring',
        image: '/images/services/electrician/electrical_wiring_rewiring_worker_dubai.webp',
        alt: 'Electrician installing new electrical wiring in a Dubai villa',
        waHref: wa('Hi! I need electrical wiring or rewiring in Dubai.'),
        title: 'Electrical Wiring & Rewiring',
        tagline: 'Safe new circuits and rewires',
        description:
          'New wiring for renovations and full rewiring for older villas and apartments in Dubai. We install and upgrade circuits, run new cabling for kitchens, ACs and extensions, and make sure everything is earthed, tested and compliant with DEWA standards.',
        features: ['Full and partial rewiring', 'New circuits for AC, kitchen and more', 'Proper earthing and testing', 'DEWA-compliant installation'],
      },
      {
        id: 'light-chandelier-installation',
        image: '/images/services/electrician/light_chandelier_installation_dubai.webp',
        alt: 'Electrician installing a chandelier in a Dubai villa',
        waHref: wa('Hi! I need light or chandelier installation in Dubai.'),
        title: 'Light & Chandelier Installation',
        tagline: 'LED, spotlights and chandeliers',
        description:
          'Supply and installation of all lighting: LED downlights, spotlights, ceiling lights, wall lights and heavy chandeliers. We mount fixtures securely, replace old fittings with energy-saving LEDs and set up dimmers and smart lighting across Dubai homes and offices.',
        features: ['LED downlights and spotlights', 'Heavy chandelier hanging', 'Dimmers and smart lighting', 'Energy-saving upgrades'],
      },
      {
        id: 'db-board-repair',
        image: '/images/services/electrician/db_board_fuse_box_repair_electrician.webp',
        alt: 'Electrician repairing a distribution board and fuse box in Dubai',
        waHref: wa('Hi! I need DB board or fuse box repair in Dubai.'),
        title: 'DB Board & Fuse Box Repair',
        tagline: 'Tripping and power faults fixed',
        description:
          'If your power keeps tripping or a breaker will not reset, our electricians diagnose and repair distribution boards (DB boards) and fuse boxes fast. We replace faulty MCBs and RCDs, upgrade overloaded boards and label every circuit for safety.',
        features: ['Fix constant tripping and outages', 'MCB and RCD replacement', 'DB board upgrades and labelling', 'Overload and safety checks'],
      },
      {
        id: 'switches-sockets',
        image: '/images/services/electrician/switches_sockets_usb_power_points_dubai.webp',
        alt: 'Electrician installing new power sockets and switches in a Dubai apartment',
        waHref: wa('Hi! I need switches, sockets or power points installed in Dubai.'),
        title: 'Switches, Sockets & Power Points',
        tagline: 'New points and replacements',
        description:
          'Adding, moving or replacing switches, sockets and power points in Dubai. We install USB sockets, extra power points for appliances and home offices, replace burnt or loose fittings and fix outlets that have stopped working, all neatly and safely.',
        features: ['New and additional power points', 'USB and smart sockets', 'Replace burnt or loose fittings', 'Move points during renovation'],
      },
      {
        id: 'ceiling-fan',
        image: '/images/services/electrician/ceiling_fan_installation_repair_dubai_house.webp',
        alt: 'Electrician installing a ceiling fan in a Dubai bedroom',
        waHref: wa('Hi! I need ceiling fan installation or repair in Dubai.'),
        title: 'Ceiling Fan Installation & Repair',
        tagline: 'Fit, balance and repair fans',
        description:
          'Supply, installation and repair of ceiling and exhaust fans in Dubai. We mount new fans securely, replace old or noisy units, fix wobble and speed-control faults, and install bathroom and kitchen exhaust fans for proper ventilation.',
        features: ['Ceiling and exhaust fan fitting', 'Fix wobble and noise', 'Speed control and remote setup', 'Secure, balanced mounting'],
      },
      {
        id: 'emergency-electrician',
        image: '/images/services/electrician/emergency_electrician_repair.webp',
        alt: 'Emergency electrician in Dubai responding to a power failure at night',
        waHref: wa('Hi! I have an electrical emergency in Dubai and need an electrician now.'),
        title: 'Emergency Electrician & Fault Finding',
        tagline: '24/7 rapid electrical repairs',
        description:
          'Power failure, burning smell, sparking socket or total blackout? Our 24/7 emergency electricians in Dubai respond fast, trace the fault safely and get your power back on. We handle short circuits, tripping, and sudden outages any time of day or night.',
        features: ['24/7 rapid response', 'Power failure and outage repair', 'Short circuit and fault finding', 'Sparking and burning-smell call-outs'],
      },
    ],
  },
  whyUs: {
    heading: 'Why Choose Our Electricians in Dubai',
    intro:
      'Electrical work is not the place to cut corners. Our licensed electricians work safely, test everything and leave your home or office exactly as they found it, only safer.',
    reasons: [
      { icon: 'shield-check', title: 'Licensed and insured', text: 'Every electrician is qualified, background-checked and fully insured, working to DEWA and UAE safety standards on every job.' },
      { icon: 'lightning', title: 'Fast same-day call-outs', text: 'Most electrical faults are urgent. We offer same-day visits and 24/7 emergency cover across Dubai.' },
      { icon: 'gauge', title: 'Safe, tested workmanship', text: 'We test earthing, circuits and connections before we leave, and explain what we did in plain language.' },
      { icon: 'receipt', title: 'Clear, fixed pricing', text: 'Upfront quotes with no call-out surprises. You approve the price before we start the work.' },
      { icon: 'wrench', title: 'From small fixes to full wiring', text: 'One team for a single socket or a full villa rewire, so you always have a trusted electrician to call.' },
      { icon: 'broom', title: 'Clean and tidy', text: 'We protect your floors, clear up dust and debris, and make good after any chasing or fittings.' },
    ],
  },
  process: {
    heading: 'How We Handle Your Electrical Job in 4 Steps',
    steps: [
      { step: '1', title: 'Tell us the problem', text: 'Call or WhatsApp us with the fault or job. For emergencies we dispatch an electrician the same day, day or night.' },
      { step: '2', title: 'Diagnose and quote', text: 'Our electrician inspects, traces the cause and gives you a clear fixed price before any work begins.' },
      { step: '3', title: 'Safe repair or installation', text: 'We isolate the power, carry out the work to code, and use the correct rated cabling, breakers and fittings.' },
      { step: '4', title: 'Test, explain and tidy up', text: 'We test every circuit, confirm it is safe, walk you through what was done and leave the space clean.' },
    ],
  },
  testimonials: {
    heading: 'What Dubai Says About Our Electricians',
    reviews: [
      { name: 'Rashid M.', area: 'Mirdif', service: 'Emergency Electrician', text: 'Our power went out at 11pm and they had an electrician at our door within the hour. Found the fault, fixed it and the price was fair. Lifesavers.' },
      { name: 'Chloe B.', area: 'Dubai Marina', service: 'Chandelier Installation', text: 'They hung a heavy chandelier and installed LED spotlights across the apartment. Clean work, no mess, and everything on a dimmer as I asked.' },
      { name: 'Yousef A.', area: 'Al Barsha', service: 'DB Board Repair', text: 'Our breaker kept tripping for weeks. Their electrician diagnosed a faulty RCD, replaced it and labelled the whole board. No trips since.' },
      { name: 'Ann G.', area: 'The Springs', service: 'Rewiring', text: 'Rewired our older villa room by room with minimal disruption. Professional, tidy and everything tested and certified. Highly recommend.' },
    ],
  },
  areas: {
    heading: 'Electricians Near You, All Dubai Areas Covered',
    intro: 'Our electricians are based across the city, so a licensed electrician is never far away when you need one in Dubai.',
  },
  faq: {
    heading: 'Electrician Services in Dubai, Answered',
    intro: 'Call-outs, emergencies, safety and coverage. If your question is not here, WhatsApp us and a real person replies within minutes.',
    items: [
      { q: 'Do you offer an emergency electrician near me in Dubai?', a: 'Yes. We run a 24/7 emergency electrician service across every Dubai community for total blackouts, repeated tripping, sparking or scorched sockets, burning smells, water reaching a DB board and any fault that leaves a property unsafe. Emergencies are dispatched to the nearest available licensed electrician rather than queued behind scheduled jobs, which is why coverage across Dubai Marina, Business Bay, JVC, Mirdif, Arabian Ranches and the wider city matters. When you call, describe what you can see and smell and we will tell you immediately whether to isolate the main switch before we arrive, which is often the difference between a repair and a fire. We carry common MCBs, RCDs, sockets and cable on the van so most faults are fixed on the first visit rather than quoted and rebooked.' },
      { q: 'Can you rewire an older villa or run new wiring for a renovation?', a: 'Yes. We rewire older villas and apartments room by room so you can stay in the property, keeping power live in the areas we are not working on rather than shutting down the whole house for days. Older Dubai villas often have undersized circuits, missing earthing or a DB board that predates modern RCD protection, so we survey the existing installation first and show you what genuinely needs replacing versus what is still serviceable. For renovations and extensions we run new circuits for kitchens, air-conditioning, water heaters, outdoor lighting and EV points, sized to the actual load rather than guessed. Every installation is properly earthed, load-tested and completed to DEWA and UAE safety standards, and we test and demonstrate each circuit before handover.' },
      { q: 'Are your electricians licensed, insured and DEWA-approved?', a: 'Yes. Every electrician on our team is qualified, background-checked, uniformed and covered by full liability insurance, and Sama Alras Technical Services holds Dubai trade licence 923026. We work strictly to DEWA and UAE electrical safety standards on every job, whether that is replacing a single socket or rewiring an entire villa, because the same regulations apply to both and shortcuts on small jobs are where most later faults originate. Work is tested before we leave, not just visually checked, and the electrician explains in plain language what was wrong and what was done rather than handing over jargon. Electrical work is the one trade where an unlicensed contractor can cost far more than they save, so ask any Dubai electrician for their licence number before they start.' },
      { q: 'Why does my power keep tripping?', a: 'Repeated tripping is a protective device doing its job, so the real question is what it is protecting against. The most common causes we find in Dubai homes are an overloaded circuit where too many high-draw appliances share one line, a single faulty appliance with a failing element such as a water heater or washing machine, moisture reaching an outdoor socket or bathroom fitting during humid months, and an ageing MCB or RCD in the DB board that has become oversensitive. A useful first test is to unplug everything on the affected circuit and reset: if it holds, reintroduce appliances one at a time to identify the culprit. If it trips with nothing connected, the fault is in the fixed wiring and needs an electrician. Our technician traces the exact cause, repairs or replaces the faulty part and tests the board under load so it stops recurring.' },
      { q: 'Can you install chandeliers, LED lighting and ceiling fans?', a: 'Yes, and heavy fittings are where installation quality matters most. We mount large chandeliers into the structural slab with fixings rated well above the fitting weight rather than into a plasterboard ceiling, because a chandelier that pulls loose in a double-height villa entrance is a serious hazard. We install LED downlights, spotlights, cove and wall lighting, fit and balance ceiling and exhaust fans so they run without wobble or hum, and set up dimmers and smart lighting including app and voice control. Balancing is the step most installers skip and the reason so many ceiling fans rattle within a year. We can also replace old halogen and fluorescent fittings with energy-saving LEDs throughout a home or office, which noticeably reduces both the DEWA bill and the heat load on your air conditioning.' },
      { q: 'Do you provide electrical maintenance for homes and businesses?', a: 'Yes. As an established electrical contractor in Dubai we handle both one-off repairs and ongoing planned maintenance for villas, apartments, offices, retail units and warehouses. Planned maintenance typically means an annual inspection of the DB board, testing RCDs actually trip within their rated time, thermal checks on connections that have loosened through heat cycling, and inspection of outdoor and wet-area fittings where humidity does the most damage. Most electrical emergencies we attend were visible months earlier as a warm socket, a slightly discoloured faceplate or a breaker that tripped once and was reset without investigation. For businesses we schedule around your trading hours, including evenings and weekends, and provide written reports you can keep for insurance or landlord compliance.' },
      { q: 'A socket, switch or power point has stopped working, can you fix it?', a: 'Yes, this is one of our most common call-outs and usually a same-visit fix. A dead socket is most often caused by a tripped RCD, a loose connection behind the faceplate that has worked free through heat expansion, a failed socket in a ring circuit that has taken others down with it, or moisture ingress in a bathroom, kitchen or outdoor point. We test to find the actual fault rather than simply swapping the visible fitting, because replacing a socket that failed due to a loose upstream connection leaves the real problem in the wall. If you can see scorch marks, discolouration or smell burning, stop using that circuit and call us immediately rather than waiting, as those are signs of arcing. We repair or replace the fitting and wiring, then test the circuit under load before leaving.' },
    ],
  },
  finalCta: {
    heading: 'Need an electrician in Dubai? Call us now',
    text: 'Same-day visits, 24/7 emergency cover and fixed upfront pricing from licensed, insured electricians. Open 7 days a week.',
    whatsappLabel: 'WhatsApp Us',
    whatsappText: 'Hi! I need an electrician in Dubai. Can I get a quick quote?',
  },
  contact: {
    heading: 'Request an electrician',
    intro: 'Tell us the electrical fault or job and we reply within minutes with a fixed price and the earliest available slot.',
    messageLabel: 'What do you need help with?',
    messagePlaceholder: 'e.g. villa in The Springs, breaker keeps tripping and two sockets not working',
  },
}

const AC_DUCT = {
  slug: 'ac-duct-cleaning-services',
  path: '/services/ac-duct-cleaning-services',
  navLabel: 'AC Duct Cleaning',
  schemaType: 'HVACBusiness',
  serviceName: 'AC Duct Cleaning in Dubai',
  overview: {
    heading: 'Why AC Duct Cleaning Matters in Dubai’s Climate',
    paragraphs: [
      'In Dubai’s heat, your air conditioning runs almost all year, and every hour it pushes air through ducts that quietly collect dust, sand, damp and mould. Professional AC duct cleaning clears that build-up so the air your family breathes is clean and your system cools properly. Sama Alras Technical Services has delivered air conditioning duct cleaning for villas, apartments and offices across Dubai since 2013, with certified technicians, proper extraction equipment and a written guarantee on every job.',
      'Our AC duct cleaning service covers the whole system, not just the parts you can see: supply and return ducts, evaporator coils, AC vents, grilles, filters and drain trays. This complete AC and duct cleaning removes the dust, allergens and bacteria that cause weak airflow, musty smells and higher DEWA bills, then we sanitise everything so the air stays fresh for longer.',
      'Searching for AC duct cleaning near me? Our aircon duct cleaning teams cover every community in Dubai, including Dubai Marina, Downtown Dubai, Business Bay, Jumeirah, Palm Jumeirah, Arabian Ranches, Dubai Hills Estate, JVC, JLT, The Springs, Mirdif and Al Barsha, and most homes are finished the same day. As one of the most trusted names for duct cleaning in Dubai, we also provide painting, SPC flooring and licensed electrical work, so one team can look after your whole property.',
    ],
    links: [
      { label: 'Electrician Services', to: '/services/electrician-services' },
      { label: 'Painting Services', to: '/services/painting-services' },
      { label: 'SPC & Flooring Services', to: '/services/spc-flooring-services' },
      { label: 'Plumbing Services', to: '/services/plumbing-services' },
      { label: 'All Services', to: '/' },
    ],
  },
  card: {
    title: 'AC Duct Cleaning',
    tagline: 'Ducts, coils, vents & sanitising',
    description:
      'Professional AC duct cleaning in Dubai for villas, apartments and offices: full duct, coil, AC vent and filter cleaning plus anti-bacterial sanitising. Cleaner air, better cooling and a written guarantee on every job.',
    image: '/images/services/ac-duct-cleaning/vent-grill-cleaning.webp',
    alt: 'Sama Alras technician cleaning a ceiling AC unit and duct in a Dubai home',
    features: ['Full duct, coil & vent cleaning', 'Anti-bacterial duct sanitising', 'Cleaner air & better cooling', 'Same-day service across Dubai'],
  },
  team: {
    heading: 'The AC duct cleaning team',
    lead: 'Sealed extraction, not dust pushed around the room',
    text: 'Our AC duct cleaning technicians work with sealed extraction equipment so the sand and dust that Dubai systems collect actually leaves the property instead of being blown back through your rooms. They clean supply and return ducts, evaporator and condenser coils, AC vents, grilles and filters, clear the drain tray that causes most ceiling water stains, then fog the system with an anti-bacterial sanitiser. They photograph the ducts before and after, because otherwise it is invisible work inside a ceiling.',
  },
  meta: {
    title: 'AC Duct Cleaning in Dubai | Duct, Coil & Vent Cleaning Service',
    description:
      'Professional AC duct cleaning in Dubai for villas, apartments and offices. Sama Alras cleans ducts, coils, AC vents and filters, then sanitises the system for cleaner air and better cooling. Searching for AC duct cleaning near me? Free quotes and same-day service. Call or WhatsApp now.',
    keywords:
      'ac duct cleaning, ac duct cleaning in dubai, ac duct cleaning dubai, air conditioning duct cleaning, ac duct cleaning near me, ac vent cleaning, ac air duct cleaning, ac and duct cleaning, ac vent duct cleaning, aircon duct cleaning, ac duct cleaning service, air vent cleaning near me, ac duct cleaning company in dubai, duct cleaning dubai, air duct cleaning dubai, duct cleaning in dubai, ac cleaning service dubai, ac duct cleaning services dubai, ac duct cleaning service dubai, best ac duct cleaning dubai, ac duct cleaning service in dubai, ac coil cleaning dubai, ac duct sanitisation dubai, ac filter replacement dubai, commercial duct cleaning dubai, ac duct cleaning dubai marina, ac duct cleaning jvc, ac duct cleaning business bay, ac duct cleaning arabian ranches',
  },
  hero: {
    h1Pre: 'AC Duct Cleaning in',
    h1Highlight: 'Dubai',
    subtitle: 'Professional Air Conditioning Duct Cleaning in Dubai Near You',
    intro:
      'Complete AC duct cleaning in Dubai for villas, apartments and offices. We clean ducts, coils, AC vents and filters, then sanitise the whole system for cleaner air, fresher rooms and better cooling. Searching for AC duct cleaning near me? Same-day teams cover every community in the city.',
    image: '/images/services/ac-duct-cleaning/hero.webp',
    imageAlt: 'Professional Sama Alras technician cleaning a ceiling air conditioning duct in a modern Dubai apartment',
    panelHeading: 'Why Dubai chooses us',
    rating: '4.9/5 from 1,200+ reviews',
    badge: 'Same-day AC duct cleaning teams available today',
    whatsappText: 'Hi! I would like a free quote for AC duct cleaning in Dubai.',
  },
  services: {
    heading: 'Our AC Duct Cleaning Services in Dubai',
    intro:
      'One expert team for every part of your air conditioning system. Our AC duct cleaning services in Dubai combine powerful extraction, coil and AC vent cleaning and anti-bacterial sanitising, with free inspection and a written guarantee on every job.',
    items: [
      {
        id: 'ac-duct-cleaning',
        image: '/images/services/ac-duct-cleaning/ac-duct-cleaning-for-apartments-villas.webp',
        alt: 'Technician cleaning open air conditioning ducts with a brush and vacuum in a Dubai villa',
        waHref: wa('Hi! I would like a free quote for AC duct cleaning in Dubai.'),
        title: 'AC Duct Cleaning for Villas & Apartments',
        tagline: 'Full ducts cleaned and extracted',
        description:
          'Complete air conditioning duct cleaning for homes in Dubai. We open your supply and return ducts, brush and vacuum out years of dust, sand and debris with sealed extraction equipment, and leave the airflow strong and the air clean. The core AC duct cleaning service for villas, apartments and townhouses.',
        features: ['Supply and return duct cleaning', 'Sealed dust and debris extraction', 'Stronger airflow and cooling', 'Villas, apartments and townhouses'],
      },
      {
        id: 'ac-coil-cleaning',
        image: '/images/services/ac-duct-cleaning/ac-coil-condenser-cleaning.webp',
        alt: 'Technician cleaning an air conditioning evaporator coil with foam cleaner in Dubai',
        waHref: wa('Hi! I would like a free quote for AC coil cleaning in Dubai.'),
        title: 'AC Coil & Evaporator Cleaning',
        tagline: 'Clean coils, colder air',
        description:
          'Dirty evaporator and condenser coils are the number one reason an AC stops cooling in Dubai. We deep-clean the coils with safe foam cleaners, clear the drain line and tray, and restore proper heat transfer, so your unit cools faster and uses less electricity.',
        features: ['Evaporator and condenser coils', 'Safe foam coil cleaning', 'Drain line and tray flush', 'Better cooling, lower bills'],
      },
      {
        id: 'ac-vent-grille-cleaning',
        image: '/images/services/ac-duct-cleaning/vent-grill-cleaning.webp',
        alt: 'Technician removing and cleaning a white AC vent grille from an apartment ceiling in Dubai',
        waHref: wa('Hi! I would like a free quote for AC vent cleaning in Dubai.'),
        title: 'AC Vent, Grille & Register Cleaning',
        tagline: 'Spotless, dust-free vents',
        description:
          'Black marks and dust around your AC vents mean it is time for AC vent cleaning. We remove, wash and refit every grille, diffuser and register, then clean the vent duct behind it. If you are searching for air vent cleaning near me, this is the fast, visible refresh that makes rooms feel cleaner instantly.',
        features: ['Vent, grille and register cleaning', 'Remove black dust marks', 'AC vent duct cleaning behind grilles', 'Refit and reseal properly'],
      },
      {
        id: 'ac-duct-sanitization',
        image: '/images/services/ac-duct-cleaning/ac-duct-sanitisation.webp',
        alt: 'Technician fogging and sanitising air conditioning ducts in a Dubai home',
        waHref: wa('Hi! I would like a free quote for AC duct sanitisation in Dubai.'),
        title: 'AC Duct Sanitisation & Disinfection',
        tagline: 'Anti-bacterial, anti-mould',
        description:
          'Cleaning removes the dust, sanitising removes what you cannot see. After the AC and duct cleaning we fog the system with a safe, hospital-grade anti-bacterial and anti-mould treatment that kills germs, clears musty smells and keeps the air healthy for your family, pets and staff.',
        features: ['Hospital-grade anti-bacterial fog', 'Kills mould, germs and odours', 'Safe for children and pets', 'Fresher, healthier indoor air'],
      },
      {
        id: 'ac-servicing-filter',
        image: '/images/services/ac-duct-cleaning/dubai_ac_service.webp',
        alt: 'Technician replacing a clean air conditioning filter in a ceiling unit in Dubai',
        waHref: wa('Hi! I would like a free AC cleaning service in Dubai.'),
        title: 'AC Servicing & Filter Replacement',
        tagline: 'Keep your AC running right',
        description:
          'Pair your duct cleaning with a full AC cleaning service in Dubai. We wash or replace clogged filters, check gas pressure, test the thermostat and tighten connections, so your air conditioning runs efficiently through the summer. Ideal as a regular aircon duct cleaning and maintenance visit.',
        features: ['Filter cleaning and replacement', 'Gas pressure and thermostat check', 'Efficiency and safety inspection', 'Regular maintenance plans'],
      },
      {
        id: 'commercial-duct-cleaning',
        image: '/images/services/ac-duct-cleaning/commercial_duct_cleaning.webp',
        alt: 'Technicians cleaning large commercial HVAC ducts in a Dubai office building',
        waHref: wa('Hi! I would like a quote for commercial AC duct cleaning in Dubai.'),
        title: 'Commercial & Office AC Duct Cleaning',
        tagline: 'Offices, retail and HVAC',
        description:
          'A trusted AC duct cleaning company in Dubai for businesses. We clean large HVAC ductwork and AHUs in offices, shops, restaurants, clinics and warehouses, working after hours or on weekends so you stay open. Scheduled duct cleaning that keeps staff healthy and meets building management standards.',
        features: ['Offices, retail, clinics and F&B', 'HVAC and AHU duct cleaning', 'After-hours and weekend work', 'Scheduled maintenance contracts'],
      },
    ],
  },
  whyUs: {
    heading: 'Why We’re Rated the Best AC Duct Cleaning Company in Dubai',
    intro:
      'Anyone can wipe a vent. Actually cleaning and sanitising a full duct system in Dubai’s dust and humidity, safely and thoroughly, takes proper equipment and trained technicians.',
    reasons: [
      { icon: 'shield-check', title: 'Certified, insured technicians', text: 'Every technician is trained, background-checked and fully insured, following proper HVAC hygiene standards on every AC duct cleaning job in Dubai.' },
      { icon: 'sparkle', title: 'Cleaner air you can feel', text: 'We remove dust, sand, allergens and mould from the whole system, so rooms smell fresh, dust settles slower and your family breathes cleaner air.' },
      { icon: 'gauge', title: 'Better cooling, lower bills', text: 'Clean ducts and coils let your AC cool faster and run less, which cuts your DEWA bill and takes strain off the compressor.' },
      { icon: 'drop', title: 'Deep sanitising, not just dusting', text: 'After cleaning we fog the ducts with a safe anti-bacterial, anti-mould treatment, so germs and musty smells are gone, not just hidden.' },
      { icon: 'receipt', title: 'Fixed, transparent pricing', text: 'A free inspection and a clear written quote before we start. The price you approve is the price you pay, with no surprise extras.' },
      { icon: 'clock', title: 'Same-day, tidy service', text: 'Same-day slots across Dubai, floors and furniture protected, and a spotless clean-up. Most homes are finished in a single visit.' },
    ],
  },
  process: {
    heading: 'How We Clean Your AC Ducts in 4 Steps',
    steps: [
      { step: '1', title: 'Free inspection and quote', text: 'Call or WhatsApp us. We inspect your ducts, coils and vents, then send a fixed written quote, often the same day, with no obligation.' },
      { step: '2', title: 'Protect and open up', text: 'We cover your floors and furniture, then safely access the ducts, remove the AC vents and grilles and set up sealed extraction equipment.' },
      { step: '3', title: 'Deep clean and sanitise', text: 'We brush and vacuum the ducts, clean the coils, drain tray and filters, wash the grilles, then fog the system with anti-bacterial sanitiser.' },
      { step: '4', title: 'Test, refit and hand over', text: 'We refit every vent, test the airflow and cooling, walk you through the results and hand over with a written service guarantee.' },
    ],
  },
  testimonials: {
    heading: 'What Dubai Says About Our AC Duct Cleaning',
    reviews: [
      { name: 'Hina R.', area: 'Dubai Marina', service: 'AC Duct Cleaning', text: 'Booked AC duct cleaning after searching “ac duct cleaning near me”. The team pulled an unbelievable amount of dust out of our ducts, sanitised everything and the flat smells fresh again. Airflow is so much stronger.' },
      { name: 'Michael D.', area: 'Arabian Ranches', service: 'Coil & Duct Cleaning', text: 'Our villa AC was barely cooling. They cleaned the coils and ducts, and the difference was instant, colder air and a lower DEWA bill the next month. Genuinely the best AC duct cleaning in Dubai we’ve used.' },
      { name: 'Sana K.', area: 'Business Bay', service: 'Office AC Duct Cleaning', text: 'They cleaned the HVAC ducts across our whole office over a weekend with zero disruption. Professional AC duct cleaning company, fully insured and left everything spotless.' },
      { name: 'George P.', area: 'JVC', service: 'AC Vent Cleaning & Sanitising', text: 'The black marks around our AC vents were awful. After their AC vent cleaning and sanitising, the grilles look new and the musty smell is completely gone. Highly recommend.' },
    ],
  },
  areas: {
    heading: 'AC Duct Cleaning Near You, All Dubai Areas Covered',
    intro: 'Our aircon duct cleaning teams are stationed across the city, so professional AC duct cleaning near you is never far away.',
  },
  faq: {
    heading: 'AC Duct Cleaning in Dubai, Answered',
    intro: 'Timelines, health benefits, coverage and pricing. If your question is not here, WhatsApp us and a real person replies within minutes.',
    items: [
      { q: 'How often should I get AC duct cleaning in Dubai?', a: 'For most Dubai homes, every 12 to 18 months. Dubai is harder on air conditioning than almost any other climate: fine construction and desert sand gets everywhere, systems run close to year-round, and summer humidity gives mould somewhere damp to establish inside ducts and drain trays. Clean more often, roughly every 6 to 12 months, if anyone in the household has allergies or asthma, if you have pets, if you live near ongoing construction, or if the villa sat empty over summer with the AC off. Offices, clinics, nurseries and restaurants generally need it every 6 to 12 months because of occupancy and, in food premises, grease. The practical signs it is overdue are weak airflow, musty smells when the AC starts, visible dust streaking around vents and unexplained rises in your DEWA bill.' },
      { q: 'Do you offer AC duct cleaning near me across Dubai?', a: 'Yes. Our AC duct cleaning teams cover every community in Dubai, including Dubai Marina, Downtown Dubai, Business Bay, Jumeirah, Palm Jumeirah, Arabian Ranches, Dubai Hills Estate, JVC, JLT, The Springs, Mirdif, Al Barsha, Motor City, Damac Hills and Silicon Oasis, for villas, apartments, townhouses and commercial premises. If you are searching for AC duct cleaning near me or air vent cleaning near me, send us your location and the number of AC units on WhatsApp and we will confirm coverage and a fixed price straight away, often with a same-day slot. There is no travel surcharge for any Dubai community and no minimum number of units. The inspection before we quote is free and carries no obligation to book.' },
      { q: 'What does your AC duct cleaning service include?', a: 'The complete service covers the whole system rather than only the parts you can see. We clean the supply and return ducts along their full accessible length, the evaporator and condenser coils, the AC vents, grilles and registers, the filters, and the drain tray and condensate line where blockages cause the ceiling water stains most people mistake for a roof leak. Debris is removed with sealed extraction equipment so it leaves the property rather than being blown into your rooms, then the whole system is treated with an anti-bacterial, anti-mould sanitiser. Grilles are washed rather than wiped in place. Filter replacement and a full AC service, including gas pressure check and thermostat test, can be added on request. We show you the ducts before and after, and issue a written guarantee.' },
      { q: 'How long does AC duct cleaning take?', a: 'A typical one to two bedroom apartment takes two to four hours, a larger apartment around half a day, and a villa half a day to a full day depending on how many air handling units it has, the length of the duct runs and how long it has been since the system was last cleaned. Ducts that have never been professionally cleaned hold far more sand and dust than a maintained system and take noticeably longer to extract properly. Access matters too: ceiling voids with limited hatches slow the work down, and we would rather take the extra time than clean only the sections that are easy to reach. Nearly all homes are finished in a single same-day visit, and you can run the AC again immediately afterwards. We confirm the timing in writing after the free inspection.' },
      { q: 'Will duct cleaning really improve air quality and cooling?', a: 'Yes, and the effect is usually noticeable within a day. Removing built-up dust, sand, allergens and mould from your ducts, coils and drain tray means the air being circulated is no longer passing over that build-up on every cycle, so musty smells clear and households with allergies or asthma typically report an immediate difference. The cooling benefit comes mainly from the coils rather than the ducts: a coil coated in dust cannot transfer heat efficiently, so the system runs longer to reach the same temperature. Clearing it restores airflow and lets the unit reach the set temperature faster and cycle off sooner, which lowers your DEWA bill and reduces wear on the compressor. Blocked drain trays are also the most common cause of ceiling water stains, which cleaning prevents.' },
      { q: 'Are you a licensed AC duct cleaning company in Dubai?', a: 'Yes. Sama Alras Technical Services is a licensed Dubai company holding trade licence 923026, and we have delivered air conditioning duct cleaning across the emirate since 2013. Our technicians are trained, background-checked, uniformed and fully insured, and we use sealed extraction equipment rather than blowing debris around the room, which is the main difference between a professional duct clean and a cheap one. Every job is backed by a written service guarantee rather than a verbal promise. We also show you the ducts before and after so you can see what came out, because duct cleaning is otherwise invisible work inside a ceiling and you deserve evidence of what you paid for. Ask any Dubai provider for their licence number and their extraction method before booking.' },
    ],
  },
  finalCta: {
    heading: 'Get your free AC duct cleaning quote today',
    text: 'Free inspection, fixed written quote and same-day teams across Dubai. Cleaner air, better cooling and a written guarantee. Open 7 days a week, 8am-10pm.',
    whatsappLabel: 'WhatsApp Us',
    whatsappText: 'Hi! I would like a free AC duct cleaning quote in Dubai.',
  },
  contact: {
    heading: 'Request a free AC duct cleaning quote',
    intro: 'Tell us your property and how many AC units you have, and we reply within minutes with a fixed price and the earliest available slot.',
    messageLabel: 'What do you need cleaned?',
    messagePlaceholder: 'e.g. 2-bedroom apartment in Dubai Marina, 3 AC units, ducts and vents, sanitising too',
  },
}

const PLUMBING = {
  slug: 'plumbing-services',
  path: '/services/plumbing-services',
  navLabel: 'Plumbing',
  schemaType: 'Plumber',
  serviceName: 'Plumbing Services in Dubai',
  overview: {
    heading: 'Trusted Plumbing Services in Dubai, Seven Days a Week',
    paragraphs: [
      'A leaking pipe or a blocked drain does not wait for office hours, and in Dubai’s hard water and summer heat a small drip turns into a damaged ceiling faster than most people expect. Sama Alras Technical Services has handled plumbing services in Dubai since 2013, with licensed plumbers, proper leak-detection equipment and fixed written pricing before any work starts.',
      'Our plumbing services cover everything a home or business actually calls for: emergency plumbing, leak detection and pipe repair, blocked drains and sewers, kitchen sink drain problems, water heater repair and installation, and full bathroom and sanitary ware fitting. Every plumber in our team is employed by us, insured and equipped to finish the job on the first visit rather than quoting a return trip for parts.',
      'Searching for plumbers near me? Our teams cover every community in Dubai, including Dubai Marina, Downtown Dubai, Business Bay, Jumeirah, Palm Jumeirah, Arabian Ranches, Dubai Hills Estate, JVC, JLT, The Springs, Mirdif and Al Barsha, with same-day slots and 24/7 emergency call-outs. As an established plumbing company in Dubai we also handle painting, SPC flooring, licensed electrical work and AC duct cleaning, so one trusted team can look after the whole property.',
    ],
    links: [
      { label: 'Electrician Services', to: '/services/electrician-services' },
      { label: 'AC Duct Cleaning', to: '/services/ac-duct-cleaning-services' },
      { label: 'SPC & Flooring Services', to: '/services/spc-flooring-services' },
      { label: 'Painting Services', to: '/services/painting-services' },
      { label: 'All Services', to: '/' },
    ],
  },
  card: {
    title: 'Plumbing Services',
    tagline: 'Leaks, drains, heaters & emergencies',
    description:
      'Licensed plumbers in Dubai for emergency leaks, blocked drains, kitchen sink problems, water heater repair and full bathroom installation. Same-day service, fixed written pricing and 24/7 emergency cover.',
    image: '/images/services/plumber/dubai_bathroom_sanitary_installation.webp',
    alt: 'Sama Alras plumber fitting a chrome mixer tap to a white basin in a marble Dubai bathroom',
    features: ['24/7 emergency plumber', 'Leak detection & pipe repair', 'Blocked drains & kitchen sinks', 'Water heater repair & installation'],
  },
  team: {
    heading: 'The plumbing team',
    lead: 'Leak finders who open one wall, not four',
    text: 'Our plumbers in Dubai are employed by us rather than day-hired, because somebody working in your ceiling void or under your kitchen units needs to be accountable. They locate concealed and slab leaks with acoustic and thermal equipment before cutting anything, clear blocked drains and kitchen sink lines properly rather than punching a hole through the grease, and handle water heater repair, toilets, mixers and full bathroom plumbing. They carry the 24/7 emergency rota alongside the electricians.',
  },
  meta: {
    title: 'Plumbing Service in Dubai | Fast Same-Day Plumber',
    description:
      'Plumbing service in Dubai for leaks, blocked drains, kitchen sinks and water heater repair. Licensed plumbers, same-day slots and 24/7 emergency plumber cover across Dubai. Free fixed quotes. Call or WhatsApp now.',
    keywords:
      'plumber, plumbers near me, plumbers close to me, near me plumber, plumbing services, emergency plumber, emergency plumber near me, plumbing services near me, water heater repair near me, kitchen sink drain, plumber in dubai, plumbing services dubai, emergency plumber dubai, water heater repair dubai, water heater repair in dubai, plumbing company dubai',
  },
  hero: {
    h1Pre: 'Plumbing Service in Dubai',
    h1Highlight: '– Fast Same-Day Service',
    subtitle:
      'Get fast, reliable plumbing solutions for leaks, blocked drains, water heaters, kitchen sinks and emergency plumbing problems across Dubai.',
    intro:
      'Licensed plumbers in Dubai, available seven days a week with 24/7 emergency cover. Searching for plumbers near me? We arrive with the parts, diagnose properly and quote a fixed price before we start.',
    image: '/images/services/plumber/dubai_plumber.webp',
    imageAlt: 'Sama Alras plumber tightening a chrome basin trap with a pipe wrench in a Dubai apartment bathroom, city skyline through the window',
    panelHeading: 'Why Dubai chooses us',
    rating: '4.9/5 from 1,200+ reviews',
    badge: 'Emergency plumbers on call 24/7 across Dubai',
    whatsappText: 'Hi! I need a plumber in Dubai. Can I get a free quote?',
  },
  services: {
    heading: 'Our Plumbing Services in Dubai',
    intro:
      'One licensed team for every plumbing job in Dubai, from a dripping tap to a flooded bathroom at 2am. Every call-out includes a proper diagnosis, a fixed written price before work starts and a workmanship warranty.',
    items: [
      {
        id: 'emergency-plumber',
        image: '/images/services/plumber/dubai_emergency_plumber_24_7.webp',
        alt: 'Emergency plumber in Dubai tightening a dripping chrome basin trap by work light, tool bag of brass fittings and flexible hoses beside him',
        waHref: wa('Hi! I need an emergency plumber in Dubai right now.'),
        title: 'Emergency Plumber in Dubai, 24/7',
        tagline: 'Burst pipes and floods, any hour',
        description:
          'Burst pipe, overflowing toilet or water coming through a ceiling? Our emergency plumber teams answer 24 hours a day, seven days a week, and are dispatched to the nearest available plumber rather than queued behind scheduled jobs. If you are searching for an emergency plumber near me at midnight, we will talk you through isolating the water on the phone while we are on the way.',
        features: ['24/7 emergency call-outs', 'Burst pipes and mains leaks', 'Overflowing toilets and floods', 'Nearest available plumber dispatched'],
      },
      {
        id: 'leak-detection-pipe-repair',
        image: '/images/services/plumber/dubai_leak_detection_service.webp',
        alt: 'Plumber using acoustic headphones and a thermal imaging camera to trace a concealed water leak inside a wall of a Dubai villa',
        waHref: wa('Hi! I think I have a hidden water leak in Dubai. Can you check it?'),
        title: 'Leak Detection & Pipe Repair',
        tagline: 'Find it without breaking walls',
        description:
          'Damp patches, a rising water bill or the sound of running water with every tap closed usually means a concealed leak. We locate it with acoustic and thermal leak-detection equipment before opening anything, so the repair is one neat access point instead of a demolished wall, then repair or repipe and make good.',
        features: ['Acoustic and thermal leak detection', 'Concealed and slab leaks', 'Copper, PPR and PEX pipe repair', 'Minimal cutting, made good after'],
      },
      {
        id: 'blocked-drain-cleaning',
        image: '/images/services/plumber/dubai_drain_sewer_cleaning.webp',
        alt: 'Plumber feeding a CCTV drain camera into a bathroom floor drain in Dubai, pipe interior shown on the monitor with a jetting machine behind',
        waHref: wa('Hi! I have a blocked drain in Dubai. Can I get a quote?'),
        title: 'Blocked Drain & Sewer Cleaning',
        tagline: 'Cleared properly, not just poked',
        description:
          'Slow-draining showers, gurgling toilets and bad smells are all the same story: a partial blockage that will become a full one. We clear blocked drains and sewer lines with drain machines and high-pressure jetting, then camera the line so you know whether it was grease, hair, wipes or a broken pipe causing it.',
        features: ['Drain machine and jetting', 'Showers, floor drains and toilets', 'Main sewer and stack lines', 'CCTV camera inspection available'],
      },
      {
        id: 'kitchen-sink-drain',
        image: '/images/services/plumber/dubai_kitchen_sink_plumbing.webp',
        alt: 'Plumber replacing the waste trap under a double kitchen sink in a modern Dubai kitchen, spare traps and pipes in the open tool bag',
        waHref: wa('Hi! I have a kitchen sink drain problem in Dubai.'),
        title: 'Kitchen Sink & Drain Plumbing',
        tagline: 'Blockages, traps and leaks',
        description:
          'The kitchen sink drain is the hardest-working waste pipe in any home and the first to block with grease and food waste. We clear the blockage, replace failed traps and waste pipes, stop the leak in the cupboard underneath, and fit or reconnect sinks, mixers and waste disposal units.',
        features: ['Kitchen sink drain unblocking', 'Trap and waste pipe replacement', 'Under-sink leak repairs', 'Sink, mixer and disposal fitting'],
      },
      {
        id: 'water-heater-repair',
        image: '/images/services/plumber/dubai_water_heater_repair.webp',
        alt: 'Plumber servicing the valve and copper pipework on a white water heater cylinder in a Dubai apartment',
        waHref: wa('Hi! I need water heater repair in Dubai. Can I get a quote?'),
        title: 'Water Heater Repair & Installation',
        tagline: 'No hot water, fixed today',
        description:
          'No hot water, lukewarm water or a heater leaking into the ceiling void are the three calls we get most. Our water heater repair service in Dubai covers thermostats, heating elements, tripping breakers, pressure valves and tank leaks, and where a unit is beyond economical repair we supply and install a replacement the same day.',
        features: ['Thermostat and element replacement', 'Leaking and tripping heaters', 'Descaling for Dubai hard water', 'Supply and install replacements'],
      },
      {
        id: 'bathroom-sanitary-installation',
        image: '/images/services/plumber/dubai_bathroom_sanitary_installation.webp',
        alt: 'Plumber fitting a chrome mixer tap to a basin in a luxury Dubai bathroom, wrenches and fittings laid out on a work mat',
        waHref: wa('Hi! I need bathroom or sanitary ware installation in Dubai.'),
        title: 'Bathroom, Toilet & Sanitary Ware Installation',
        tagline: 'Full fit-outs and swap-outs',
        description:
          'Running toilets, dripping mixers and tired bathrooms. We repair or replace toilets, cisterns, flush valves, taps, mixers, showers, bidet sprays and basins, and handle complete bathroom plumbing for renovations, working alongside our own tiling, painting and electrical teams on a single schedule.',
        features: ['Toilet, cistern and flush valve repair', 'Taps, mixers and shower fitting', 'Basins, bidet sprays and traps', 'Full bathroom renovation plumbing'],
      },
    ],
  },
  whyUs: {
    heading: 'Why Dubai Calls Us First for Plumbing',
    intro:
      'Anyone can tighten a fitting. Diagnosing a concealed leak correctly, clearing a drain so it stays clear, and doing it without wrecking your finishes is what separates a plumbing company from a handyman with a wrench.',
    reasons: [
      { icon: 'clock', title: '24/7 emergency response', text: 'Burst pipes and floods do not keep office hours. Our emergency plumber teams answer around the clock and dispatch the nearest available licensed plumber, not the next one in the queue.' },
      { icon: 'shield-check', title: 'Licensed and fully insured', text: 'A licensed Dubai company with employed, background-checked plumbers and full liability insurance, so your property is covered from the moment we walk in.' },
      { icon: 'drop', title: 'Proper leak detection', text: 'We find concealed leaks with acoustic and thermal equipment before cutting anything, so you get one tidy access point instead of a wall opened up on guesswork.' },
      { icon: 'receipt', title: 'Fixed price before we start', text: 'You get a clear written price once we have diagnosed the fault. No hourly meter running, no parts markup revealed at the end and no surprise call-out inflation.' },
      { icon: 'wrench', title: 'Fixed on the first visit', text: 'Our vans carry the traps, valves, elements and fittings that Dubai properties actually use, so the vast majority of jobs are finished without a second appointment.' },
      { icon: 'broom', title: 'Clean, tidy handover', text: 'Floors protected, cupboards emptied and refilled, and the work area left cleaner than we found it. Drain work especially should not leave a mess behind.' },
    ],
  },
  process: {
    heading: 'How Our Plumbing Service Works, Step by Step',
    steps: [
      { step: '1', title: 'Call or WhatsApp us', text: 'Describe the problem and send a photo if you can. For emergencies we advise you on the phone how to isolate the water while a plumber is dispatched.' },
      { step: '2', title: 'Diagnose on site', text: 'We find the actual cause, using leak detection or a drain camera where needed, rather than treating the symptom and being called back next month.' },
      { step: '3', title: 'Fixed quote, then fix', text: 'You approve a clear written price before any work begins. We then carry out the repair with the parts already on the van wherever possible.' },
      { step: '4', title: 'Test, tidy and warranty', text: 'We pressure-test the repair, run the drain, clean the area and hand over with a written workmanship warranty on the work carried out.' },
    ],
  },
  testimonials: {
    heading: 'What Dubai Says About Our Plumbers',
    reviews: [
      { name: 'Ahmed K.', area: 'Dubai Marina', service: 'Emergency Plumber', text: 'Pipe burst under the kitchen at 1am and water was everywhere. Searched emergency plumber near me and they answered instantly, talked me through the stopcock and had someone here in 40 minutes. Absolute lifesavers.' },
      { name: 'Laura B.', area: 'Arabian Ranches', service: 'Leak Detection', text: 'Our water bill had doubled with no visible leak. They traced it to a slab pipe with acoustic gear, opened one small section of floor and repaired it. Two other plumbers had wanted to dig up the whole hallway.' },
      { name: 'Vikram S.', area: 'JVC', service: 'Water Heater Repair', text: 'No hot water for three days. They diagnosed a failed element and thermostat, had both on the van and it was working within the hour. Fair fixed price, no upselling me a new heater I did not need.' },
      { name: 'Noura A.', area: 'Business Bay', service: 'Blocked Drain & Kitchen Sink', text: 'Kitchen sink drain kept backing up and the smell was awful. They jetted the line, showed me the camera footage of the grease build-up and it has been perfect since. Properly professional plumbing company.' },
    ],
  },
  areas: {
    heading: 'Plumbers Near You, All Dubai Areas Covered',
    intro: 'Our plumbers are stationed across the city rather than run from one depot, so a licensed plumber near you is never far away, day or night.',
  },
  faq: {
    heading: 'Plumbing Services in Dubai, Answered',
    intro: 'Response times, pricing, emergencies and coverage. If your question is not here, WhatsApp us and a real person replies within minutes.',
    items: [
      { q: 'How fast can you send an emergency plumber in Dubai?', a: 'For genuine emergencies such as a burst pipe, a flooding bathroom or water reaching electrics, we aim to have a plumber with you within 30 to 90 minutes depending on your community and the time of day, and our line is answered 24 hours a day, seven days a week. Emergency calls are dispatched to the nearest available licensed plumber rather than added to the end of the scheduled work list, which is the practical difference between a real emergency service and a company that simply advertises one. While the plumber is travelling we will talk you through isolating your water at the stopcock or the meter, because stopping the flow in the first two minutes usually saves far more damage than anything we can do on arrival. Send your location on WhatsApp for the fastest dispatch.' },
      { q: 'How much do plumbing services in Dubai cost?', a: 'Every job is quoted at a fixed written price before any work begins, so you approve the number first and there is no hourly meter running in the background. The price depends on the actual fault rather than a flat call-out fee: clearing a blocked kitchen sink drain, replacing a water heater element, repairing a concealed slab leak and re-piping a bathroom are very different pieces of work. What we can promise is that the diagnosis is free of guesswork, the quote separates labour from parts, and the figure does not change once you have accepted it unless we find something genuinely different behind the wall, in which case we stop and re-quote before continuing. Emergency and out-of-hours call-outs are priced transparently and confirmed on the phone before we are dispatched.' },
      { q: 'Do you cover plumbers near me across all Dubai areas?', a: 'Yes. Our plumbing teams cover every community in Dubai, including Dubai Marina, Downtown Dubai, Business Bay, Jumeirah, Palm Jumeirah, Arabian Ranches, Dubai Hills Estate, JVC, JLT, The Springs, Mirdif, Al Barsha, Motor City, Damac Hills, Deira, Bur Dubai, International City, Silicon Oasis, Town Square and Emirates Hills. That covers villas, apartments, townhouses, offices and retail units, and there is no travel surcharge for any Dubai community and no minimum job size. Because our plumbers are stationed around the city rather than dispatched from a single depot, same-day slots and genuine emergency response times are realistic rather than aspirational. If you are unsure whether we reach your building or compound, send the location on WhatsApp and we will confirm coverage and the earliest available slot immediately.' },
      { q: 'What causes a kitchen sink drain to keep blocking?', a: 'In Dubai kitchens it is almost always cooking grease and oil rather than solid food. Hot oil goes down the drain as a liquid, then cools in the horizontal waste run and sets against the pipe wall, and every subsequent wash adds another layer until the opening narrows to nothing. Coffee grounds, rice, flour and fibrous vegetable waste bind to that grease and accelerate it. A plunger or a supermarket chemical will punch a hole through the middle of that build-up, which is why the sink drains for a week and then blocks again in the same place. We clear the pipe wall properly with a drain machine or jetting, camera the line to confirm it is genuinely clear, and check the trap and waste for the sagging or poor falls that cause repeat blockages in the first place.' },
      { q: 'Should I repair or replace my water heater?', a: 'Repair is usually the right call when the tank itself is sound and the fault is a thermostat, a heating element, a pressure relief valve or a tripping breaker, all of which are relatively inexpensive parts we carry on the van and can normally fit within the same visit. Replacement is the honest recommendation when the tank is leaking, because a corroded cylinder cannot be repaired reliably and a slow leak in a ceiling void causes far more damage than the heater is worth. Age matters too: Dubai’s hard water scales elements heavily, and once a unit is past roughly eight to ten years, repeated repairs usually cost more than a new heater. We will tell you plainly which situation you are in, show you the failed part, and never quote a replacement for a fault a part can fix.' },
      { q: 'Are your plumbers licensed and insured?', a: 'Yes. Sama Alras Technical Services is a licensed Dubai company holding trade licence 923026, and every plumber on the team is employed by us, background-checked, uniformed and covered by full liability insurance, so you are protected if anything is damaged while we work. We do not day-hire labour for plumbing call-outs, because a plumber working in your ceiling void or under your kitchen units needs to be accountable to somebody. Work is carried out to UAE plumbing and building standards, water connections are pressure-tested before we sign off, and every job carries a written workmanship warranty printed on the invoice rather than promised verbally. We are happy to provide the licence number and insurance details before you book, and we would encourage you to ask any Dubai plumbing company for the same.' },
    ],
  },
  finalCta: {
    heading: 'Need a plumber in Dubai today?',
    text: 'Leaks, blocked drains, kitchen sinks, water heaters and emergencies. Licensed plumbers, fixed written pricing and 24/7 emergency cover across Dubai.',
    whatsappLabel: 'WhatsApp Us',
    whatsappText: 'Hi! I need a plumber in Dubai. Can I get a free quote?',
  },
  contact: {
    heading: 'Request a free plumbing quote',
    intro: 'Tell us the problem and your location, and we reply within minutes with a fixed price and the earliest available slot. For emergencies, call us instead.',
    messageLabel: 'What is the plumbing problem?',
    messagePlaceholder: 'e.g. villa in The Springs, kitchen sink drain blocked and water heater not heating',
  },
}

export const SERVICES_LIST = [PAINTING, SPC, ELECTRICIAN, AC_DUCT, PLUMBING]
export const SERVICES_BY_PATH = Object.fromEntries(SERVICES_LIST.map((s) => [s.path, s]))
export { PAINTING, SPC, ELECTRICIAN, AC_DUCT, PLUMBING }
