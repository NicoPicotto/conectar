import {
   Stack,
   Heading,
   Highlight,
   useMediaQuery,
   StackDivider,
} from "@chakra-ui/react";
import PasosCardExpanded from "./PasosCardExpanded";

const PasosExtended = () => {
   const [isMobile] = useMediaQuery("(max-width: 900px)");

   const pasosInfo = [
      {
         text: "Diagnóstico",
         icon: "/assets/images/Home/diagnostico.svg",
         points: [
            "Análisis exhaustivo de la situación actual.",
            "Identificación del nivel de cumplimiento de la norma a implementar.",
            "Elaboración de un plan de trabajo.",
         ],
      },
      {
         text: "Preparación",
         icon: "/assets/images/Home/preparacion.svg",
         points: [
            "Relevamiento de los procesos de dirección, operativos y de apoyo.",
            "Capacitación sobre los requisitos de la norma.",
         ],
      },
      {
         text: "Implementación",
         icon: "/assets/images/Home/implementacion.svg",
         points: [
            "Concientización del personal.",
            "Capacitación de los procesos.",
            "Seguimiento de la implementación..",
         ],
      },
      {
         text: "Verificación",
         icon: "/assets/images/Home/verificacion.svg",
         points: [
            "Auditorías Internas.",
            "Tratamiento de los Hallazgos.",
            "Revisión por la Dirección.",
            "Auditoría de Certificación.",
         ],
      },
      {
         text: "Mejora",
         icon: "/assets/images/Home/mejora.svg",
         points: [
            "Acompañamiento en el mantenimiento del sistema de gestión.",
            "Mejora Continua. ",
         ],
      },
   ];

   return (
      <Stack align='center' paddingInline='2rem' bgColor='negroOscuro'>
         <Stack maxW='80rem' w='100%' gap='1.5rem' paddingBlock='5rem'>
            <Heading size={isMobile ? "lg" : "xl"} lineHeight={1.1} mb='1rem'>
               <Highlight query='simples pasos' styles={{ color: "celeste" }}>
                  Te acompañamos en 5 simples pasos.
               </Highlight>
            </Heading>
            <Stack
               direction={isMobile ? "column" : "row"}
               divider={
                  <StackDivider borderColor='#3691C2' borderWidth='1px' />
               }
               spacing={0}
            >
               {pasosInfo.map((paso) => (
                  <PasosCardExpanded
                     key={paso.text}
                     icon={paso.icon}
                     text={paso.text}
                     points={paso.points}
                  />
               ))}
            </Stack>
         </Stack>
      </Stack>
   );
};

export default PasosExtended;
