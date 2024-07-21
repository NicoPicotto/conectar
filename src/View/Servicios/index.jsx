import Prestaciones from "../../Components/Servicios/Prestaciones";
import Normas from "../../Components/Home/Normas";
import SpacerTop from "../../Components/Spacers/spacerTop";
import SpacerBottom from "../../Components/Spacers/spacerBottom";
import Contacto from "../../Components/Home/Contacto";

const ServiciosView = () => {
   return (
      <>
         <Prestaciones />
         <SpacerTop />
         <Normas bgColor="negroOscuro"/>
         <SpacerBottom />
         <Contacto />
      </>
   );
};

export default ServiciosView;
