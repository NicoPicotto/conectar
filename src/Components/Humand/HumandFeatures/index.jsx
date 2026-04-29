import {
   Stack,
   Heading,
   Highlight,
   Text,
   SimpleGrid,
   Icon,
   useMediaQuery,
} from "@chakra-ui/react";
import {
   RiMoneyDollarCircleLine,
   RiPenNibLine,
   RiBarChartLine,
   RiTeamLine,
   RiMessage3Line,
   RiMedalLine,
} from "react-icons/ri";

const features = [
   {
      icon: RiMoneyDollarCircleLine,
      title: "Liquidación de sueldos",
      desc: "Gestioná y calculá haberes de forma centralizada, con precisión y trazabilidad en cada período.",
   },
   {
      icon: RiPenNibLine,
      title: "Firma electrónica",
      desc: "Firmá documentos laborales de manera digital, ágil y con plena validez legal.",
   },
   {
      icon: RiBarChartLine,
      title: "Evaluaciones de desempeño",
      desc: "Medí el rendimiento de tu equipo con herramientas claras, configurables y accionables.",
   },
   {
      icon: RiTeamLine,
      title: "Red social interna",
      desc: "Fortalecé la cultura organizacional con una red pensada para comunicar, compartir y conectar.",
   },
   {
      icon: RiMessage3Line,
      title: "Chat corporativo",
      desc: "Comunicación interna fluida entre equipos y áreas, sin salir de la plataforma.",
   },
   {
      icon: RiMedalLine,
      title: "Reconocimientos",
      desc: "Destacá los logros de tu gente y fomentá el compromiso, la pertenencia y la motivación.",
   },
];

const HumandFeatures = () => {
   const [isMobile] = useMediaQuery("(max-width: 900px)");

   return (
      <Stack align='center' paddingInline='2rem' bgColor='negroOscuro'>
         <Stack maxW='80rem' w='100%' gap='1.5rem' paddingBlock='5rem'>
            <Heading size={isMobile ? "lg" : "xl"} lineHeight={1.1} mb='1rem'>
               <Highlight
                  query='en una sola plataforma'
                  styles={{ color: "celeste" }}
               >
                  Todo lo que tu equipo necesita, en una sola plataforma.
               </Highlight>
            </Heading>

            <SimpleGrid columns={isMobile ? 1 : 3} spacing='1rem'>
               {features.map((feature) => (
                  <Stack
                     key={feature.title}
                     bgColor='negro'
                     borderRadius={10}
                     p='1.75rem'
                     gap='0.75rem'
                     outline='1px solid'
                     outlineColor='azul'
                  >
                     <Icon
                        as={feature.icon}
                        fontSize='2rem'
                        color='celeste'
                     />
                     <Heading size='sm'>{feature.title}</Heading>
                     <Text
                        fontSize='sm'
                        lineHeight={1.6}
                        style={{ textWrap: "pretty" }}
                     >
                        {feature.desc}
                     </Text>
                  </Stack>
               ))}
            </SimpleGrid>
         </Stack>
      </Stack>
   );
};

export default HumandFeatures;
