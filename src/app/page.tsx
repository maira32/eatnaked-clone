import Navbar from './components/Navbar';
import SideProgressNav from './components/SideProgressNav';
import Hero from './components/Hero';
import DeliveryTruckSection from './components/DeliveryTruckSection';
import Goals from './components/Goals';
import LifestyleSection from './components/LifestyleSection';
import IngredientsSection from './components/IngredientsSection';
import OurFamilySection from './components/OurFamilySection';
import ReadySection from './components/ReadySection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <SideProgressNav />
      <Hero />
      <DeliveryTruckSection />
      <Goals />
      <LifestyleSection/>
      <IngredientsSection/>
      <OurFamilySection/>
      <ReadySection/>
      <Footer/>
    </main>
  );
}