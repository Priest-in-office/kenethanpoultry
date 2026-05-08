import { useReveal } from '../hooks/useReveal';
import { useScrollState } from '../hooks/useScrollState';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Strip from '../components/home/Strip';
import Livestock from '../components/home/Livestock';
import Shop from '../components/home/Shop';
import Wholesale from '../components/home/Wholesale';
import Gallery from '../components/home/Gallery';
import FAQ from '../components/home/FAQ';
import Contact from '../components/home/Contact';

export default function Home() {
  useReveal();
  const { scrolled, active } = useScrollState();

  return (
    <>
      <Navbar active={active} scrolled={scrolled} />
      <main>
        <Hero />
        <Strip />
        <Livestock />
        <Shop />
        <Wholesale />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
