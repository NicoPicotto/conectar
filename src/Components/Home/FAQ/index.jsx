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
} from "@chakra-ui/react";

const Faq = () => {
   const faqInfo = [
      {
         question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
         answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
         question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
         answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
         question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
         answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
         question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
         answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
         question: "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
         answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
   ];

   return (
      <Stack align='center' paddingInline='2rem' bgColor='negroOscuro'>
         <Stack maxW='80rem' w='100%' gap='1.5rem' paddingBlock='5rem'>
            <SimpleGrid columns={2} spacing='1rem'>
               <Heading size='xl' lineHeight={1.3} mb='1rem' maxW='15ch'>
                  <Highlight query='respuestas' styles={{ color: "celeste" }}>
                     ¿Tenés preguntas? Tenemos respuestas.
                  </Highlight>
               </Heading>
               <Accordion allowMultiple>
                  {faqInfo.map((faq) => (
                     <AccordionItem borderColor='azul' key={faq.index}>
                        <AccordionButton
                           _expanded={{ bg: "azul", color: "blanco" }}
                        >
                           <Box as='span' flex='1' textAlign='left'>
                              {faq.question}
                           </Box>
                           <AccordionIcon />
                        </AccordionButton>

                        <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
                     </AccordionItem>
                  ))}
               </Accordion>
            </SimpleGrid>
         </Stack>
      </Stack>
   );
};

export default Faq;
