import SpacerBottom from "../../Components/Spacers/spacerBottom";
import Faq from "../../Components/Home/FAQ";
import Contacto from "../../Components/Home/Contacto";
import SpacerTop from "../../Components/Spacers/spacerTop";

const FAQView = () => {
   return (
      <>
        <SpacerTop espejado={true} />
         <Faq />
         <SpacerBottom />
         <Contacto />
      </>
   );
};

export default FAQView;
