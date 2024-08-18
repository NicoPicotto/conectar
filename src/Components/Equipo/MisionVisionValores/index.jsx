import {
   Stack,
   Heading,
   Text,
   SimpleGrid,
   Highlight,
   Tooltip,
   useMediaQuery,
} from "@chakra-ui/react";

const MisionVisionValores = () => {
   const [isMobile] = useMediaQuery("(max-width: 900px)");

   return (
      <Stack align='center' paddingInline='2rem'>
         <Stack
            maxW='80rem'
            w='100%'
            gap='1.5rem'
            paddingBlock={!isMobile && "3rem"}
         >
            <Heading size='xl' lineHeight={1.1} mb='1rem'>
               <Highlight query='nos definen' styles={{ color: "celeste" }}>
                  Los propósitos que nos definen.
               </Highlight>
            </Heading>
            <SimpleGrid columns={isMobile ? 1 : 3} spacing='2rem'>
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
                  <Tooltip
                     hasArrow
                     label='Nos comprometemos a operar de manera sostenible, minimizando nuestro impacto ambiental y maximizando el impacto social.'
                     bgColor='gray.700'
                     color='blanco'
                  >
                     <Text textAlign='center'>Sostenibilidad</Text>
                  </Tooltip>

                  <Tooltip
                     hasArrow
                     label='Nos comprometemos a buscar continuamente nuevas formas de hacer negocios de manera ética y sostenible.'
                     bgColor='gray.700'
                     color='blanco'
                  >
                     <Text textAlign='center'>Innovación</Text>
                  </Tooltip>
                  <Tooltip
                     hasArrow
                     label='Nos comprometemos a medir y gestionar nuestro impacto social y ambiental, con el fin de generar un cambio positivo en la sociedad y el medio ambiente.'
                     bgColor='gray.700'
                     color='blanco'
                  >
                     <Text textAlign='center'>Impacto Positivo</Text>
                  </Tooltip>
                  <Tooltip
                     hasArrow
                     label='Nos dedicamos al cumplimiento de un objetivo, manteniendo una actitud responsable y cumpliendo con las obligaciones adquiridas.'
                     bgColor='gray.700'
                     color='blanco'
                  >
                     <Text textAlign='center'>Compromiso</Text>
                  </Tooltip>

                  <Tooltip
                     hasArrow
                     label='Actuamos con sinceridad y transparencia en todas las acciones y decisiones que tomamos para el cumplimiento de los objetivos.'
                     bgColor='gray.700'
                     color='blanco'
                  >
                     <Text textAlign='center'>Honestidad</Text>
                  </Tooltip>
                  <Tooltip
                     hasArrow
                     label='Tenemos coherencia entre nuestros principios y valores que guían las acciones que llevamos a cabo, respetando la ética y la moral.'
                     bgColor='gray.700'
                     color='blanco'
                  >
                     <Text textAlign='center'>Integridad</Text>
                  </Tooltip>
               </Stack>
            </SimpleGrid>
         </Stack>
      </Stack>
   );
};

export default MisionVisionValores;
