import HumandHero from "../../Components/Humand/HumandHero";
import HumandFeatures from "../../Components/Humand/HumandFeatures";
import HumandPartner from "../../Components/Humand/HumandPartner";
import SpacerTop from "../../Components/Spacers/spacerTop";
import SpacerBottom from "../../Components/Spacers/spacerBottom";
import Contacto from "../../Components/Home/Contacto";

const HumandView = () => {
   return (
      <>
         <HumandHero />
         <SpacerTop />
         <HumandFeatures />
         <HumandPartner />
         <SpacerBottom />
         <Contacto  />
      </>
   );
};

export default HumandView;
