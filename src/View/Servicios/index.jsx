import Prestaciones from "../../Components/Servicios/Prestaciones";
import Normas from "../../Components/Home/Normas";
import SpacerTop from "../../Components/Spacers/spacerTop";
import SpacerBottom from "../../Components/Spacers/spacerBottom";
import Contacto from "../../Components/Home/Contacto";
import PasosExtended from "../../Components/Servicios/PasosExpanded";
import DownloadPolicy from "../../Components/Servicios/DownloadPolicy";

const ServiciosView = () => {
   return (
      <>
         <Prestaciones />
         <SpacerTop />
         <PasosExtended />
         <DownloadPolicy />
         <Normas bgColor='negroOscuro' />
         <SpacerBottom />
         <Contacto />
      </>
   );
};

export default ServiciosView;
