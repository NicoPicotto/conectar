/* eslint-disable react/prop-types */
import { Stack, Heading, Highlight, Text, Box } from "@chakra-ui/react";
import Marquee from "react-marquee-slider";

const Normas = ({ bgColor }) => {
   const normasInfo = [
      { number: "ISO 9001", title: "Calidad" },
      { number: "ISO 17025", title: "Laboratorios de Ensayo y Calibración" },
      { number: "ISO 22001", title: "Inocuidad Alimentaria" },
      { number: "ISO 27001", title: "Seguridad de la Información" },
      { number: "ISO 14001", title: "Medio Ambiente" },
      { number: "ISO 26000", title: "Responsabilidad Social" },
      { number: "BPM", title: "Buenas Prácticas de Manufactura" },
      {
         number: "HACCP",
         title: "Análisis de Peligros y Puntos Críticos de Control",
      },
      { number: "EMPRESA B", title: "Triple Impacto" },
   ];

   return (
      <Stack
         align='center'
         paddingInline='2rem'
         paddingBlock='2rem'
         bgColor={bgColor ? bgColor : "inherit"}
      >
         <Stack maxW='80rem' w='100%' gap='1.5rem' paddingBlock='5rem'>
            <Heading size='xl' lineHeight={1.1} mb='1rem'>
               <Highlight query='normas' styles={{ color: "celeste" }}>
                  Algunas de las normas que implementamos.
               </Highlight>
            </Heading>
            <Stack overflow='hidden' maxW='80rem' w='100%' position='relative'>
               <Box
                  position='absolute'
                  top={0}
                  bottom={0}
                  left={0}
                  width='5rem'
                  bgGradient={`linear(to-r, ${
                     bgColor ? bgColor : "#2B2A2F"
                  }, transparent)`}
                  zIndex={1}
               />
               <Box
                  position='absolute'
                  top={0}
                  bottom={0}
                  right={0}
                  width='5rem'
                  bgGradient={`linear(to-l, ${
                     bgColor ? bgColor : "#2B2A2F"
                  }, transparent)`}
                  zIndex={1}
               />
               <Marquee velocity={20}>
                  {normasInfo.map((norma) => (
                     <Stack
                        key={norma.number}
                        borderWidth={2}
                        borderColor='azul'
                        borderRadius={20}
                        shadow='sm'
                        px='1rem'
                        pb='1rem'
                        w='18rem'
                        minH='7rem'
                        height='100%'
                        align='center'
                        mx='1rem'
                     >
                        <Stack
                           bgColor='azul'
                           pt='0.5rem'
                           px='1rem'
                           pb='0.5rem'
                           mb='0.5rem'
                           borderBottomRadius='1rem'
                        >
                           <Heading size='md' color='blanco' fontWeight='bold'>
                              {norma.number}
                           </Heading>
                        </Stack>
                        <Text maxW='20ch' lineHeight={1.1} textAlign='center'>
                           {norma.title}
                        </Text>
                     </Stack>
                  ))}
               </Marquee>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default Normas;
