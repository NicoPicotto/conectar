import {
   Stack,
   Heading,
   Text,
   Button,
   Image,
   Highlight,
   useMediaQuery,
   Link,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import heroImg from "/assets/images/Home/hero.png";

const HeroSection = () => {
   const [isMobile] = useMediaQuery("(max-width: 900px)");

   return (
      <Stack align='center' paddingInline='2rem' id='hero'>
         <Stack maxW='80rem' w='100%' gap='1.5rem' marginBottom='5rem'>
            <Stack
               borderRadius='3rem'
               overflow='hidden'
               display={isMobile && "none"}
            >
               <Image src={heroImg} />
            </Stack>
            <Stack direction={isMobile ? "column" : "row"} gap='1rem'>
               <Heading size={isMobile ? "xl" : "2xl"} lineHeight={1.1}>
                  <Highlight query='sostenibles' styles={{ color: "celeste" }}>
                     Impulsamos tu crecimiento empresarial con estrategias
                     innovadoras y sostenibles.
                  </Highlight>
               </Heading>
               <Stack maxW='35ch' justify='space-between'>
                  <Text style={{ textWrap: "pretty" }} lineHeight={1.2}>
                     Nos especializamos en diseñar estrategias que generen valor
                     económico, social y ambiental, trabajando colaborativamente
                     con las organizaciones para impulsar su crecimiento
                     empresarial.
                  </Text>
                  <Stack direction='row' w='100%' mt={isMobile && "1rem"}>
                     <Link as='a' href='#contact'>
                        <Button>Contactate</Button>
                     </Link>
                     <Link as={ReachLink} to='/servicios'>
                        <Button w='100%' variant='outline'>
                           Conocé más
                        </Button>
                     </Link>
                  </Stack>
               </Stack>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default HeroSection;
