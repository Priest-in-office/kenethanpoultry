export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: 'Ken Ethan Poultry has been our exclusive supplier for five years. The consistency, quality, and freshness of their products is simply unmatched in the industry.',
    author: 'Chef Marcus Laurent',
    role: 'Executive Chef',
    company: 'The Grand Reserve, London',
  },
  {
    id: 't2',
    quote: 'As a retailer serving millions of customers, we need partners we can trust. Ken Ethan delivers — every time, without fail. Their farm-to-shelf traceability gives our customers confidence.',
    author: 'Amara Okonkwo',
    role: 'Head of Fresh Foods',
    company: 'Continental Grocers',
  },
  {
    id: 't3',
    quote: 'The organic free-range eggs are extraordinary. The rich, golden yolks speak for themselves. My customers can taste the difference from the very first bite.',
    author: 'Yuki Tanaka',
    role: 'Owner & Head Baker',
    company: 'Sunrise Bakery, Tokyo',
  },
  {
    id: 't4',
    quote: 'Their commitment to sustainability isn\'t just marketing — it\'s real. We\'ve audited their operations and they exceed every environmental standard we set.',
    author: 'Dr. Elena Vasquez',
    role: 'Sustainability Director',
    company: 'Global Food Standards Institute',
  },
  {
    id: 't5',
    quote: 'Switching to Ken Ethan was the best decision for our restaurant group. The antibiotic-free chicken has elevated our menu and our customers notice the quality immediately.',
    author: 'Ibrahim Al-Rashid',
    role: 'Managing Director',
    company: 'Saveur Restaurant Group, Dubai',
  },
];
