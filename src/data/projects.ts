export type ProjectStatus = 'ongoing' | 'completed';

export interface ProjectSpecs {
  floors: string;
  bhk: string;
  builtUp: string;
  plotArea: string;
  type?: string;
  rera?: string;
  approvalAuthority?: string;
  approvalNumber?: string;
}

export interface NearbyCategory {
  category: string;
  places: string[];
}

export interface FloorPlanItem {
  image: string;
  caption?: string;
}

export interface ProjectSEO {
  title?: string;
  description?: string;
  keywords?: string[];
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  logo: string;
  status: ProjectStatus;
  specs: ProjectSpecs;
  address: string;
  // "lat,lng" from NNK Projects Locations.xlsx (2026-10-27) or the project's Google Maps pin; the map pins this instead of the address
  coords?: string;
  gallery: string[];
  floorPlans: FloorPlanItem[];
  masterPlan?: string;
  nearbyLocations?: NearbyCategory[];
  // PDF in public/brochures/, e.g. '/brochures/aira.pdf'. Offered on the contact form once set.
  brochure?: string;
  // Custom SEO options. When specified here, these take precedence over auto-generated values.
  seo?: ProjectSEO;
}

// Sourced from nnk.co.in / aira.nnk.co.in (project pages) on 2026-08-11.

const shaikpetKokapetCluster: NearbyCategory[] = [
  { category: 'Workplaces', places: ['Mind Space', 'Knowledge City', 'Wipro', 'Infosys'] },
  { category: 'Hospitals', places: ['AMVI Hospital', 'KIMS Hospital, Gachibowli', 'AIG Hospital', 'Star Hospitals'] },
  { category: 'Schools', places: ['The Global Edge School', 'Delhi Public School', 'Rockwell International School', 'Oakridge International School'] },
  { category: 'Malls', places: ['Inorbit Mall', 'SLN Terminus', 'Atrium Mall', 'Sarath City Capital Mall'] },
];

const khajagudaCluster: NearbyCategory[] = [
  { category: 'Healthcare', places: ['KIMS Hospitals, Gachibowli', 'Apollo Hospitals, Jubilee Hills', 'STAR Hospitals, Gachibowli'] },
  { category: 'Education', places: ['Oasis School, Shaikpet', 'Delhi Public School, Khajaguda', 'Oakridge International School, Khajaguda'] },
  { category: 'Retail', places: ['D-Mart', 'Sarath City Capital Mall', 'IKEA', 'Inorbit Mall'] },
];

const aarnaLocations: NearbyCategory[] = [
  { category: 'Workplaces', places: ['Mind Space', 'Knowledge City', 'Wipro', 'Infosys'] },
  { category: 'Hospitals', places: ['KIMS, Gachibowli', 'Continental Hospital', 'AIG Hospital', 'Care Hospital'] },
  { category: 'Schools', places: ['Bhashyam Blooms School', 'Phoenix Greens School', 'Rockwell International', 'Delhi Public School'] },
  { category: 'Malls', places: ['Boomika Sensation Mall', 'Anand Mall', 'Kokapet One', 'Inorbit Mall'] },
];

function galleryFor(slug: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/assets/projects/gallery/${slug}-${i + 1}.${galleryExt[slug]}`);
}

// Per-project gallery file extensions (varies by original source format).
const galleryExt: Record<string, string> = {
  aira: 'webp',
  aravali: 'jpg',
  vyoma: 'jpg',
  vrindhavan: 'jpeg',
  aarna: 'webp',
  varnam: 'webp',
  sia: 'jpg',
  vindhya: 'jpg',
  'madhumani-vilas': 'jpg',
  amaya: 'webp',
  kavyam: 'webp',
  kiara: 'webp',
  myra: 'webp',
  avani: 'jpg',
  gokula: 'webp',
  amodha: 'jpg',
};

export const projects: Project[] = [
  // Ongoing
  {
    slug: 'aira',
    name: 'NNK Aira',
    brochure: '/brochures/aira.pdf',
    tagline: 'A space that breathes with you',
    image: '/assets/projects/aira-hero.webp',
    logo: '/assets/projects/logos/aira.webp',
    status: 'ongoing',
    specs: { floors: '2 Cellars + Stilt + 8', bhk: '3 BHK + Home Theatre', builtUp: '2,900 – 3,700 sq ft', plotArea: '4,158 sq yards', rera: 'P02500009507', approvalAuthority: 'GHMC', approvalNumber: '4924/GHMC/KHB/2025-BP' },
    address: 'Shaikpet, near Golconda Fort, Hyderabad',
    coords: '17.4059282,78.3941129',
    gallery: [
      '/assets/projects/gallery/aira-4.webp',
      '/assets/projects/gallery/aira-1.webp',
      '/assets/projects/gallery/aira-9.webp',
      '/assets/projects/gallery/aira-2.webp',
      '/assets/projects/gallery/aira-5.webp',
      '/assets/projects/gallery/aira-6.webp',
      '/assets/projects/gallery/aira-3.webp',
      '/assets/projects/gallery/aira-7.webp',
      '/assets/projects/gallery/aira-10.webp',
      '/assets/projects/gallery/aira-8.webp',
      '/assets/projects/gallery/aira-11.webp',
      '/assets/projects/gallery/aira-12.webp',
    ],
    floorPlans: [{ image: '/assets/projects/floorplans/aira.webp' }],
    masterPlan: '/assets/projects/floorplans/aira-master-plan.webp',
    seo: {
      title: 'NNK Aira | Luxury 3 BHK Flats for Sale in Shaikpet, Hyderabad',
      description: 'NNK Aira: 3 BHK flats with home theatre in Shaikpet, Hyderabad. 2 cellars + stilt + 8 floors on 4,158 sq yards. TG RERA P02500009507. Enquire now.',
      keywords: ['NNK Aira', '3 BHK Shaikpet', 'Luxury Apartments Shaikpet', 'NNK Constructions Shaikpet'],
    },
  },
  {
    slug: 'aravali',
    name: 'NNK Aravali',
    brochure: '/brochures/aravali.pdf',
    tagline: 'Building your Dream space with NNK in Hyderabad',
    image: '/assets/projects/aravali.jpg',
    logo: '/assets/projects/logos/aravali.svg',
    status: 'completed',
    specs: { floors: 'Stilt + 4', bhk: '2 BHK', builtUp: '9,360 sq ft', plotArea: '348 sq yards', approvalAuthority: 'GHMC', approvalNumber: '4803/GHMC/KHB/2025-BP' },
    address: 'Plot No 102, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    coords: '17.4064744,78.3943172',
    gallery: galleryFor('aravali', 1),
    floorPlans: [{ image: '/assets/projects/floorplans/aravali.png' }],
    nearbyLocations: shaikpetKokapetCluster,
    seo: {
      title: 'NNK Aravali | 2 BHK Apartments in Shaikpet, Hyderabad',
      description: 'NNK Aravali: completed 2 BHK apartments in Shaikpet, Hyderabad. Stilt + 4 floors, 9,360 sq ft built-up on 348 sq yards. View floor plan and location.',
      keywords: ['NNK Aravali', '2 BHK Shaikpet', 'Luxury Apartments Shaikpet', 'NNK Constructions Shaikpet'],
    },
  },
  {
    slug: 'vyoma',
    name: 'NNK Vyoma',
    brochure: '/brochures/vyoma.pdf',
    tagline: 'Building your Dream space with NNK in Hyderabad',
    image: '/assets/projects/vyoma.jpg',
    logo: '/assets/projects/logos/vyoma.png',
    status: 'ongoing',
    specs: { floors: 'Stilt + 5', bhk: '3 BHK', builtUp: 'Not Disclosed', plotArea: '895.77 sq yards', rera: 'P02500010632', approvalAuthority: 'GHMC', approvalNumber: '1751/GHMC/SWBP/KHB2/2025' },
    address: "Plot No's 48, 49 & 50, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008",
    coords: '17.405125,78.3932017',
    gallery: galleryFor('vyoma', 1),
    floorPlans: [{ image: '/assets/projects/floorplans/vyoma.jpg', caption: '3 BHK · 1550 sft · East / North / West Facing' }],
    seo: {
      title: 'NNK Vyoma | 3 BHK Flats for Sale in Shaikpet, Hyderabad',
      description: 'NNK Vyoma: 3 BHK flats for sale in Shaikpet, Hyderabad. Stilt + 5 floors on 895.77 sq yards. TG RERA P02500010632. View plans and enquire today..',
      keywords: ['NNK Vyoma', '3 BHK Shaikpet', 'Luxury Apartments Shaikpet', 'NNK Constructions Shaikpet'],
    },
  },
  {
    slug: 'vrindhavan',
    name: 'NNK Vrindhavan',
    brochure: '/brochures/vrindhavan.pdf',
    tagline: '2 & 3 BHK Residences',
    image: '/assets/projects/vrindhavan.webp',
    logo: '/assets/projects/logos/vrindhavan.png',
    status: 'ongoing',
    specs: { floors: 'Stilt + 4', bhk: '2 & 3 BHK', builtUp: '14100', plotArea: '480 sq yards', rera: 'P02500010892', approvalAuthority: 'GHMC', approvalNumber: '1324/GHMC/KHB/2025-BP' },
    address: 'Plot No 243 & 244P, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    coords: '17.4071185,78.3959622',
    gallery: galleryFor('vrindhavan', 1),
    floorPlans: [{ image: '/assets/projects/floorplans/vrindhavan.jpeg' }],
    seo: {
      title: 'NNK Vrindhavan | 2 & 3 BHK Flats for Sale in Shaikpet',
      description: 'NNK Vrindhavan: 2 & 3 BHK flats for sale in Shaikpet, Hyderabad. Stilt + 4 floors on 480 sq yards. TG RERA P02500010892. View plans and enquire.',
      keywords: ['NNK Vrindhavan', '2 & 3 BHK Shaikpet', 'Luxury Apartments Shaikpet', 'NNK Constructions Shaikpet'],
    },
  },
  {
    slug: 'aarna',
    name: 'NNK Aarna',
    brochure: '/brochures/aarna.pdf',
    tagline: 'Luxurious 2 & 3 BHK Flats for Sale in Hyderabad',
    image: '/assets/projects/aarna.jpg',
    logo: '/assets/projects/logos/aarna.png',
    status: 'completed',
    specs: { floors: 'Cellar + Stilt + 5', bhk: '2 & 3 BHK', builtUp: '41,025 sq ft', plotArea: '2,046 sq yards', rera: 'P02500008386', approvalAuthority: 'GHMC', approvalNumber: '6041/GHMC/KHB/2024-BP' },
    address: 'Sy No 128 & 129, Ibrahimbagh, Next to Neknampur Lake, Narsingi, Hyderabad – 500 075',
    coords: '17.3820601,78.3706103',
    gallery: galleryFor('aarna', 2),
    floorPlans: [{ image: '/assets/projects/floorplans/aarna.jpeg' }],
    nearbyLocations: aarnaLocations,
    seo: {
      title: 'NNK Aarna | 2 & 3 BHK Apartments in Kokapet, Hyderabad',
      description: 'NNK Aarna: completed 2 & 3 BHK apartments in Kokapet, Hyderabad. Cellar + stilt + 5 floors, 41,025 sq ft built-up. TG RERA P02500008386.',
      keywords: ['NNK Aarna', '2 & 3 BHK Kokapet', 'Luxury Apartments Kokapet', 'NNK Constructions Kokapet'],
    },
  },
  {
    slug: 'varnam',
    name: 'NNK Varnam',
    brochure: '/brochures/varnam.pdf',
    tagline: 'Luxurious 2 & 3 BHK Flats',
    image: '/assets/projects/varnam.jpg',
    logo: '/assets/projects/logos/varnam.png',
    status: 'completed',
    specs: { floors: 'Stilt + 5', bhk: '2 BHK (1260 sft) & 3 BHK (1590 sft)', builtUp: '14,250 sq ft', plotArea: '480 sq yards', rera: 'P02500009104', approvalAuthority: 'GHMC', approvalNumber: '3034/GHMC/KHB/2024-BP' },
    address: 'Plot No 239 & 240, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    coords: '17.4073357,78.3953432',
    gallery: galleryFor('varnam', 2),
    floorPlans: [{ image: '/assets/projects/floorplans/varnam.png', caption: 'Unit 1 — 3 BHK · 1590 sft · East Facing  |  Unit 2 — 2 BHK · 1260 sft · West Facing' }],
    nearbyLocations: shaikpetKokapetCluster,
    seo:{
      title:"NNK Varnam | 2 & 3 BHK Apartments in Shaikpet, Hyderabad",
      description:"NNK Varnam: completed 2 BHK (1,260 sft) and 3 BHK (1,590 sft) apartments in Shaikpet, Hyderabad. Stilt + 5 floors. TG RERA P02500009104.",
      keywords:["NNK Varnam","2 & 3 BHK Shaikpet","Luxury Apartments Shaikpet","NNK Constructions Shaikpet"],
    },
  },
  {
    slug: 'sia',
    name: 'NNK Sia',
    brochure: '/brochures/sia.pdf',
    tagline: 'Building your Dream space with NNK in Hyderabad',
    image: '/assets/projects/sia.jpg',
    logo: '/assets/projects/logos/sia.svg',
    status: 'completed',
    specs: { floors: 'Stilt + 5', bhk: '2 BHK', builtUp: '10,400 sq ft', plotArea: '385 sq yards', rera: 'P02500009438', approvalAuthority: 'GHMC', approvalNumber: '6233/GHMC/KHB/2025-BP' },
    address: 'Plot No 136 & 137, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    coords: '17.4058567,78.3955324',
    gallery: galleryFor('sia', 1),
    floorPlans: [{ image: '/assets/projects/floorplans/sia.png' }],
    nearbyLocations: shaikpetKokapetCluster,
    seo: {
      title: 'NNK Sia | 2 BHK Apartments in Shaikpet, Hyderabad',
      description: 'NNK Sia: completed 2 BHK apartments in Shaikpet, Hyderabad. Stilt + 5 floors, 10,400 sq ft built-up on 385 sq yards. TG RERA P02500009438.',
      keywords: ['NNK Sia', '2 BHK Shaikpet', 'Luxury Apartments Shaikpet', 'NNK Constructions Shaikpet'],
    },
  },
  {
    slug: 'vindhya',
    name: 'NNK Vindhya',
    brochure: '/brochures/vindhya.pdf',
    tagline: 'Building your Dream space with NNK in Hyderabad',
    image: '/assets/projects/vindhya.jpg',
    logo: '/assets/projects/logos/vindhya.svg',
    status: 'completed',
    specs: { floors: 'Stilt + 5', bhk: '2 & 3 BHK', builtUp: '14,550 sq ft', plotArea: '471.20 sq yards', rera: 'P02500009447', approvalAuthority: 'GHMC', approvalNumber: '4802/GHMC/KHB/2025-BP' },
    address: 'Plot No 243 & 244P, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    coords: '17.4072989,78.3965777',
    gallery: galleryFor('vindhya', 1),
    floorPlans: [{ image: '/assets/projects/floorplans/vindhya.png' }],
    nearbyLocations: shaikpetKokapetCluster,
    seo: {
      title: 'NNK Vindhya | 2 & 3 BHK Apartments in Shaikpet, Hyderabad',
      description: 'NNK Vindhya: completed 2 & 3 BHK apartments in Shaikpet, Hyderabad. Stilt + 5 floors, 14,550 sq ft built-up. TG RERA P02500009447.',
      keywords: ['NNK Vindhya', '2 & 3 BHK Shaikpet', 'Luxury Apartments Shaikpet', 'NNK Constructions Shaikpet'],
    },
  },
  {
    slug: 'madhumani-vilas',
    name: 'NNK Madhumani Vilas',
    brochure: '/brochures/madhumani-vilas.pdf',
    tagline: 'Luxurious 2 & 3 BHK Flats for Sale in Hyderabad',
    image: '/assets/projects/madhumani-vilas.jpg',
    logo: '/assets/projects/logos/madhumani-vilas.png',
    status: 'completed',
    specs: { floors: 'Stilt + 5', bhk: '2 & 3 BHK', builtUp: '17,500 sq ft', plotArea: '692.76 sq yards', rera: 'P02500008626', approvalAuthority: 'GHMC', approvalNumber: '1996/GHMC/KHB/2024-BP' },
    address: 'H.No. 8-1-297/SN/224, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    coords: '17.4052077,78.3933449',
    gallery: galleryFor('madhumani-vilas', 4),
    floorPlans: [{ image: '/assets/projects/floorplans/madhumani-vilas.jpeg' }],
    nearbyLocations: shaikpetKokapetCluster,
    seo: {
      title: 'NNK Madhumani Vilas | 2 & 3 BHK Apartments, Shaikpet',
      description: 'NNK Madhumani Vilas: completed 2 & 3 BHK apartments in Shaikpet, Hyderabad. Stilt + 5 floors, 17,500 sq ft built-up. TG RERA P02500008626.',
      keywords: ['NNK Madhumani Vilas', '2 & 3 BHK Shaikpet', 'Luxury Apartments Shaikpet', 'NNK Constructions Shaikpet'],
    },
  },

  // Completed
  {
    slug: 'amaya',
    name: 'NNK Amaya',
    brochure: '/brochures/amaya.pdf',
    tagline: '2.5 & 3 BHK Residences',
    image: '/assets/projects/amaya.jpg',
    logo: '/assets/projects/logos/amaya.svg',
    status: 'completed',
    specs: { floors: 'Stilt + 5', bhk: '2.5 & 3 BHK', builtUp: '14,550 sq ft', plotArea: '471.20 sq yards', rera: 'P02500008627', approvalAuthority: 'GHMC', approvalNumber: '2047/GHMC/KHB/2024-BP' },
    address: 'Plot No 248 & 249, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    coords: '17.4072926,78.3964479',
    gallery: galleryFor('amaya', 3),
    floorPlans: [{ image: '/assets/projects/floorplans/amaya.webp', caption: 'Unit 1 — 3 BHK · 1600 sft · East Facing  |  Unit 2 — 2.5 BHK · 1310 sft · West Facing' }],
    nearbyLocations: shaikpetKokapetCluster,
    seo: {
      title: 'NNK Amaya | 2.5 & 3 BHK Apartments in Shaikpet, Hyderabad',
      description: 'NNK Amaya: completed 2.5 BHK (1,310 sft) and 3 BHK (1,600 sft) apartments in Shaikpet, Hyderabad. Stilt + 5 floors. TG RERA P02500008627.',
      keywords: ['NNK Amaya', '2.5 & 3 BHK Shaikpet', 'Luxury Apartments Shaikpet', 'NNK Constructions Shaikpet'],
    },
  },
  {
    slug: 'kavyam',
    name: 'NNK Kavyam',
    brochure: '/brochures/kavyam.pdf',
    tagline: '2 & 3 BHK Residences',
    image: '/assets/projects/kavyam.webp',
    logo: '/assets/projects/logos/kavyam.svg',
    status: 'completed',
    specs: { floors: '5', bhk: '2 BHK, 3 BHK', builtUp: '15,425 sq ft', plotArea: '533.33 sq yards', rera: 'P02500008128', approvalAuthority: 'GHMC', approvalNumber: '5900/GHMC/KHB/2024-BP' },
    address: 'Plot No 248 & 249, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    coords: '17.4075461,78.3958246',
    gallery: galleryFor('kavyam', 2),
    floorPlans: [{ image: '/assets/projects/floorplans/kavyam.jpg', caption: 'Unit 1 — 3 BHK · 1730 sft · East Facing  |  Unit 2 — 2 BHK · 1355 sft · West Facing' }],
    nearbyLocations: shaikpetKokapetCluster,
    seo: {
      title: 'NNK Kavyam | 2 & 3 BHK Apartments in Shaikpet, Hyderabad',
      description: 'NNK Kavyam: completed 2 BHK (1,355 sft) and 3 BHK (1,730 sft) apartments in Shaikpet, Hyderabad. 5 floors. TG RERA P02500008128.',
      keywords: ['NNK Kavyam', '2 & 3 BHK Shaikpet', 'Luxury Apartments Shaikpet', 'NNK Constructions Shaikpet'],
    },
  },
  {
    slug: 'kiara',
    name: 'NNK Kiara',
    brochure: '/brochures/kiara.pdf',
    tagline: '2 & 3 BHK Residences',
    image: '/assets/projects/kiara.webp',
    logo: '/assets/projects/logos/kiara.webp',
    status: 'completed',
    specs: { floors: '5', bhk: '2 & 3 BHK', builtUp: '14,900 sq ft', plotArea: '533.33 sq yards', rera: 'P02500008129', approvalAuthority: 'GHMC', approvalNumber: '5898/GHMC/KHB/2024-BP' },
    address: 'Plot No 246 & 247, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    coords: '17.40748,78.3960967',
    gallery: galleryFor('kiara', 1),
    floorPlans: [{ image: '/assets/projects/floorplans/kiara.webp', caption: 'Unit 2 — 3 BHK · 1740 sft · East Facing  |  Unit 1 — 2 BHK · 1240 sft · West Facing' }],
    nearbyLocations: shaikpetKokapetCluster,
    seo: {
      title: 'NNK Kiara | 2 & 3 BHK Apartments in Shaikpet, Hyderabad',
      description: 'NNK Kiara: completed 2 BHK (1,240 sft) and 3 BHK (1,740 sft) apartments in Shaikpet, Hyderabad. 5 floors. TG RERA P02500008129.',
      keywords: ['NNK Kiara', '2 & 3 BHK Shaikpet', 'Luxury Apartments Shaikpet', 'NNK Constructions Shaikpet'],
    },
  },
  {
    slug: 'myra',
    name: 'NNK Myra',
    brochure: '/brochures/myra.pdf',
    tagline: '2.5 BHK Residences',
    image: '/assets/projects/myra.webp',
    logo: '/assets/projects/logos/myra.png',
    status: 'completed',
    specs: { floors: '5', bhk: '2.5 BHK', builtUp: '14,250 sq ft', plotArea: '466.66 sq yards', rera: 'P02500008164', approvalAuthority: 'GHMC', approvalNumber: '5893/GHMC/KHB/2024-BP' },
    address: 'Plot No 239 & 240, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    coords: '17.4075519,78.3963245',
    gallery: galleryFor('myra', 8),
    floorPlans: [{ image: '/assets/projects/floorplans/myra.jpeg', caption: 'Unit 2 — 2.5 BHK · 1440 sft · East Facing  |  Unit 1 — 2.5 BHK · 1410 sft · West Facing' }],
    nearbyLocations: shaikpetKokapetCluster,
    seo: {
      title: 'NNK Myra | 2.5 BHK Apartments in Shaikpet, Hyderabad',
      description: 'NNK Myra: completed 2.5 BHK apartments (1,410–1,440 sft) in Shaikpet, Hyderabad. 5 floors, 14,250 sq ft built-up. TG RERA P02500008164.',
      keywords: ['NNK Myra', '2.5 BHK Shaikpet', 'Luxury Apartments Shaikpet', 'NNK Constructions Shaikpet'],
    },
  },
  {
    slug: 'avani',
    name: 'NNK Avani',
    brochure: '/brochures/avani.pdf',
    tagline: 'Building your Dream space with NNK in Hyderabad',
    image: '/assets/projects/avani.jpg',
    logo: '/assets/projects/logos/avani.png',
    status: 'completed',
    specs: { floors: '5', bhk: '2 & 3 BHK', builtUp: '50,000 sq ft', plotArea: '2,088 sq yards', rera: 'P02500006358', approvalAuthority: 'GHMC', approvalNumber: '5787/GHMC/KHB/2023-BP' },
    address: 'H.No. 8-1-297/SN/224, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    coords: '17.4065132,78.3954163',
    gallery: galleryFor('avani', 2),
    floorPlans: [{ image: '/assets/projects/floorplans/avani.jpg' }],
    seo: {
      title: 'NNK Avani | 2 & 3 BHK Apartments in Shaikpet, Hyderabad',
      description: 'NNK Avani: completed 2 & 3 BHK apartments in Shaikpet, Hyderabad. 5 floors, 50,000 sq ft built-up on 2,088 sq yards. TG RERA P02500006358.',
      keywords: ['NNK Avani', '2 & 3 BHK Shaikpet', 'Luxury Apartments Shaikpet', 'NNK Constructions Shaikpet'],
    },
  },
  {
    slug: 'gokula',
    name: 'NNK Gokula',
    brochure: '/brochures/gokula.pdf',
    tagline: '2 & 3 BHK Residences',
    image: '/assets/projects/gokula.webp',
    logo: '/assets/projects/logos/gokula.webp',
    status: 'completed',
    specs: { floors: '5', bhk: '2 & 3 BHK', builtUp: 'Not Disclosed', plotArea: '533.33 sq yards', rera: 'P02500008163', approvalAuthority: 'GHMC', approvalNumber: '5571/GHMC/KHB/2024-BP' },
    address: 'Plot No 233 & 234, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    coords: '17.4075636,78.3951263',
    gallery: galleryFor('gokula', 2),
    floorPlans: [{ image: '/assets/projects/floorplans/gokula.webp', caption: 'Unit 1 — 3 BHK · 1715 sft · East Facing  |  Unit 2 — 2 BHK · 1200 sft · West Facing' }],
    nearbyLocations: shaikpetKokapetCluster,
    seo: {
      title: 'NNK Gokula | 2 & 3 BHK Apartments in Shaikpet, Hyderabad',
      description: 'NNK Gokula: completed 2 BHK (1,200 sft) and 3 BHK (1,715 sft) apartments in Shaikpet, Hyderabad. 5 floors. TS RERA P02500008163.',
      keywords: ['NNK Gokula', '2 & 3 BHK Shaikpet', 'Luxury Apartments Shaikpet', 'NNK Constructions Shaikpet'],
    },
  },
  {
    slug: 'amodha',
    name: 'NNK Amodha',
    brochure: '/brochures/amodha.pdf',
    tagline: '2 & 3 BHK Residences',
    image: '/assets/projects/amodha.jpg',
    logo: '/assets/projects/logos/amodha.png',
    status: 'completed',
    specs: { floors: '5', bhk: '2 & 3 BHK', builtUp: '20,550 sq ft', plotArea: '865 sq yards', rera: 'P02500005825', approvalAuthority: 'GHMC', approvalNumber: '4756/GHMC/KHB/2022-BP' },
    address: 'H.No. 8-1-297/SN/224, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    coords: '17.4066006,78.3956403',
    gallery: galleryFor('amodha', 2),
    floorPlans: [{ image: '/assets/projects/floorplans/amodha.jpg' }],
    nearbyLocations: khajagudaCluster,
    seo: {
      title: 'NNK Amodha | 2 & 3 BHK Apartments in Shaikpet, Hyderabad',
      description: 'NNK Amodha: completed 2 & 3 BHK apartments in Shaikpet, Hyderabad. 5 floors, 20,550 sq ft built-up on 865 sq yards. TS RERA P02500005825.',
      keywords: ['NNK Amodha', '2 & 3 BHK Shaikpet', 'Luxury Apartments Shaikpet', 'NNK Constructions Shaikpet'],
    },
  },
  {
    slug: 'raaga',
    name: 'NNK Raaga',
    brochure: '/brochures/raaga.pdf',
    tagline: '2 & 3 BHK Residences',
    image: '/assets/projects/raaga.jpg',
    logo: '/assets/projects/logos/raaga.png',
    status: 'completed',
    specs: { floors: 'Not Disclosed', bhk: '2 & 3 BHK', builtUp: '13,250 sq ft', plotArea: '603 sq yards', rera: 'P02500005280', approvalAuthority: 'GHMC', approvalNumber: '2824/GHMC/KHB/2022-BP' },
    address: 'H.No. 8-1-297/SN/224, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    coords: '17.4066707,78.3944178',
    gallery: [],
    floorPlans: [{ image: '/assets/projects/floorplans/raaga.jpg' }],
    nearbyLocations: khajagudaCluster,
    seo: {
      title: 'NNK Raaga | 2 & 3 BHK Apartments in Shaikpet, Hyderabad',
      description: 'NNK Raaga: completed 2 & 3 BHK apartments in Shaikpet, Hyderabad. 13,250 sq ft built-up on 603 sq yards. TS RERA P02500005280. View floor plan.',
      keywords: ['NNK Raaga', '2 & 3 BHK Shaikpet', 'Luxury Apartments Shaikpet', 'NNK Constructions Shaikpet'],
    },
  },
  {
    slug: 'bhooma',
    name: 'NNK Bhooma',
    brochure: '/brochures/bhooma.pdf',
    tagline: '3 BHK Residences',
    image: '/assets/projects/bhooma.jpg',
    logo: '/assets/projects/logos/bhooma.png',
    status: 'completed',
    specs: { floors: '5', bhk: '3 BHK', builtUp: '10,250 sq ft', plotArea: '368 sq yards', approvalAuthority: 'GHMC', approvalNumber: '008603/GHMC/4242/KHB2/2022-BP' },
    address: 'H.No. 8-1-297/SN/224, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    coords: '17.406583,78.3943772',
    gallery: [],
    floorPlans: [{ image: '/assets/projects/floorplans/bhooma.jpg' }],
    nearbyLocations: khajagudaCluster,
    seo: {
      title: 'NNK Bhooma | 3 BHK Apartments in Shaikpet, Hyderabad',
      description: 'NNK Bhooma: completed 3 BHK apartments in Shaikpet, Hyderabad. 5 floors, 10,250 sq ft built-up on 368 sq yards. View floor plan and location.',
      keywords: ['NNK Bhooma', '3 BHK Shaikpet', 'Luxury Apartments Shaikpet', 'NNK Constructions Shaikpet'],
    },
  },
];

// Client: the older projects keep the "TS RERA" name; every other project is "TG RERA"
const tsReraProjects = ['bhooma', 'raaga', 'amodha', 'gokula'];

export function reraLabel(slug: string): string {
  return tsReraProjects.includes(slug) ? 'TS RERA' : 'TG RERA';
}

export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return projects.filter((project) => project.status === status);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function projectPath(project: Project): string {
  return `/projects/${project.slug}`;
}
