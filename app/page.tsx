import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/HeroSection";
import Withdrawal from "@/components/withdrawal/Withdrawal";
import Navigation from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <div className=" bg-black">
      <HeroSection />
      <Navigation/> 
   .  <Withdrawal/>
      <Footer />
    </div>
  );
}
