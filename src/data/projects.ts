export type ProjectStatus = 'ongoing' | 'completed';

export interface ProjectSpecs {
  floors: string;
  bhk: string;
  builtUp: string;
  plotArea: string;
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

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  logo: string;
  status: ProjectStatus;
  specs: ProjectSpecs;
  address: string;
  gallery: string[];
  floorPlans: FloorPlanItem[];
  masterPlan?: string;
  nearbyLocations?: NearbyCategory[];
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
    tagline: 'A space that breathes with you',
    image: '/assets/projects/aira-hero.webp',
    logo: '/assets/projects/logos/aira.webp',
    status: 'ongoing',
    specs: { floors: '2 Cellars + Stilt + 8', bhk: '3 BHK + Home Theatre', builtUp: '2,900 – 3,700 sq ft', plotArea: '4,158 sq yards' },
    address: 'Shaikpet, near Golconda Fort, Hyderabad',
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
  },
  {
    slug: 'aravali',
    name: 'NNK Aravali',
    tagline: 'Building your Dream space with NNK in Hyderabad',
    image: '/assets/projects/aravali.jpg',
    logo: '/assets/projects/logos/aravali.svg',
    status: 'ongoing',
    specs: { floors: 'Stilt + 4', bhk: '2 BHK', builtUp: '9,360 sq ft', plotArea: '348 sq yards', approvalAuthority: 'GHMC', approvalNumber: '4803/GHMC/KHB/2025-BP' },
    address: 'Plot No 102, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    gallery: galleryFor('aravali', 1),
    floorPlans: [{ image: '/assets/projects/floorplans/aravali.png' }],
    nearbyLocations: shaikpetKokapetCluster,
  },
  {
    slug: 'vyoma',
    name: 'NNK Vyoma',
    tagline: 'Building your Dream space with NNK in Hyderabad',
    image: '/assets/projects/vyoma.jpg',
    logo: '/assets/projects/logos/vyoma.png',
    status: 'ongoing',
    specs: { floors: 'Stilt + 5', bhk: '3 BHK', builtUp: 'Not Disclosed', plotArea: '895.77 sq yards', rera: 'P02500010632', approvalAuthority: 'GHMC', approvalNumber: '1751/GHMC/SWBP/KHB2/2025' },
    address: "Plot No's 48, 49 & 50, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008",
    gallery: galleryFor('vyoma', 1),
    floorPlans: [{ image: '/assets/projects/floorplans/vyoma.jpg', caption: '3 BHK · 1550 sft · East / North / West Facing' }],
  },
  {
    slug: 'vrindhavan',
    name: 'NNK Vrindhavan',
    tagline: '2 & 3 BHK Residences',
    image: '/assets/projects/vrindhavan.jpeg',
    logo: '/assets/projects/logos/vrindhavan.png',
    status: 'ongoing',
    specs: { floors: 'Stilt + 4', bhk: '2 & 3 BHK', builtUp: 'Not Disclosed', plotArea: '480 sq yards', approvalAuthority: 'GHMC', approvalNumber: '1324/GHMC/KHB/2025-BP' },
    address: 'Plot No 243 & 244P, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    gallery: galleryFor('vrindhavan', 1),
    floorPlans: [{ image: '/assets/projects/floorplans/vrindhavan.jpeg' }],
  },
  {
    slug: 'aarna',
    name: 'NNK Aarna',
    tagline: 'Luxurious 2 & 3 BHK Flats for Sale in Hyderabad',
    image: '/assets/projects/aarna.jpg',
    logo: '/assets/projects/logos/aarna.png',
    status: 'ongoing',
    specs: { floors: 'Cellar + Stilt + 5', bhk: '2 & 3 BHK', builtUp: '41,025 sq ft', plotArea: '2,046 sq yards', rera: 'P02500008386', approvalAuthority: 'GHMC', approvalNumber: '6041/GHMC/KHB/2024-BP' },
    address: 'Sy No 128 & 129, Ibrahimbagh, Next to Neknampur Lake, Narsingi, Hyderabad – 500 075',
    gallery: galleryFor('aarna', 2),
    floorPlans: [{ image: '/assets/projects/floorplans/aarna.jpeg' }],
    nearbyLocations: aarnaLocations,
  },
  {
    slug: 'varnam',
    name: 'NNK Varnam',
    tagline: 'Luxurious 2 & 3 BHK Flats',
    image: '/assets/projects/varnam.jpg',
    logo: '/assets/projects/logos/varnam.png',
    status: 'ongoing',
    specs: { floors: 'Stilt + 5', bhk: '2 BHK (1260 sft) & 3 BHK (1590 sft)', builtUp: '14,250 sq ft', plotArea: '480 sq yards', rera: 'P02500009104', approvalAuthority: 'GHMC', approvalNumber: '3034/GHMC/KHB/2024-BP' },
    address: 'Plot No 239 & 240, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    gallery: galleryFor('varnam', 2),
    floorPlans: [{ image: '/assets/projects/floorplans/varnam.png', caption: 'Unit 1 — 3 BHK · 1590 sft · East Facing  |  Unit 2 — 2 BHK · 1260 sft · West Facing' }],
    nearbyLocations: shaikpetKokapetCluster,
  },
  {
    slug: 'sia',
    name: 'NNK Sia',
    tagline: 'Building your Dream space with NNK in Hyderabad',
    image: '/assets/projects/sia.jpg',
    logo: '/assets/projects/logos/sia.svg',
    status: 'ongoing',
    specs: { floors: 'Stilt + 5', bhk: '2 BHK', builtUp: '10,400 sq ft', plotArea: '385 sq yards', rera: 'P02500009438', approvalAuthority: 'GHMC', approvalNumber: '6233/GHMC/KHB/2025-BP' },
    address: 'Plot No 136 & 137, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    gallery: galleryFor('sia', 1),
    floorPlans: [{ image: '/assets/projects/floorplans/sia.png' }],
    nearbyLocations: shaikpetKokapetCluster,
  },
  {
    slug: 'vindhya',
    name: 'NNK Vindhya',
    tagline: 'Building your Dream space with NNK in Hyderabad',
    image: '/assets/projects/vindhya.jpg',
    logo: '/assets/projects/logos/vindhya.svg',
    status: 'ongoing',
    specs: { floors: 'Stilt + 5', bhk: '2 & 3 BHK', builtUp: '14,550 sq ft', plotArea: '471.20 sq yards', rera: 'P02500009447', approvalAuthority: 'GHMC', approvalNumber: '4802/GHMC/KHB/2025-BP' },
    address: 'Plot No 243 & 244P, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    gallery: galleryFor('vindhya', 1),
    floorPlans: [{ image: '/assets/projects/floorplans/vindhya.png' }],
    nearbyLocations: shaikpetKokapetCluster,
  },
  {
    slug: 'madhumani-vilas',
    name: 'NNK Madhumani Vilas',
    tagline: 'Luxurious 2 & 3 BHK Flats for Sale in Hyderabad',
    image: '/assets/projects/madhumani-vilas.jpg',
    logo: '/assets/projects/logos/madhumani-vilas.png',
    status: 'ongoing',
    specs: { floors: 'Stilt + 5', bhk: '2 & 3 BHK', builtUp: '17,500 sq ft', plotArea: '692.76 sq yards', rera: 'P02500008626', approvalAuthority: 'GHMC', approvalNumber: '1996/GHMC/KHB/2024-BP' },
    address: 'H.No. 8-1-297/SN/224, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    gallery: galleryFor('madhumani-vilas', 4),
    floorPlans: [{ image: '/assets/projects/floorplans/madhumani-vilas.jpeg' }],
    nearbyLocations: shaikpetKokapetCluster,
  },

  // Completed
  {
    slug: 'amaya',
    name: 'NNK Amaya',
    tagline: '2.5 & 3 BHK Residences',
    image: '/assets/projects/amaya.jpg',
    logo: '/assets/projects/logos/amaya.svg',
    status: 'completed',
    specs: { floors: 'Stilt + 5', bhk: '2.5 & 3 BHK', builtUp: '14,550 sq ft', plotArea: '471.20 sq yards', rera: 'P02500008627', approvalAuthority: 'GHMC', approvalNumber: '2047/GHMC/KHB/2024-BP' },
    address: 'Plot No 248 & 249, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    gallery: galleryFor('amaya', 3),
    floorPlans: [{ image: '/assets/projects/floorplans/amaya.webp', caption: 'Unit 1 — 3 BHK · 1600 sft · East Facing  |  Unit 2 — 2.5 BHK · 1310 sft · West Facing' }],
    nearbyLocations: shaikpetKokapetCluster,
  },
  {
    slug: 'kavyam',
    name: 'NNK Kavyam',
    tagline: '2 & 3 BHK Residences',
    image: '/assets/projects/kavyam.webp',
    logo: '/assets/projects/logos/kavyam.svg',
    status: 'completed',
    specs: { floors: '5', bhk: '2 BHK, 3 BHK', builtUp: '15,425 sq ft', plotArea: '533.33 sq yards', rera: 'P02500008128', approvalAuthority: 'GHMC', approvalNumber: '5900/GHMC/KHB/2024-BP' },
    address: 'Plot No 248 & 249, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    gallery: galleryFor('kavyam', 2),
    floorPlans: [{ image: '/assets/projects/floorplans/kavyam.jpg', caption: 'Unit 1 — 3 BHK · 1730 sft · East Facing  |  Unit 2 — 2 BHK · 1355 sft · West Facing' }],
    nearbyLocations: shaikpetKokapetCluster,
  },
  {
    slug: 'kiara',
    name: 'NNK Kiara',
    tagline: '2 & 3 BHK Residences',
    image: '/assets/projects/kiara.webp',
    logo: '/assets/projects/logos/kiara.webp',
    status: 'completed',
    specs: { floors: '5', bhk: '2 & 3 BHK', builtUp: '14,900 sq ft', plotArea: '533.33 sq yards', rera: 'P02500008129', approvalAuthority: 'GHMC', approvalNumber: '5898/GHMC/KHB/2024-BP' },
    address: 'Plot No 246 & 247, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    gallery: galleryFor('kiara', 1),
    floorPlans: [{ image: '/assets/projects/floorplans/kiara.webp', caption: 'Unit 2 — 3 BHK · 1740 sft · East Facing  |  Unit 1 — 2 BHK · 1240 sft · West Facing' }],
    nearbyLocations: shaikpetKokapetCluster,
  },
  {
    slug: 'myra',
    name: 'NNK Myra',
    tagline: '2.5 BHK Residences',
    image: '/assets/projects/myra.webp',
    logo: '/assets/projects/logos/myra.png',
    status: 'completed',
    specs: { floors: '5', bhk: '2.5 BHK', builtUp: '14,250 sq ft', plotArea: '466.66 sq yards', rera: 'P02500008164', approvalAuthority: 'GHMC', approvalNumber: '5893/GHMC/KHB/2024-BP' },
    address: 'Plot No 239 & 240, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    gallery: galleryFor('myra', 8),
    floorPlans: [{ image: '/assets/projects/floorplans/myra.jpeg', caption: 'Unit 2 — 2.5 BHK · 1440 sft · East Facing  |  Unit 1 — 2.5 BHK · 1410 sft · West Facing' }],
    nearbyLocations: shaikpetKokapetCluster,
  },
  {
    slug: 'avani',
    name: 'NNK Avani',
    tagline: 'Building your Dream space with NNK in Hyderabad',
    image: '/assets/projects/avani.jpg',
    logo: '/assets/projects/logos/avani.png',
    status: 'completed',
    specs: { floors: '5', bhk: '2 & 3 BHK', builtUp: '50,000 sq ft', plotArea: '2,088 sq yards', rera: 'P02500006358', approvalAuthority: 'GHMC', approvalNumber: '5787/GHMC/KHB/2023-BP' },
    address: 'H.No. 8-1-297/SN/224, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    gallery: galleryFor('avani', 2),
    floorPlans: [{ image: '/assets/projects/floorplans/avani.jpg' }],
  },
  {
    slug: 'gokula',
    name: 'NNK Gokula',
    tagline: '2 & 3 BHK Residences',
    image: '/assets/projects/gokula.webp',
    logo: '/assets/projects/logos/gokula.webp',
    status: 'completed',
    specs: { floors: '5', bhk: '2 & 3 BHK', builtUp: 'Not Disclosed', plotArea: '533.33 sq yards', rera: 'P02500008163', approvalAuthority: 'GHMC', approvalNumber: '5571/GHMC/KHB/2024-BP' },
    address: 'Plot No 233 & 234, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    gallery: galleryFor('gokula', 2),
    floorPlans: [{ image: '/assets/projects/floorplans/gokula.webp', caption: 'Unit 1 — 3 BHK · 1715 sft · East Facing  |  Unit 2 — 2 BHK · 1200 sft · West Facing' }],
    nearbyLocations: shaikpetKokapetCluster,
  },
  {
    slug: 'amodha',
    name: 'NNK Amodha',
    tagline: '2 & 3 BHK Residences',
    image: '/assets/projects/amodha.jpg',
    logo: '/assets/projects/logos/amodha.png',
    status: 'completed',
    specs: { floors: '5', bhk: '2 & 3 BHK', builtUp: '20,550 sq ft', plotArea: '865 sq yards', rera: 'P02500005825', approvalAuthority: 'GHMC', approvalNumber: '4756/GHMC/KHB/2022-BP' },
    address: 'H.No. 8-1-297/SN/224, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    gallery: galleryFor('amodha', 2),
    floorPlans: [{ image: '/assets/projects/floorplans/amodha.jpg' }],
    nearbyLocations: khajagudaCluster,
  },
  {
    slug: 'raaga',
    name: 'NNK Raaga',
    tagline: '2 & 3 BHK Residences',
    image: '/assets/projects/raaga.jpg',
    logo: '/assets/projects/logos/raaga.png',
    status: 'completed',
    specs: { floors: 'Not Disclosed', bhk: '2 & 3 BHK', builtUp: '13,250 sq ft', plotArea: '603 sq yards', rera: 'P02500005280', approvalAuthority: 'GHMC', approvalNumber: '2824/GHMC/KHB/2022-BP' },
    address: 'H.No. 8-1-297/SN/224, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    gallery: [],
    floorPlans: [{ image: '/assets/projects/floorplans/raaga.jpg' }],
    nearbyLocations: khajagudaCluster,
  },
  {
    slug: 'bhooma',
    name: 'NNK Bhooma',
    tagline: '3 BHK Residences',
    image: '/assets/projects/bhooma.jpg',
    logo: '/assets/projects/logos/bhooma.png',
    status: 'completed',
    specs: { floors: '5', bhk: '3 BHK', builtUp: '10,250 sq ft', plotArea: '368 sq yards', approvalAuthority: 'GHMC', approvalNumber: '008603/GHMC/4242/KHB2/2022-BP' },
    address: 'H.No. 8-1-297/SN/224, Sakkubai Nagar, Shaikpet, Hyderabad – 500 008',
    gallery: [],
    floorPlans: [{ image: '/assets/projects/floorplans/bhooma.jpg' }],
    nearbyLocations: khajagudaCluster,
  },
];

export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return projects.filter((project) => project.status === status);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function projectPath(project: Project): string {
  return `/projects/${project.slug}`;
}
