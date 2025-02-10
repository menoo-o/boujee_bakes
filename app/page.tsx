
import Marquee from "@/components/marquee/Marquee";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/hero/Hero";
import FlavorsSection from "@/components/flavors/FlavorBox";
import BoxSection from "@/components/BoxOptions/Box";
import WhyChoose from "@/components/WhyBoujee/WhyChoose";
import LookingFor from "@/components/Looking/LookingFor";
import EmailSubscription from "@/components/Email/EmailSubscription";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <>
        <Marquee />
        <Navbar />
        <Hero />
        <FlavorsSection />
        <BoxSection />
        <WhyChoose />
    
    </> 
  );
}
