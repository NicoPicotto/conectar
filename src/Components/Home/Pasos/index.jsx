import { Stack, Heading, Highlight, SimpleGrid } from "@chakra-ui/react";
import PasosCard from "./PasosCard";

const PasosSection = () => {
   const pasosInfo = [
      { text: "Preparacion", icon: "/assets/images/Home/preparacion.svg" },
      {
         text: "Implementación",
         icon: "/assets/images/Home/implementacion.svg",
      },
      { text: "Verificación", icon: "/assets/images/Home/verificacion.svg" },
      { text: "Mejora Contínua", icon: "/assets/images/Home/mejora.svg" },
   ];

   return (
      <Stack align='center' paddingInline='2rem' bgColor='negroOscuro'>
         <Stack maxW='80rem' w='100%' gap='1.5rem' paddingBlock='5rem'>
            <Heading size='xl' lineHeight={1.1} mb='1rem'>
               <Highlight query='simples pasos' styles={{ color: "celeste" }}>
                  Te acompañamos en 4 simples pasos.
               </Highlight>
            </Heading>
            <SimpleGrid columns={4} spacing='1rem'>
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
