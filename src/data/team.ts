export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    id: 'ken-founder',
    name: 'Kenneth Okafor',
    role: 'Founder & CEO',
    bio: 'A visionary agricultural entrepreneur with over 30 years of experience in sustainable poultry farming. Kenneth founded Ken Ethan Poultry with a dream to bring farm-raised excellence to every table across the globe.',
  },
  {
    id: 'ethan-coo',
    name: 'Ethan Williams',
    role: 'Co-Founder & COO',
    bio: 'Ethan oversees global operations and supply chain management, ensuring our products reach 50+ countries with uncompromised freshness and quality.',
  },
  {
    id: 'dr-aisha',
    name: 'Dr. Aisha Bello',
    role: 'Chief Veterinary Officer',
    bio: 'Leading our animal welfare and health program, Dr. Aisha ensures every bird is raised humanely with the highest standards of veterinary care.',
  },
  {
    id: 'james-cto',
    name: 'James Chen',
    role: 'Chief Technology Officer',
    bio: 'James drives innovation across our smart farming operations, integrating IoT sensors, AI-driven feed optimization, and blockchain traceability.',
  },
  {
    id: 'sarah-sustainability',
    name: 'Sarah Greenfield',
    role: 'Head of Sustainability',
    bio: 'Sarah leads our environmental initiatives, from renewable energy adoption to zero-waste processing, keeping our carbon footprint minimal.',
  },
  {
    id: 'david-commercial',
    name: 'David Osei',
    role: 'VP of Global Sales',
    bio: 'David manages partnerships with retailers, restaurants, and distributors across five continents, growing our global footprint year over year.',
  },
];
