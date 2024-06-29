import { useEffect } from "react";
import { Stack, Heading, Text, Button, Image } from "@chakra-ui/react";
import HeroSection from "../../Components/Home/Hero";
import SpacerTop from "../../Components/Spacers/spacerTop";
import PasosSection from "../../Components/Home/Pasos";
import SpacerBottom from "../../Components/Spacers/spacerBottom";

const HomeView = () => {
   return (
      <>
         <HeroSection />
         <SpacerTop />

         <PasosSection />

         <SpacerBottom />
         <Stack
            align='center'
            paddingInline='2rem'
            position='relative'
            overflowX='hidden'
         >
            <HeroSection />
         </Stack>
      </>
   );
};

export default HomeView;
