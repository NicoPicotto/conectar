/* eslint-disable react/prop-types */
import {
   Stack,
   Heading,
   Highlight,
   Text,
   Box,
   Button,
   Link,
   Divider,
   useMediaQuery,
} from "@chakra-ui/react";
import Marquee from "react-marquee-slider";

const Normas = ({ bgColor }) => {
   const [isMobile] = useMediaQuery("(max-width: 900px)");

   const normasInfo = [
      { number: "ISO 9001", title: "Calidad" },
      { number: "ISO 17025", title: "Laboratorios de Ensayo y Calibración" },
      { number: "ISO 22000", title: "Inocuidad Alimentaria" },
      { number: "ISO 27001", title: "Seguridad de la Información" },
      { number: "ISO 14001", title: "Medio Ambiente" },
      { number: "ISO 26000", title: "Responsabilidad Social" },
      { number: "BPM", title: "Buenas Prácticas de Manufactura" },
      {
         number: "HACCP",
         title: "Análisis de Peligros y Puntos Críticos de Control",
      },
      { number: "EMPRESA B", title: "Triple Impacto" },
      { number: "BRCGS", title: "Seguridad Alimentaria" },
      { number: "BRCGS", title: "Agentes & Corredores" }
   ];

   return (
      <Stack
         align='center'
         paddingInline='2rem'
         paddingBlock='2rem'
         bgColor={bgColor ? bgColor : "inherit"}
      >
         <Stack maxW='80rem' w='100%' gap='1.5rem' paddingBlock='5rem'>
            <Heading size={isMobile ? "lg" : "xl"} lineHeight={1.1} mb='1rem'>
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

            <Divider borderColor='azul' opacity={0.4} mt='2rem' />

            <Stack
               direction={isMobile ? "column" : "row"}
               gap='2rem'
               align='flex-start'
               mt='2rem'
            >
               <Stack flex={1} gap='1rem'>
                  <Stack gap='0.5rem'>
                     <Heading size={isMobile ? "md" : "lg"} lineHeight={1.1}>
                        <Highlight
                           query='Certificación'
                           styles={{ color: "celeste" }}
                        >
                           Mi Primera Certificación
                        </Highlight>
                     </Heading>
                     <Text color="gray" fontStyle='italic'>
                        Te acompañamos a acceder al programa y aprovechar sus
                        beneficios.
                     </Text>
                  </Stack>
                  <Text lineHeight={1.6} style={{ textWrap: "pretty" }}>
                     El programa{" "}
                     <Box as='span' color='celeste' fontWeight='bold'>
                        &ldquo;Mi Primera Certificación&rdquo;
                     </Box>
                     , impulsado por el Gobierno de la Provincia de Córdoba,
                     está diseñado para apoyar a empresas que buscan implementar
                     y certificar por primera vez normas de gestión, mediante
                     asistencia técnica y beneficios económicos.
                  </Text>
                  <Text lineHeight={1.6} style={{ textWrap: "pretty" }}>
                     En{" "}
                     <Box as='span' color='celeste' fontWeight='bold'>
                        CONECTAR
                     </Box>
                     , acompañamos a las organizaciones en todo el proceso para
                     que puedan acceder al programa de forma ágil y aprovechar
                     al máximo sus ventajas.
                  </Text>
                  <Link as='a' href='#contact' mt='0.5rem'>
                     <Button size="sm" aria-label='Consultar sobre Mi Primera Certificación'>
                        Quiero saber más
                     </Button>
                  </Link>
               </Stack>

               <Stack
                  borderWidth={2}
                  borderColor='azul'
                  borderRadius='1.25rem'
                  overflow='hidden'
                  minW={isMobile ? "100%" : "22rem"}
                  maxW={isMobile ? "100%" : "22rem"}
                  gap={0}
               >
                  <Stack bgColor='azul' px='1.25rem' py='0.75rem'>
                     <Heading size='sm' color='blanco'>
                        Beneficio clave
                     </Heading>
                  </Stack>
                  <Stack px='1.25rem' py='1rem'>
                     <Text lineHeight={1.6} style={{ textWrap: "pretty" }}>
                        Este programa permite{" "}
                        <Box as='span' color='celeste' fontWeight='bold'>
                           reducir significativamente los costos de
                           certificación
                        </Box>
                        , facilitando que más empresas puedan dar este paso
                        estratégico.
                     </Text>
                  </Stack>
               </Stack>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default Normas;
