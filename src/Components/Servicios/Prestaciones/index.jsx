import {
   Stack,
   Heading,
   SimpleGrid,
   Highlight,
   Link,
   useMediaQuery,
} from "@chakra-ui/react";
import listaPrestaciones from "./listaPrestaciones";

const Prestaciones = () => {
   const [isMobile] = useMediaQuery("(max-width: 900px)");

   return (
      <Stack align='center' paddingInline='2rem'>
         <Stack
            maxW='80rem'
            w='100%'
            gap='1.5rem'
            paddingBlock={!isMobile && "3rem"}
         >
            <Heading size={isMobile ? "lg" : "xl"} lineHeight={1.1} mb='1rem'>
               <Highlight
                  query='100% personalizado'
                  styles={{ color: "celeste" }}
               >
                  Acompañamiento 100% personalizado.
               </Highlight>
            </Heading>
            <SimpleGrid columns={isMobile ? 1 : 4} spacing='1rem'>
               {listaPrestaciones.map((prestacion) => (
                  <Stack
                     bgColor='negroOscuro'
                     key={prestacion.title}
                     borderRadius={10}
                     p='2rem'
                     minH='13rem'
                     align='center'
                     position='relative'
                     overflow='hidden'
                     justify='center'
                     outline='1px solid #3691C2'
                     _hover={{
                        "& > .contact-overlay": {
                           opacity: 1,
                        },
                     }}
                  >
                     <Heading
                        size='md'
                        transition='opacity 0.2s ease'
                        className='service-title'
                        textAlign='center'
                     >
                        {prestacion.title}
                     </Heading>
                     <Stack
                        transition='opacity 0.3s ease'
                        bgColor='azul'
                        position='absolute'
                        w='100%'
                        h='fit-content'
                        zIndex={1}
                        justify='center'
                        align='center'
                        bottom={0}
                        left={0}
                        className='contact-overlay'
                        opacity={0}
                        paddingBlock='0.7rem'
                     >
                        <Link as='a' href='#contact'>
                           <Heading size='xs'>
                              Contactarme por este servicio
                           </Heading>
                        </Link>
                     </Stack>
                  </Stack>
               ))}
            </SimpleGrid>
         </Stack>
      </Stack>
   );
};

export default Prestaciones;
