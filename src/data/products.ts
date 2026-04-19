import productsChicken from '../assets/images/products-chicken.png';
import productsEggs from '../assets/images/products-eggs.png';
import wholeChicken from '../assets/images/whole-chicken.png';

export interface Product {
  id: string;
  name: string;
  category: 'whole' | 'cuts' | 'eggs' | 'processed';
  description: string;
  weight?: string;
  badges: string[];
  image: string;
}

export const categories = [
  { id: 'whole', label: 'Whole Chicken' },
  { id: 'cuts', label: 'Premium Cuts' },
  { id: 'eggs', label: 'Farm Eggs' },
  { id: 'processed', label: 'Value-Added' },
] as const;

export const products: Product[] = [
  {
    id: 'whole-heritage',
    name: 'Heritage Whole Chicken',
    category: 'whole',
    description: 'Free-range heritage breed, slow-grown for exceptional flavor and tender texture. No antibiotics, no hormones — ever.',
    weight: '1.5 – 2.2 kg',
    badges: ['Free-Range', 'Antibiotic-Free', 'Halal'],
    image: wholeChicken,
  },
  {
    id: 'whole-organic',
    name: 'Organic Whole Chicken',
    category: 'whole',
    description: 'Certified organic, fed with 100% organic grain. Raised on open pastures with room to roam, peck, and thrive.',
    weight: '1.4 – 2.0 kg',
    badges: ['Organic', 'Free-Range', 'Halal'],
    image: wholeChicken,
  },
  {
    id: 'breast-boneless',
    name: 'Boneless Breast Fillets',
    category: 'cuts',
    description: 'Hand-trimmed boneless, skinless breast fillets. Our most popular cut — lean, versatile, and incredibly tender.',
    weight: '500g / 1kg',
    badges: ['Antibiotic-Free', 'High Protein'],
    image: productsChicken,
  },
  {
    id: 'thigh-bone-in',
    name: 'Bone-In Thigh Cuts',
    category: 'cuts',
    description: 'Rich, succulent thigh cuts with bone-in for maximum flavor. Perfect for grilling, roasting, or slow-cooking.',
    weight: '500g / 1kg',
    badges: ['Free-Range', 'Halal'],
    image: productsChicken,
  },
  {
    id: 'drumsticks',
    name: 'Premium Drumsticks',
    category: 'cuts',
    description: 'Plump, juicy drumsticks from pasture-raised birds. A family favorite, packed with natural flavor.',
    weight: '1kg pack',
    badges: ['Free-Range', 'Antibiotic-Free'],
    image: productsChicken,
  },
  {
    id: 'wings-whole',
    name: 'Whole Wings',
    category: 'cuts',
    description: 'Crispy on the outside, tender on the inside. Our whole wings are perfect for smoking, frying, or baking.',
    weight: '1kg pack',
    badges: ['Free-Range', 'Halal'],
    image: productsChicken,
  },
  {
    id: 'eggs-free-range',
    name: 'Free-Range Farm Eggs',
    category: 'eggs',
    description: 'Rich golden yolks from hens that roam freely on lush pastures. Noticeably richer in color and flavor.',
    weight: '12-pack / 30-pack',
    badges: ['Free-Range', 'Omega-3 Enriched'],
    image: productsEggs,
  },
  {
    id: 'eggs-organic',
    name: 'Organic Pasture Eggs',
    category: 'eggs',
    description: 'Certified organic eggs from hens fed 100% organic feed. The gold standard of farm-fresh eggs.',
    weight: '12-pack / 30-pack',
    badges: ['Organic', 'Free-Range', 'Vitamin D'],
    image: productsEggs,
  },
  {
    id: 'sausages',
    name: 'Chicken Sausages',
    category: 'processed',
    description: 'Handcrafted chicken sausages made with premium breast meat, fresh herbs, and natural spices. No fillers, no preservatives.',
    weight: '500g (6 links)',
    badges: ['No Preservatives', 'Gluten-Free'],
    image: productsChicken,
  },
  {
    id: 'nuggets',
    name: 'Breaded Chicken Nuggets',
    category: 'processed',
    description: 'Kid-approved, parent-trusted. Made from 100% breast meat with a light, crispy whole-grain coating.',
    weight: '500g',
    badges: ['Whole Grain', 'No Artificial Colors'],
    image: productsChicken,
  },
];
