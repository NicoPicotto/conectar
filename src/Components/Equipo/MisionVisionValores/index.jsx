import { Stack, Heading, Text, SimpleGrid, Highlight } from "@chakra-ui/react";

const MisionVisionValores = () => {
   return (
      <Stack align='center' paddingInline='2rem'>
         <Stack maxW='80rem' w='100%' gap='1.5rem' paddingBlock='5rem'>
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
                  justify='center'
                  position='relative'
                  minH='18rem'
                  _hover={{
                     "& > h2": { opacity: 0, pointerEvents: "none" },
                     "& > p": { opacity: 1 },
                     outline: "1px solid #3691C2",
                  }}
               >
                  <Heading position='absolute' transition='opacity 0.2s'>
                     Misión
                  </Heading>
                  <Text
                     textAlign='center'
                     opacity={0}
                     transition='opacity 0.2s ease'
                  >
                     Ofrecer servicios de consultoría a pequeñas y medianas
                     empresas, colaborando en su crecimiento y el logro de sus
                     objetivos.
                  </Text>
               </Stack>

               <Stack
                  bgColor='negroOscuro'
                  borderRadius={10}
                  p='2rem'
                  align='center'
                  justify='center'
                  position='relative'
                  minH='18rem'
                  _hover={{
                     "& > h2": { opacity: 0, pointerEvents: "none" },
                     "& > p": { opacity: 1 },
                     outline: "1px solid #3691C2",
                  }}
               >
                  <Heading position='absolute' transition='opacity 0.2s'>
                     Visión
                  </Heading>
                  <Text
                     textAlign='center'
                     opacity={0}
                     transition='opacity 0.2s ease'
                  >
                     Ser una consultora reconocida en nuestro ámbito de
                     actuación, mientras construimos relaciones sólidas y
                     estables con nuestros clientes, posibilitando a nuestros
                     profesionales desarrollarse en un ambiente de trabajo
                     colaborativo, ética y honestidad.
                  </Text>
               </Stack>
               <Stack
                  bgColor='negroOscuro'
                  borderRadius={10}
                  p='2rem'
                  align='center'
                  justify='center'
                  position='relative'
                  minH='18rem'
                  _hover={{
                     "& > h2": { opacity: 0, pointerEvents: "none" },
                     "& > p": { opacity: 1 },
                     outline: "1px solid #3691C2",
                  }}
               >
                  <Heading position='absolute' transition='opacity 0.2s'>
                     Valores
                  </Heading>
                  <Text
                     textAlign='center'
                     opacity={0}
                     transition='opacity 0.2s ease'
                  >
                     Profesionalidad
                  </Text>
                  <Text
                     textAlign='center'
                     opacity={0}
                     transition='opacity 0.2s ease'
                  >
                     Honestidad
                  </Text>
                  <Text
                     textAlign='center'
                     opacity={0}
                     transition='opacity 0.2s ease'
                  >
                     Integridad
                  </Text>
                  <Text
                     textAlign='center'
                     opacity={0}
                     transition='opacity 0.2s ease'
                  >
                     Innovación
                  </Text>
                  <Text
                     textAlign='center'
                     opacity={0}
                     transition='opacity 0.2s ease'
                  >
                     Compromiso
                  </Text>
               </Stack>
            </SimpleGrid>
         </Stack>
      </Stack>
   );
};

export default MisionVisionValores;
