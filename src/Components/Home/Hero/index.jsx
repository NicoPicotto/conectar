import { Stack, Heading, Text, Button, Image } from "@chakra-ui/react";
import heroImg from "/assets/images/Home/hero.png";

const HeroSection = () => {
   return (
      <Stack align="center" paddingInline="2rem">
         <Stack maxW='80rem' w='100%' gap='1.5rem' marginBottom='5rem'>
            <Stack borderRadius='3rem' overflow='hidden'>
               <Image src={heroImg} />
            </Stack>
            <Stack direction='row' gap='1rem'>
               <Heading size='2xl' lineHeight={1.1}>
                  Impulsamos tu crecimiento empresarial con estrategias
                  innovadoras y sostenibles.
               </Heading>
               <Stack maxW='35ch' justify='space-between'>
                  <Text style={{ textWrap: "pretty" }} lineHeight={1.2}>
                     Nos especializamos en diseñar estrategias que generen valor
                     económico, social y ambiental, trabajando colaborativamente
                     con las organizaciones para impulsar su crecimiento
                     empresarial.
                  </Text>
                  <Stack direction='row' w='100%'>
                     <Button w='100%'>Contactate</Button>
                     <Button w='100%' variant='outline'>
                        Conocé más
                     </Button>
                  </Stack>
               </Stack>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default HeroSection;
