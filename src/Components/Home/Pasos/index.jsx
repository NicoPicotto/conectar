import {
   Stack,
   Heading,
   Highlight,
   SimpleGrid,
   useMediaQuery,
} from "@chakra-ui/react";
import PasosCard from "./PasosCard";

const PasosSection = () => {
   const [isMobile] = useMediaQuery("(max-width: 900px)");

   const pasosInfo = [
      { text: "Diagnóstico", icon: "/assets/images/Home/diagnostico.svg" },
      { text: "Preparación", icon: "/assets/images/Home/preparacion.svg" },
      {
         text: "Implementación",
         icon: "/assets/images/Home/implementacion.svg",
      },
      { text: "Verificación", icon: "/assets/images/Home/verificacion.svg" },
      { text: "Mejora", icon: "/assets/images/Home/mejora.svg" },
   ];

   return (
      <Stack align='center' paddingInline='2rem' bgColor='negroOscuro'>
         <Stack maxW='80rem' w='100%' gap='1.5rem' paddingBlock='5rem'>
            <Heading size={isMobile ? "lg" : "xl"} lineHeight={1.1} mb='1rem'>
               <Highlight query='simples pasos' styles={{ color: "celeste" }}>
                  Te acompañamos en 5 simples pasos.
               </Highlight>
            </Heading>
            <SimpleGrid columns={isMobile ? 1 : 5} spacing='1rem'>
               {pasosInfo.map((paso) => (
                  <PasosCard
                     key={paso.text}
                     icon={paso.icon}
                     text={paso.text}
                  />
               ))}
            </SimpleGrid>
         </Stack>
      </Stack>
   );
};

export default PasosSection;
