import {
   Stack,
   Heading,
   Highlight,
   Text,
   SimpleGrid,
   Icon,
   Button,
   Link,
   useMediaQuery,
} from "@chakra-ui/react";
import {
   RiShieldCheckLine,
   RiOrganizationChart,
   RiRocketLine,
} from "react-icons/ri";

const reasons = [
   {
      icon: RiShieldCheckLine,
      title: "Referral Partner Oficial",
      desc: "Contamos con la autorización de Humand para ofrecer, implementar y acompañar la adopción de la plataforma en tu organización.",
   },
   {
      icon: RiOrganizationChart,
      title: "Visión estratégica de RRHH",
      desc: "No solo implementamos la herramienta: la integramos con la cultura, los procesos y los objetivos de tu área de recursos humanos.",
   },
   {
      icon: RiRocketLine,
      title: "Acompañamiento integral",
      desc: "Desde la incorporación inicial hasta el aprovechamiento pleno de cada módulo, estamos con vos en cada etapa del proceso.",
   },
];

const HumandPartner = () => {
   const [isMobile] = useMediaQuery("(max-width: 900px)");

   return (
      <Stack align='center' paddingInline='2rem' bgColor='negroOscuro'>
         <Stack maxW='80rem' w='100%' gap='1.5rem' paddingBlock='5rem'>
            <Stack
               direction={isMobile ? "column" : "row"}
               justify='space-between'
               align={isMobile ? "flex-start" : "flex-end"}
               mb='1rem'
               gap='1rem'
            >
               <Heading
                  size={isMobile ? "lg" : "xl"}
                  lineHeight={1.1}
                  maxW='22ch'
               >
                  <Highlight
                     query='con CONECTAR'
                     styles={{ color: "celeste" }}
                  >
                     ¿Por qué implementar Humand con CONECTAR?
                  </Highlight>
               </Heading>
               <Link as='a' href='#contact' flexShrink={0}>
                  <Button
                     variant='outline'
                     aria-label='Solicitar demo gratis de Humand'
                  >
                     Solicitar demo gratis
                  </Button>
               </Link>
            </Stack>

            <SimpleGrid columns={isMobile ? 1 : 3} spacing='1rem'>
               {reasons.map((reason) => (
                  <Stack
                     key={reason.title}
                     bgColor='negroOscuro'
                     borderRadius={10}
                     p='1.75rem'
                     gap='0.75rem'
                     borderTopWidth={3}
                     borderTopColor='azul'
                  >
                     <Icon
                        as={reason.icon}
                        fontSize='2rem'
                        color='celeste'
                     />
                     <Heading size='sm'>{reason.title}</Heading>
                     <Text
                        fontSize='sm'
                        lineHeight={1.6}
                        style={{ textWrap: "pretty" }}
                     >
                        {reason.desc}
                     </Text>
                  </Stack>
               ))}
            </SimpleGrid>
         </Stack>
      </Stack>
   );
};

export default HumandPartner;
