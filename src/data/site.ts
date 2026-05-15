/**
 * SITE CONFIG — Single source of truth for the entire rank-and-rent site.
 *
 * To spin up a new city or niche:
 *   1. Duplicate this project
 *   2. Edit this file
 *   3. Push to GitHub → auto-deploys on Cloudflare Pages
 */

export const site = {
  // ── Brand ──────────────────────────────────────────────
  name: 'Concord Tree Removal',
  domain: 'concordtreeremoval.com',
  url: 'https://concordtreeremoval.com',
  phone: '(704) 313-1555',
  phoneTel: '+17043131555',
  tagline: 'Tree Removal & Trimming Services',
  description:
    'Professional tree removal, trimming, stump grinding, and emergency storm cleanup across the Concord, NC metro. Free estimates. Licensed & insured. Call today.',

  // ── Location ───────────────────────────────────────────
  city: 'Concord',
  state: 'NC',
  stateFull: 'North Carolina',
  county: 'Cabarrus',
  counties: 'Cabarrus, Rowan, and Mecklenburg',
  areaCode: '704',
  zip: '28025',
  geo: { lat: 35.4088, lng: -80.5795 },

  // ── SEO ────────────────────────────────────────────────
  primaryKeyword: 'tree removal Concord NC',
  keywords: [
    'tree removal Concord NC',
    'tree service Concord NC',
    'tree trimming Concord NC',
    'stump grinding Concord NC',
    'emergency tree removal Concord',
    'tree cutting service near me',
    'arborist Concord NC',
    'lot clearing Concord NC',
  ],

  // ── Services ───────────────────────────────────────────
  services: [
    {
      name: 'Tree Removal',
      slug: 'tree-removal',
      shortDesc: 'Safe removal of dead, dying, or hazardous trees of any size.',
      icon: '🪓',
      priceRange: '$300 – $2,500+',
      keywords: ['tree removal Concord NC', 'tree cutting Concord', 'remove tree Concord NC'],
    },
    {
      name: 'Tree Trimming & Pruning',
      slug: 'tree-trimming',
      shortDesc: 'Expert pruning to improve tree health, appearance, and safety.',
      icon: '✂️',
      priceRange: '$150 – $1,200',
      keywords: ['tree trimming Concord NC', 'tree pruning Concord', 'branch trimming Concord NC'],
    },
    {
      name: 'Stump Grinding & Removal',
      slug: 'stump-grinding',
      shortDesc: 'Complete stump grinding and root removal for a clean, level yard.',
      icon: '🪵',
      priceRange: '$100 – $500',
      keywords: ['stump grinding Concord NC', 'stump removal Concord', 'tree stump removal near me'],
    },
    {
      name: 'Emergency Tree Service',
      slug: 'emergency-tree-service',
      shortDesc: '24/7 emergency response for storm damage, fallen trees, and hazards.',
      icon: '🚨',
      priceRange: '$500 – $3,000+',
      keywords: ['emergency tree removal Concord NC', 'storm damage tree Concord', 'fallen tree removal'],
    },
    {
      name: 'Lot Clearing & Land Clearing',
      slug: 'lot-clearing',
      shortDesc: 'Full lot clearing for new construction, driveways, and landscaping projects.',
      icon: '🏗️',
      priceRange: '$1,500 – $5,000+',
      keywords: ['lot clearing Concord NC', 'land clearing Concord', 'brush clearing Cabarrus County'],
    },
  ],

  // ── Location Pages ─────────────────────────────────────
  locations: [
    { name: 'Concord', slug: 'concord', county: 'Cabarrus', pop: '105,000', desc: 'Serving all of Concord, including downtown, neighborhoods near Concord Mills, and residential areas throughout Cabarrus County.' },
    { name: 'Kannapolis', slug: 'kannapolis', county: 'Cabarrus', pop: '53,000', desc: 'Tree removal, trimming, and stump grinding for Kannapolis homes and businesses. Just minutes from our Concord base.' },
    { name: 'Harrisburg', slug: 'harrisburg', county: 'Cabarrus', pop: '18,000', desc: 'Fast-growing Harrisburg means mature trees meeting new construction. We handle removals, clearing, and storm cleanup.' },
    { name: 'Mount Pleasant', slug: 'mount-pleasant', county: 'Cabarrus', pop: '2,000', desc: 'Rural Mount Pleasant properties with large wooded lots. Expert tree removal and land clearing services.' },
    { name: 'Midland', slug: 'midland', county: 'Cabarrus', pop: '5,500', desc: 'Serving Midland and eastern Cabarrus County with professional tree services and emergency storm response.' },
    { name: 'China Grove', slug: 'china-grove', county: 'Rowan', pop: '4,200', desc: 'Tree removal and trimming for China Grove and southern Rowan County. Licensed, insured, and locally trusted.' },
    { name: 'Huntersville', slug: 'huntersville', county: 'Mecklenburg', pop: '62,000', desc: 'North Charlotte corridor with mature wooded neighborhoods. Expert tree removal and stump grinding services.' },
    { name: 'Cornelius', slug: 'cornelius', county: 'Mecklenburg', pop: '33,000', desc: 'Lake Norman community tree services. Safe removal near homes, docks, and waterfront properties.' },
  ],

  // ── Pricing ────────────────────────────────────────────
  pricing: [
    { service: 'Small Tree Removal (under 30 ft)', price: '$300 – $800' },
    { service: 'Medium Tree Removal (30–60 ft)', price: '$800 – $1,500' },
    { service: 'Large Tree Removal (60+ ft)', price: '$1,500 – $2,500+' },
    { service: 'Tree Trimming & Pruning', price: '$150 – $1,200' },
    { service: 'Stump Grinding', price: '$100 – $500' },
    { service: 'Emergency Tree Removal', price: '$500 – $3,000+' },
    { service: 'Lot Clearing (per acre)', price: '$1,500 – $5,000+' },
  ],

  // ── FAQs ───────────────────────────────────────────────
  faqs: [
    {
      q: 'How much does tree removal cost in Concord, NC?',
      a: 'Tree removal in Concord typically ranges from $300 to $2,500+ depending on the tree\'s size, location, and complexity. Small trees under 30 feet cost $300–$800, while large trees over 60 feet can cost $1,500–$2,500 or more. We provide free estimates so you know the exact cost before any work begins.',
    },
    {
      q: 'Do I need a permit to remove a tree in Concord?',
      a: 'The City of Concord may require a permit for tree removal depending on the tree\'s size and location, especially in protected zones or new developments. Our crew handles the permit process for you and ensures all work meets local regulations.',
    },
    {
      q: 'How long does tree removal take?',
      a: 'Most residential tree removals are completed in 2–6 hours depending on size and access. Large or complex removals near power lines or structures may take a full day. Emergency storm damage is prioritized and addressed as quickly as possible.',
    },
    {
      q: 'Do you offer free estimates?',
      a: 'Yes — every estimate is completely free with no obligation. We\'ll come to your property, assess the tree, and give you a clear, flat-rate quote before any work starts. No hidden fees, no surprises.',
    },
    {
      q: 'Are you licensed and insured?',
      a: 'Absolutely. We carry full liability insurance and workers\' compensation coverage. This protects your property and gives you peace of mind knowing you\'re working with professionals.',
    },
    {
      q: 'What areas do you serve near Concord?',
      a: 'We serve Concord and the surrounding communities including Kannapolis, Harrisburg, Mount Pleasant, Midland, China Grove, Huntersville, and Cornelius. If you\'re in Cabarrus County or nearby, we can help.',
    },
    {
      q: 'Can you remove a tree close to my house or power lines?',
      a: 'Yes. Our crew is trained and equipped for technical removals near structures, power lines, fences, and pools. We use strategic rigging and sectional cutting to safely bring down trees in tight spaces without damage to your property.',
    },
    {
      q: 'What happens to the wood after removal?',
      a: 'We haul away all debris, branches, and wood as part of our standard service. If you\'d like to keep the firewood, just let us know and we\'ll cut it to length and stack it for you at no extra charge.',
    },
  ],

  // ── Trust Signals ──────────────────────────────────────
  trust: [
    'Licensed & Insured',
    'Free Estimates',
    '24/7 Emergency Service',
    'No Hidden Fees',
    'Same-Day Response',
    'Locally Owned & Operated',
  ],

  // ── Disclaimer ─────────────────────────────────────────
  disclaimer:
    'This website connects you with local, licensed, and insured tree service professionals in the Concord, NC metro area.',
};
