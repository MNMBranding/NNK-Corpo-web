export interface NewsContentBlock {
  type: 'p' | 'h2';
  text: string;
}

export interface NewsPost {
  slug: string;
  image: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: NewsContentBlock[];
}

export const newsPosts: NewsPost[] = [
  {
    slug: 'innovations-in-sustainable-urban-architecture',
    image: '/assets/6760288503b490ff72c0222f_Modern Minimalist Living Room.avif',
    date: 'October 1, 2023',
    readTime: '5',
    title: 'Innovations in Sustainable Urban Architecture',
    excerpt: 'How rainwater harvesting, solar-ready terraces, and greener materials shape every NNK home.',
    content: [
      {
        type: 'p',
        text: 'As Hyderabad continues to expand, sustainability has moved from being a design afterthought to a starting point. At NNK, every community is planned with an awareness that a home should give back to its surroundings, not just occupy them.',
      },
      { type: 'h2', text: 'Building with intent.' },
      {
        type: 'p',
        text: 'Rainwater harvesting pits, solar-ready terraces, and cross-ventilated layouts are built into our plans from day one, not added later as compliance checkboxes. These choices lower utility costs for residents while easing pressure on the city’s water and power infrastructure.',
      },
      {
        type: 'p',
        text: 'Material selection plays an equally important role. Fly-ash blocks, low-VOC paints, and high-performance glazing reduce embodied carbon and keep indoor air quality high, all without adding visible bulk to the structure.',
      },
      {
        type: 'p',
        text: 'Shaded courtyards, landscaped setbacks, and generous green cover on podiums help bring down surface temperatures, softening the urban heat island effect that many newer developments in the city struggle with.',
      },
      {
        type: 'p',
        text: 'The result is a home that feels considered rather than constructed — one that stays comfortable through Hyderabad’s summers and lighter on the grid through the year.',
      },
    ],
  },
  {
    slug: 'designing-for-the-future-smart-homes-and-spaces',
    image: '/assets/6760285ad4a1aacd19d70a02_Man in Modern Architectural Setting.avif',
    date: 'October 3, 2023',
    readTime: '3',
    title: 'Designing for the Future: Smart Homes and Spaces',
    excerpt: 'Smart provisioning, flexible layouts, and homes built to adapt as needs change.',
    content: [
      {
        type: 'p',
        text: 'Today’s homebuyers expect their home to do more than shelter them — they expect it to respond to them. Smart provisioning is now a standard part of how we plan every NNK residence.',
      },
      { type: 'h2', text: 'Comfort, automated.' },
      {
        type: 'p',
        text: 'Video door phones, app-based access control, and smart energy metering come pre-wired into every unit, so residents can monitor and manage their home from anywhere without retrofitting a single wall.',
      },
      {
        type: 'p',
        text: 'Floor plans are drawn with flexibility in mind — a spare bedroom that becomes a home office, a home theatre that doubles as a media room for the family, spaces designed to adapt as a household’s needs change.',
      },
      {
        type: 'p',
        text: 'We also build in future-readiness: dedicated conduits for EV charging points and structured wiring that can support tomorrow’s devices without breaking open finished interiors.',
      },
      {
        type: 'p',
        text: 'Technology, used this way, fades into the background — it simply makes daily life a little easier, a little safer, and a little more within the resident’s control.',
      },
    ],
  },
  {
    slug: 'heritage-revival-merging-classic-and-modern-styles',
    image: '/assets/676028778cb8c5a68be99b3f_Tranquil Modern Structure by the Lake.avif',
    date: 'October 6, 2023',
    readTime: '3',
    title: 'Heritage Revival: Merging Classic and Modern Styles',
    excerpt: 'Where Nizami-era design language meets contemporary concrete and glass.',
    content: [
      {
        type: 'p',
        text: 'Hyderabad wears two identities at once — a city of Nizami arches and jali screens, and a city of glass towers and concrete skylines. Our design language tries to hold both at the same time.',
      },
      { type: 'h2', text: 'A dialogue between eras.' },
      {
        type: 'p',
        text: 'Facades borrow the rhythm of traditional jali work, reinterpreted through precast concrete and metal screens that filter light and heat without feeling ornamental or dated.',
      },
      {
        type: 'p',
        text: 'Courtyards and arched entrances nod to the city’s older architecture, while exposed concrete, structural glass, and clean steel detailing keep the overall massing firmly contemporary.',
      },
      {
        type: 'p',
        text: 'Inside, this balance continues — stone inlay work and warm teak accents sit alongside minimal, unfussy furniture and fittings, so a home feels rooted without feeling heavy.',
      },
      {
        type: 'p',
        text: 'It’s an approach that respects where Hyderabad comes from while building confidently for where it’s headed.',
      },
    ],
  },
  {
    slug: 'the-power-of-minimalism-in-contemporary-architecture',
    image: '/assets/6760295ca27ca0469b8142e9_Modern Minimalist Interior with Warm Hues.avif',
    date: 'October 4, 2023',
    readTime: '5',
    title: 'The Power of Minimalism in Contemporary Architecture',
    excerpt: 'Clean lines, calm interiors, and architecture that ages gracefully.',
    content: [
      {
        type: 'p',
        text: 'There’s a quiet confidence in a building that doesn’t need excess ornamentation to make an impression. Minimalism, done well, is less about restraint and more about clarity.',
      },
      { type: 'h2', text: 'Form follows calm.' },
      {
        type: 'p',
        text: 'Clean lines, restrained material palettes, and uninterrupted glazing let natural light do most of the design work, shaping spaces that feel open and unhurried at any time of day.',
      },
      {
        type: 'p',
        text: 'Every square foot is planned with intent — storage is built in rather than added on, and common areas stay free of visual clutter so the architecture itself remains the focus.',
      },
      {
        type: 'p',
        text: 'This discipline pays off well beyond move-in day: fewer surfaces and finishes to maintain, fewer places for wear to show, and interiors that age gracefully instead of falling out of style.',
      },
      {
        type: 'p',
        text: 'For residents, the effect is simple — a home that feels settled the moment they walk in, and stays that way for years to come.',
      },
    ],
  },
];

export function getNewsBySlug(slug: string): NewsPost | undefined {
  return newsPosts.find((post) => post.slug === slug);
}
