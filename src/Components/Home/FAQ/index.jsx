/* eslint-disable react/prop-types */
import {
   Stack,
   Heading,
   Highlight,
   SimpleGrid,
   Accordion,
   AccordionItem,
   AccordionButton,
   AccordionPanel,
   AccordionIcon,
   Box,
   Text,
   useMediaQuery
} from "@chakra-ui/react";

const Faq = ({ bgColor }) => {
   const [isMobile] = useMediaQuery("(max-width: 900px)");

   const faqInfo = [
      {
         question: "¿En qué áreas de negocio puedo solicitar asesoramiento?",
         answer: `- Gestión de calidad.
            - Gestión ambiental.
            - Inocuidad Alimentaria.
            - Seguridad de la información.
            - Sostenibilidad y responsabilidad social.`,
      },
      {
         question:
            "¿Cuál es la experiencia y especialización de sus consultores en el sector?",
         answer: `Nuestros consultores cuentan con una amplia experiencia y especialización en diversos sectores, incluyendo calidad, medioambiente, inocuidad, seguridad de la información, sostenibilidad y responsabilidad social, entre otros. Muchos de ellos han trabajado en diferentes empresas líderes en su industria y cuentan con una sólida formación académica en áreas relevantes. Además, regularmente participan en cursos de actualización y capacitación para mantenerse al día con las últimas tendencias y mejores prácticas en el sector.`,
      },
      {
         question:
            "¿Cómo se desarrolla el proceso de consultoría, desde el diagnóstico hasta la certificación?",
         answer: `El proceso de consultoría es un proceso complejo que involucra varias etapas desde el diagnóstico hasta la certificación. A continuación, se detallan las etapas típicas de un proceso de consultoría:

            1) Diagnóstico inicial: En esta etapa, el consultor se reúne con el cliente para identificar las necesidades y problemas que enfrenta la organización. Se realizan entrevistas, revisiones de documentación, análisis de datos, evaluaciones de procesos, entre otros métodos, con el fin de comprender a fondo la situación actual de la empresa.
            
            2) Planificación y diseño de la intervención: Una vez que se ha completado el diagnóstico inicial, se procede a planificar y diseñar la intervención consultiva. En esta etapa se definen los objetivos, estrategias, acciones y recursos necesarios para abordar los problemas identificados y lograr las metas establecidas.
            
            3) Implementación de las soluciones: En esta etapa, el consultor trabaja en colaboración con el cliente para implementar las soluciones propuestas. Esto puede incluir el diseño e implementación de programas de capacitación, la reestructuración de procesos, el desarrollo de políticas y procedimientos, entre otras acciones.
            
            4) Evaluación de resultados: Una vez que se han implementado las soluciones propuestas, se lleva a cabo una evaluación de los resultados obtenidos. Se analiza si se han logrado los objetivos establecidos, se identifican los impactos positivos y se detectan posibles áreas de mejora.
            
            5)Certificación y cierre: realizamos un acompañamiento en el proceso de certificación y en la resolución de posibles desvíos detectados en las auditorías.`,
      },
      {
         question:
            "¿Cuánto tiempo insume un proceso de certificación de una norma de calidad?",
         answer: `El tiempo que insume un proceso de certificación de calidad, como el del Sistema de Gestión de Calidad según la norma ISO 9001:2015, puede variar considerablemente. Generalmente, puede llevar desde varios meses hasta un par de años, dependiendo de la complejidad de la organización, el alcance del sistema, y el grado de preparación previa. Es fundamental tener en cuenta que este proceso requiere dedicación y esfuerzo, así como recursos económico.`,
      },
      {
         question:
            " ¿Qué tipo de seguimiento y soporte se ofrece después de finalizado el servicio de consultoría?",
         answer: `El tipo de seguimiento y soporte ofrecido después de finalizado el servicio de consultoría puede variar dependiendo de la empresa consultora y el tipo de servicio prestado. Algunas posibles opciones de seguimiento y soporte incluyen:

            1) Sesiones de seguimiento: reuniones programadas con el cliente para evaluar el progreso y resultados obtenidos a raíz de las recomendaciones realizadas durante la consultoría.
            
            2) Soporte técnico: ofrecer asistencia técnica para resolver cualquier problema o duda que pueda surgir después de finalizado el servicio de consultoría.
            
            3) Sesiones de formación: ofrecer sesiones de formación o capacitación para el personal del cliente con el fin de asegurar la correcta implementación de las recomendaciones.`,
      },
   ];

   return (
      <Stack
         align='center'
         paddingInline='2rem'
         bgColor={bgColor ? bgColor : "negroOscuro"}
         id='faq'
      >
         <Stack maxW='80rem' w='100%' gap='1.5rem' paddingBlock='5rem'>
            <SimpleGrid columns={isMobile ? 1 : 2} spacing='1rem'>
               <Heading size='xl' lineHeight={1.3} mb='1rem' maxW='15ch'>
                  <Highlight query='respuestas' styles={{ color: "celeste" }}>
                     ¿Tenés preguntas? Tenemos respuestas.
                  </Highlight>
               </Heading>
               <Accordion allowMultiple>
                  {faqInfo.map((faq) => (
                     <AccordionItem borderColor='azul' key={faq.question}>
                        <AccordionButton
                           _expanded={{ bg: "azul", color: "blanco" }}
                        >
                           <Box as='span' flex='1' textAlign='left'>
                              {faq.question}
                           </Box>
                           <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4}>
                           <Text fontWeight={300} whiteSpace='pre-line'>
                              {faq.answer}
                           </Text>
                        </AccordionPanel>
                     </AccordionItem>
                  ))}
               </Accordion>
            </SimpleGrid>
         </Stack>
      </Stack>
   );
};

export default Faq;
