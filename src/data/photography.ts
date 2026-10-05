import { REAL_IMAGES } from '../assets/images';

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  label: 'Wedding' | 'Couple' | 'Family' | 'Kids' | 'Event' | 'Creative';
  orientation: 'landscape' | 'portrait';
  aspectRatio: string;
  src: string;
  filename: string;
  alt: string;
  description: string;
  location: string;
}

export interface ReviewItem {
  id: string;
  reviewer: string;
  rating: number;
  quote: string;
  verified: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  suitableFor: string;
  featuredImage: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
}

export const BUSINESS_INFO = {
  name: 'Lumina Coast Photography',
  hindiName: 'ल्यूमिना कोस्ट फोटोग्राफी',
  tagline: 'Capturing Your Best Moments in India',
  category: 'Photographer',
  locationBrief: 'Calangute • Candolim • India',
  fullAddress: 'Villa 14, Sunset Coast Promenade, Near Lighthouse Road, Sinquerim, Candolim, India 403515',
  plusCode: 'FP5R+8M Candolim, India',
  phoneDisplay: '+91 98765 43210',
  phoneCall: '+919876543210',
  telLink: 'tel:+919876543210',
  whatsappUrl: 'https://wa.me/919876543210?text=Hello%20Lumina%20Coast%20Photography,%20I%20would%20like%20to%20enquire%20about%20a%20photoshoot%20booking%20in%20India.',
  instagramUrl: 'https://instagram.com/luminacoast.India',
  instagramHandle: '@luminacoast.India',
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Sinquerim+Candolim+India',
  rating: '5.0',
  reviewCount: 532,
  status: 'Open · Closes 8 PM',
  reviewKeywords: [
    'India photographer',
    'Wedding photography',
    'Professional team',
    'Friendly staff',
    'Creative work',
    'Quality photography',
    'Beautiful lighting',
    'Attention to detail',
  ],
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'photo-9',
    title: 'Ivory & Gold Wedding Couple with Bougainvillea',
    category: 'Wedding Photography',
    label: 'Wedding',
    orientation: 'landscape',
    aspectRatio: '4/3',
    src: REAL_IMAGES.weddingBougainvillea,
    filename: 'Screenshot 2026-10-04 162906.png',
    alt: 'Traditional Indian wedding couple in ivory and gold embroidered sherwani and bridal veil smiling tenderly behind vibrant pink bougainvillea flowers in India',
    description: 'Tender romantic intimacy and timeless bridal craftsmanship framed by natural coastal bougainvillea blooms.',
    location: 'Garden Lawn, North India',
  },
  {
    id: 'photo-15',
    title: 'Sunset Maternity Shoreline Twirl',
    category: 'Couple & Love Shoots',
    label: 'Couple',
    orientation: 'landscape',
    aspectRatio: '4/3',
    src: REAL_IMAGES.maternityCoupleBeach,
    filename: 'Screenshot 2026-10-04 173617.png',
    alt: 'Expecting couple dancing lovingly on India beach shoreline, pregnant mother in off-shoulder white tulle gown holding baby bump while holding partner hand',
    description: 'Gentle, joyful maternity celebration amidst the soft rolling waves and soothing coastal breeze.',
    location: 'Candolim Sunset Shoreline',
  },
  {
    id: 'photo-3',
    title: 'Golden Sunset Shoreline with Sunflowers',
    category: 'Couple & Love Shoots',
    label: 'Couple',
    orientation: 'landscape',
    aspectRatio: '4/3',
    src: REAL_IMAGES.coupleSunflowers,
    filename: 'Screenshot 2026-10-04 162812.png',
    alt: 'Happy couple embracing on India beach, man in pink linen shirt, woman in purple sleeveless dress with windblown hair holding a bright yellow sunflower bouquet',
    description: 'Unforced connection and genuine joy against the calm Arabian Sea breeze.',
    location: 'Calangute & Baga Beach',
  },
  {
    id: 'photo-13',
    title: 'Sunlit Butterfly Fashion Editorial',
    category: 'Modeling & Creative',
    label: 'Creative',
    orientation: 'portrait',
    aspectRatio: '3/4',
    src: REAL_IMAGES.editorialButterflies,
    filename: 'Screenshot 2026-10-04 173717.png',
    alt: 'Editorial fashion portrait of model seated in coastal tall grass wrapped in sheer white tulle with colorful handcrafted butterflies on face and collar',
    description: 'High-concept nature editorial combining organic coastal textures and delicate surrealism.',
    location: 'Coastal Meadow, North India',
  },
  {
    id: 'photo-14',
    title: 'Boho Feather Beach Festival Portrait',
    category: 'Modeling & Creative',
    label: 'Creative',
    orientation: 'portrait',
    aspectRatio: '3/4',
    src: REAL_IMAGES.beachFestivalAngel,
    filename: 'Screenshot 2026-10-04 173654.png',
    alt: 'Portrait of blonde woman in boho feathered white festival angel costume and silver face glitter amidst a sunset beach crowd in India',
    description: 'Vibrant India festival culture, free-spirited bohemian styling, and golden hour coastal light.',
    location: 'Arambol & Vagator Beach Festival',
  },
  {
    id: 'photo-2',
    title: 'Artistic Ocean Wind Movement (B&W)',
    category: 'Modeling & Creative',
    label: 'Creative',
    orientation: 'landscape',
    aspectRatio: '4/3',
    src: REAL_IMAGES.bwDanceEditorial,
    filename: 'Screenshot 2026-10-04 162933.png',
    alt: 'Black and white dramatic dancer in deep backbend arch on India beach with sheer flowing fabric billowing in the wind like wings',
    description: 'High-fashion editorial movement capturing the powerful coastal breeze and sculptural human form.',
    location: 'Coastal Rock Formations',
  },
  {
    id: 'photo-7',
    title: 'Ethereal Purple Smoke on River Boulders',
    category: 'Couple & Love Shoots',
    label: 'Couple',
    orientation: 'landscape',
    aspectRatio: '4/3',
    src: REAL_IMAGES.couplePurpleSmoke,
    filename: 'Screenshot 2026-10-04 163129.png',
    alt: 'Romantic couple on rocky riverbed boulders surrounded by mystical purple smoke mist, man in blue striped shirt and woman in rust silk saree',
    description: 'Dramatic pre-wedding storytelling with rich cinematic tones and magical atmosphere.',
    location: 'India Coastal Forest & Riverbed',
  },
  {
    id: 'photo-5',
    title: 'Boho Macrame 1st Birthday Beach Teepee',
    category: 'Special Moments & Birthdays',
    label: 'Event',
    orientation: 'landscape',
    aspectRatio: '4/3',
    src: REAL_IMAGES.birthdayTeepeeSetup,
    filename: 'Screenshot 2026-10-04 162819.png',
    alt: 'Beachside 1st birthday event setup in India with boho macrame teepee, glowing neon Happy Birthday sign, balloon garland, marquee number 1, florals and smiling baby boy',
    description: 'Curated beach setups with fairy lights, pampas grass, custom neon typography and marquee lights.',
    location: 'Private Beach Setup, India',
  },
  {
    id: 'photo-6',
    title: 'Sunset Family Birthday Celebration',
    category: 'Special Moments & Birthdays',
    label: 'Event',
    orientation: 'portrait',
    aspectRatio: '3/4',
    src: REAL_IMAGES.familyBirthdaySunset,
    filename: 'Screenshot 2026-10-04 163115.png',
    alt: 'Sunset family celebration with parents holding birthday baby boy over a custom cake with glowing neon sign under twilight purple-pink India sky',
    description: 'Heartwarming family milestones captured under the soft glow of India’s sunset and neon lights.',
    location: 'Sunset Beach Gathering, India',
  },
  {
    id: 'photo-4',
    title: 'Joyful Clapping with Beach Teddy Bears',
    category: 'Baby & Kids Photography',
    label: 'Kids',
    orientation: 'landscape',
    aspectRatio: '4/3',
    src: REAL_IMAGES.babyTeddyBears,
    filename: 'Screenshot 2026-10-04 163042.png',
    alt: 'Smiling baby boy in light blue romper clapping joyfully on green coastal beach creeper vines between two plush teddy bears in India',
    description: 'Pure spontaneous childhood joy framed by lush coastal greenery and sunny shores.',
    location: 'Coastal Greens, India',
  },
  {
    id: 'photo-8',
    title: 'Father & Son in Crisp White Linen',
    category: 'India Photoshoots & Family',
    label: 'Family',
    orientation: 'landscape',
    aspectRatio: '4/3',
    src: REAL_IMAGES.fatherSonBeach,
    filename: 'Screenshot 2026-10-04 162850.png',
    alt: 'Bearded father with bald head and dark sunglasses holding his young toddler son in matching white linen shirts on a sunny India beach with turquoise waves',
    description: 'Clean, timeless father-son connection under bright coastal sunshine and sparkling turquoise waves.',
    location: 'Calangute Beach Waters',
  },
  {
    id: 'photo-10',
    title: 'Mother & Daughter Shoreline Walk in White Tulle',
    category: 'India Photoshoots & Family',
    label: 'Family',
    orientation: 'landscape',
    aspectRatio: '4/3',
    src: REAL_IMAGES.motherDaughterBeach,
    filename: 'Screenshot 2026-10-04 162833.png',
    alt: 'Mother and young daughter walking hand-in-hand along India beach shoreline in matching off-shoulder white tulle dresses with ocean waves',
    description: 'Candid vacation memories walking hand-in-hand along the tide line at sunset.',
    location: 'Sunset Shoreline Promenade',
  },
  {
    id: 'photo-11',
    title: 'Baby Girl Beach Blanket & Balloons',
    category: 'Baby & Kids Photography',
    label: 'Kids',
    orientation: 'landscape',
    aspectRatio: '4/3',
    src: REAL_IMAGES.babyGirlBalloons,
    filename: 'Screenshot 2026-10-04 162243.png',
    alt: 'Baby girl in light pink dress on beach blanket with colorful balloons, disco balls and plush octopus toy on sunny sand',
    description: 'Delightful milestone celebration with pastel balloons and seaside toys.',
    location: 'Sinquerim Beach Sands',
  },
  {
    id: 'photo-12',
    title: 'Portrait with Sunflowers & Coastal Glow',
    category: 'Modeling & Creative',
    label: 'Creative',
    orientation: 'portrait',
    aspectRatio: '3/4',
    src: REAL_IMAGES.girlSunflowers,
    filename: 'Screenshot 2026-10-04 162858.png',
    alt: 'Young woman in eyeglasses and white dress holding a fresh bouquet of bright yellow sunflowers in golden coastal sunlight',
    description: 'Gentle, expressive portraiture illuminated by golden coastal warmth and fresh sunflowers.',
    location: 'India Countryside Fields',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'wedding',
    title: 'Wedding Photography',
    description: 'Capture the emotions, details and unforgettable moments of your special day.',
    suitableFor: 'Destination weddings, beach pheras, intimate ceremonies, sangeet & reception evenings',
    featuredImage: REAL_IMAGES.weddingBougainvillea,
  },
  {
    id: 'couple',
    title: 'Couple & Maternity Shoots',
    description: 'Natural and expressive photos for couples, maternity celebrations, and love stories.',
    suitableFor: 'Pre-wedding shoots, beach maternity sessions, proposals, sunflower sessions & creative concepts',
    featuredImage: REAL_IMAGES.maternityCoupleBeach,
  },
  {
    id: 'family',
    title: 'Family & Shoreline Walks',
    description: 'Warm, candid family photography capturing real laughter and golden coastal light.',
    suitableFor: 'Sunset beach walks, multi-generation reunions, holiday portraits & father-son memories',
    featuredImage: REAL_IMAGES.motherDaughterBeach,
  },
  {
    id: 'kids-baby',
    title: 'Baby & Kids Photography',
    description: 'Comfortable, joyful milestone shoots with customized balloons, toys and gentle pacing.',
    suitableFor: '6-month milestones, toddler celebrations, beach picnic setups & playful candid moments',
    featuredImage: REAL_IMAGES.babyTeddyBears,
  },
  {
    id: 'birthday-events',
    title: '1st Birthdays & Special Events',
    description: 'Custom beachside setups with boho macrame teepees, glowing neon signs and marquee lights.',
    suitableFor: '1st birthday cake smashes, intimate beach gatherings, dinner celebrations & anniversaries',
    featuredImage: REAL_IMAGES.birthdayTeepeeSetup,
  },
  {
    id: 'creative-editorial',
    title: 'Modeling, Fashion & Festivals',
    description: 'Artistic butterfly concepts, boho festival aesthetics, and high-fashion movement direction.',
    suitableFor: 'Fashion lookbooks, festival styling, personal branding, dance portfolios & creative portraits',
    featuredImage: REAL_IMAGES.editorialButterflies,
  },
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: 'creative-direction',
    title: 'Creative Direction',
    description: 'Helping you find natural poses, angles and compositions without stiff or forced poses.',
  },
  {
    id: 'beautiful-lighting',
    title: 'Beautiful Lighting',
    description: 'Mastery of warm India golden hour, flattering open shade, and cinematic neon accents.',
  },
  {
    id: 'friendly-experience',
    title: 'Friendly Experience',
    description: 'Patient, comfortable guidance especially for kids, babies and people new to photoshoots.',
  },
  {
    id: 'attention-to-detail',
    title: 'Attention to Detail',
    description: 'Careful focus on candid laughter, delicate fabrics, bouquets, decor and sunset timing.',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'review-1',
    reviewer: 'Темиренко Ю',
    rating: 5,
    quote: '“I’m really impressed by your work! I have no words to explain my feelings during of watching photo shooting results. You knew how to present me in beautiful light, backstage, position and all the time your were focusing on the best ways of…”',
    verified: true,
  },
  {
    id: 'review-2',
    reviewer: 'Shanta Chakpram',
    rating: 5,
    quote: '“The team was amazing. We had zero experience of photoshoots but they were so supportive and creative with their craft. They guided us and showed us different natural poses in which we looked our best. No doubt the end results were stunning…”',
    verified: true,
  },
  {
    id: 'review-3',
    reviewer: 'Sunil Sangtani',
    rating: 5,
    quote: '“Absolutely amazing work, every photo beautifully captured the emotions and memories of our special day. Thank you for giving us memories we\'ll cherish forever. Highly recommended.”',
    verified: true,
  },
];
