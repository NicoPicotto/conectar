import {
   Stack,
   Heading,
   Highlight,
   Text,
   Button,
   Link,
   Box,
   useMediaQuery,
   Image,
} from "@chakra-ui/react";

const HumandHero = () => {
   const [isMobile] = useMediaQuery("(max-width: 900px)");

   return (
      <Stack align='center' paddingInline='2rem'>
         <Stack maxW='80rem' w='100%' gap='2rem' paddingBlock='5rem'>
           <Image src="/assets/images/logo-humand-blue.svg" alt="Humand Logo" width="8rem" height="auto" fit="cover" filter="brightness(0) invert(1)" />

            <Stack
               direction={isMobile ? "column" : "row"}
               gap='3rem'
               align='flex-start'
            >
               <Heading
                  size={isMobile ? "xl" : "2xl"}
                  lineHeight={1.1}
                  flex={1}
               >
                  <Highlight query='RRHH' styles={{ color: "celeste" }}>
                     La solución estratégica para transformar tu área de RRHH.
                  </Highlight>
               </Heading>

               <Stack maxW='42ch' gap='1.5rem'>
                  <Text lineHeight={1.6} style={{ textWrap: "pretty" }}>
                     Somos Referral Partners oficiales de{" "}
                     <Box as='span' color='celeste' fontWeight='bold'>
                        Humand
                     </Box>
                     , la plataforma integral de recursos humanos diseñada para
                     Latinoamérica. Acompañamos a tu organización en la
                     adopción de una solución que centraliza, automatiza y
                     mejora todos los procesos de RRHH en un solo lugar.
                  </Text>
                  <Stack direction='row' mt={isMobile ? "0.5rem" : 0}>
                     <Link as='a' href='#contact'>
                        <Button aria-label='Solicitar demo gratis de Humand'>
                           Solicitar demo gratis
                        </Button>
                     </Link>
                  </Stack>
               </Stack>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default HumandHero;
