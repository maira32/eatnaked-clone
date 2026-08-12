import Navbar from './components/Navbar';
import SideProgressNav from './components/SideProgressNav';
import Hero from './components/Hero';
import DeliveryTruckSection from './components/DeliveryTruckSection';
import Goals from './components/Goals';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <SideProgressNav />
      <Hero />
      <DeliveryTruckSection />
      <Goals />
    </main>
  );
}