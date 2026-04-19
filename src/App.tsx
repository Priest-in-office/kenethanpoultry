import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/shared/SmoothScroll';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import FarmStory from './pages/FarmStory';
import Sustainability from './pages/Sustainability';
import Locations from './pages/Locations';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/farm-story" element={<FarmStory />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </SmoothScroll>
    </BrowserRouter>
  );
}
