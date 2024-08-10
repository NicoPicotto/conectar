import { Stack, Heading, Text, SimpleGrid, Highlight } from "@chakra-ui/react";

const MisionVisionValores = () => {
   return (
      <Stack align='center' paddingInline='2rem'>
         <Stack maxW='80rem' w='100%' gap='1.5rem' paddingBlock='3rem'>
            <Heading size='xl' lineHeight={1.1} mb='1rem'>
               <Highlight
                  query='amet consectetur'
                  styles={{ color: "celeste" }}
               >
                  Lorem ipsum dolor sit amet consectetur.
               </Highlight>
            </Heading>
            <SimpleGrid columns={3} spacing='2rem'>
               <Stack
                  bgColor='negroOscuro'
                  borderRadius={10}
                  p='2rem'
                  align='center'
                  position='relative'
                  minH='18rem'
                  gap='1rem'
                  transition='outline 0.2s ease'
                  _hover={{
                     shadow: "md",
                     outline: "2px solid #5FC9DF",
                  }}
               >
                  <Heading color='celeste' transition='opacity 0.2s'>
                     Misión
                  </Heading>
                  <Text textAlign='center'>
                     Ofrecer servicios de consultoría a pequeñas y medianas
                     empresas, colaborando en su crecimiento y el logro de sus
                     objetivos, contribuyendo positivamente en el bienestar de
                     la comunidad y minimizando nuestro impacto en el medio
                     ambiente.
                  </Text>
               </Stack>

               <Stack
                  bgColor='negroOscuro'
                  borderRadius={10}
                  p='2rem'
                  align='center'
                  position='relative'
                  minH='18rem'
                  gap='1rem'
                  transition='outline 0.2s ease'
                  _hover={{
                     shadow: "md",
                     outline: "2px solid #5FC9DF",
                  }}
               >
                  <Heading color='celeste'>Visión</Heading>
                  <Text textAlign='center'>
                     Ser una consultora reconocida en nuestro ámbito de
                     actuación, mientras construimos relaciones sólidas y
                     estables con nuestros clientes, posibilitando a nuestros
                     profesionales desarrollarse en un ambiente de trabajo
                     colaborativo, ético y con honestidad.
                  </Text>
               </Stack>
               <Stack
                  bgColor='negroOscuro'
                  borderRadius={10}
                  p='2rem'
                  align='center'
                  position='relative'
                  minH='18rem'
                  transition='outline 0.2s ease'
                  _hover={{
                     shadow: "md",
                     outline: "2px solid #5FC9DF",
                  }}
               >
                  <Heading mb='1rem' color='celeste'>
                     Valores
                  </Heading>
                  <Text textAlign='center'>Profesionalidad</Text>
                  <Text textAlign='center'>Honestidad</Text>
                  <Text textAlign='center'>Integridad</Text>
                  <Text textAlign='center'>Innovación</Text>
                  <Text textAlign='center'>Compromiso</Text>
               </Stack>
            </SimpleGrid>
         </Stack>
      </Stack>
   );
};

export default MisionVisionValores;
