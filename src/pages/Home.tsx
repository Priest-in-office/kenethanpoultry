import Hero from '../components/home/Hero';
import StatsBar from '../components/home/StatsBar';
import ProductShowcase from '../components/home/ProductShowcase';
import OurPromise from '../components/home/OurPromise';
import FarmJourney from '../components/home/FarmJourney';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

export default function Home() {
  return (
    <main id="home-page">
      <Hero />
      <StatsBar />
      <ProductShowcase />
      <OurPromise />
      <FarmJourney />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
