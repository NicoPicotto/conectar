import HeroSection from "../../Components/Home/Hero";
import SpacerTop from "../../Components/Spacers/spacerTop";
import PasosSection from "../../Components/Home/Pasos";
import SpacerBottom from "../../Components/Spacers/spacerBottom";
import Normas from "../../Components/Home/Normas";
import Faq from "../../Components/Home/FAQ";
import Contacto from "../../Components/Home/Contacto";

const HomeView = () => {
   return (
      <>
         <HeroSection />
         <SpacerTop />
         <PasosSection />
         <SpacerBottom />
         <Normas />
         <SpacerTop />
         <Faq />
         <SpacerBottom />
         <Contacto />
      </>
   );
};

export default HomeView;
