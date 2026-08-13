import Navbar from './components/Navbar';
import SideProgressNav from './components/SideProgressNav';
import Hero from './components/Hero';
import DeliveryTruckSection from './components/DeliveryTruckSection';
import Goals from './components/Goals';
import ReadySection from './components/ReadySection';


export default function HomePage() {
  return (
    <main>
      <Navbar />
      <SideProgressNav />
      <Hero />
      <DeliveryTruckSection />
      <Goals />
      <ReadySection/>
    </main>
  );
}