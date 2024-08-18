import {
   Stack,
   Heading,
   Text,
   SimpleGrid,
   Highlight,
   Divider,
   Badge,
   useMediaQuery
} from "@chakra-ui/react";
import teamDescriptions from "./teamDescriptions";

const Consultores = () => {
   const [isMobile] = useMediaQuery("(max-width: 900px)");

   return (
      <Stack align='center' paddingInline='2rem' bgColor='negroOscuro'>
         <Stack maxW='80rem' w='100%' gap='1.5rem' paddingBlock='5rem'>
            {" "}
            <Heading size='xl' lineHeight={1.1} mb='1rem'>
               <Highlight query='consultores' styles={{ color: "celeste" }}>
                  Nuestro equipo de consultores estrella.
               </Highlight>
            </Heading>
            <SimpleGrid columns={isMobile ? 1 : 2} spacing='2rem'>
               {teamDescriptions.slice(0, 2).map((team) => (
                  <Stack
                     key={team.name}
                     borderRadius={10}
                     p='2rem'
                     position='relative'
                     justify='end'
                     minH={isMobile ? "70dvh" : "40rem"}
                     bgImage={`url(${team.image})`}
                     bgSize='cover'
                     bgPosition='center'
                     shadow='sm'
                     overflow='hidden'
                     _hover={{
                        "& > .name": { opacity: 0, pointerEvents: "none" },
                        "& > .overlay": { opacity: 0, pointerEvents: "none" },
                        "& > .description": { opacity: 1 },
                        shadow: "lg",
                     }}
                  >
                     <Stack
                        position='absolute'
                        transition='opacity 0.3s ease'
                        bottom={0}
                        left={0}
                        w='100%'
                        height={isMobile ? "40%" : '30%'}
                        className='overlay'
                        bgGradient='linear(to-t, black, transparent)'
                     ></Stack>
                     <Stack
                        zIndex={1}
                        opacity={1}
                        className='name'
                        transition='opacity 0.3s ease'
                     >
                        <Heading size='md' fontWeight='bold'>
                           {team.name}
                        </Heading>

                        <Divider borderColor='azul' />
                        <Text>{team.position}</Text>
                     </Stack>
                     <Stack
                        bgColor='blackAlpha.700'
                        position='absolute'
                        transition='opacity 0.3s ease'
                        zIndex={2}
                        h='100%'
                        w='100%'
                        left={0}
                        bottom={0}
                        pb='2rem'
                        justify='end'
                        paddingInline='2rem'
                        className='description'
                        opacity={0}
                     >
                        <Badge
                           bgColor='azul'
                           color='blanco'
                           paddingInline={2}
                           h='fit-content'
                           w='fit-content'
                           size='lg'
                        >
                           {team.title}
                        </Badge>
                        <Text>{team.description}</Text>
                     </Stack>
                  </Stack>
               ))}
            </SimpleGrid>
            <SimpleGrid columns={isMobile ? 1 : 3} spacing='2rem'>
               {teamDescriptions.slice(2, 5).map((team) => (
                  <Stack
                     key={team.name}
                     borderRadius={10}
                     p='2rem'
                     position='relative'
                     justify='end'
                     minH={isMobile ? "70dvh" : "32rem"}
                     bgImage={`url(${team.image})`}
                     bgSize='cover'
                     bgPosition='center'
                     shadow='sm'
                     overflow='hidden'
                     _hover={{
                        "& > .name": { opacity: 0, pointerEvents: "none" },
                        "& > .overlay": { opacity: 0, pointerEvents: "none" },
                        "& > .description": { opacity: 1 },
                        shadow: "lg",
                     }}
                  >
                     <Stack
                        position='absolute'
                        transition='opacity 0.3s ease'
                        bottom={0}
                        left={0}
                        w='100%'
                        height={isMobile ? "40%" : '30%'}
                        className='overlay'
                        bgGradient='linear(to-t, black, transparent)'
                     ></Stack>
                     <Stack
                        zIndex={1}
                        opacity={1}
                        className='name'
                        transition='opacity 0.3s ease'
                     >
                        <Heading size='md' fontWeight='bold'>
                           {team.name}
                        </Heading>
                        <Divider borderColor='azul' />
                        <Text>{team.position}</Text>
                     </Stack>
                     <Stack
                        bgColor='blackAlpha.700'
                        position='absolute'
                        transition='opacity 0.3s ease'
                        zIndex={2}
                        h='100%'
                        w='100%'
                        left={0}
                        bottom={0}
                        pb='2rem'
                        justify='end'
                        paddingInline='2rem'
                        className='description'
                        opacity={0}
                     >
                        <Badge
                           bgColor='azul'
                           color='blanco'
                           paddingInline={2}
                           h='fit-content'
                           w='fit-content'
                           size='lg'
                        >
                           {team.title}
                        </Badge>
                        <Text>{team.description}</Text>
                     </Stack>
                  </Stack>
               ))}
            </SimpleGrid>
         </Stack>
      </Stack>
   );
};

export default Consultores;
