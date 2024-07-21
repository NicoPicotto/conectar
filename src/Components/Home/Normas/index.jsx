/* eslint-disable react/prop-types */
import { Stack, Heading, Highlight, Image, Text, Box } from "@chakra-ui/react";
import isoImg from "/assets/images/Home/iso.svg";
import Marquee from "react-marquee-slider";

const Normas = ({ bgColor }) => {
   const normasInfo = [
      { number: "9001", title: "Calidad" },
      { number: "17025", title: "Laboratorios de Ensayo y Calibración" },
      { number: "22001", title: "Inocuidad Alimentaria" },
      { number: "27001", title: "Seguridad de la Información" },
      { number: "14001", title: "Medio Ambiente" },
      { number: "26000", title: "Responsabilidad Social" },
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
                        direction='row'
                        borderWidth={1}
                        borderColor='blanco'
                        borderRadius={20}
                        shadow='sm'
                        p='1rem'
                        h='auto'
                        minW='20rem'
                        justify='space-between'
                        align='center'
                        mx='1rem'
                     >
                        <Image src={isoImg} h='5rem' />
                        <Stack
                           align='flex-end'
                           justify='space-between'
                           h='100%'
                        >
                           <Heading textAlign='right' color='celeste'>
                              {norma.number}
                           </Heading>
                           <Text maxW='15ch' lineHeight={1.1} textAlign='right'>
                              {norma.title}
                           </Text>
                        </Stack>
                     </Stack>
                  ))}
               </Marquee>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default Normas;
