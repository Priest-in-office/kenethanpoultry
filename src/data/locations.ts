export interface FarmLocation {
  id: string;
  name: string;
  location: string;
  country: string;
  capacity: string;
  specialty: string;
  coordinates: { lat: number; lng: number };
}

export const farmLocations: FarmLocation[] = [
  {
    id: 'hq-farm',
    name: 'Ken Ethan Heritage Farm',
    location: 'Ogun State',
    country: 'Nigeria',
    capacity: '500,000 birds',
    specialty: 'Heritage Breeds & Organic Free-Range',
    coordinates: { lat: 7.1604, lng: 3.3482 },
  },
  {
    id: 'midwest-farm',
    name: 'Great Plains Processing',
    location: 'Iowa',
    country: 'United States',
    capacity: '1,200,000 birds',
    specialty: 'Value-Added Products & Export Hub',
    coordinates: { lat: 41.878, lng: -93.098 },
  },
  {
    id: 'europe-farm',
    name: 'Green Valley Farm',
    location: 'Normandy',
    country: 'France',
    capacity: '350,000 birds',
    specialty: 'European Market & Organic Certification',
    coordinates: { lat: 49.1829, lng: -0.3707 },
  },
  {
    id: 'uae-hub',
    name: 'Gulf Distribution Center',
    location: 'Dubai',
    country: 'UAE',
    capacity: 'Cold Chain Hub',
    specialty: 'Middle East & Asia Distribution',
    coordinates: { lat: 25.2048, lng: 55.2708 },
  },
  {
    id: 'brazil-farm',
    name: 'Fazenda Ken Ethan',
    location: 'Paraná',
    country: 'Brazil',
    capacity: '800,000 birds',
    specialty: 'South American Market & Grain-Fed',
    coordinates: { lat: -25.4284, lng: -49.2733 },
  },
];

export const distributionRegions = [
  { region: 'Africa', countries: 15, partners: 45 },
  { region: 'Europe', countries: 12, partners: 38 },
  { region: 'North America', countries: 3, partners: 22 },
  { region: 'Middle East', countries: 8, partners: 30 },
  { region: 'Asia Pacific', countries: 10, partners: 25 },
  { region: 'South America', countries: 5, partners: 18 },
];
