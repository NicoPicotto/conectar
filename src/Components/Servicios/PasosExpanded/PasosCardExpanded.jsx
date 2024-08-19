/* eslint-disable react/prop-types */
import {
   Stack,
   Heading,
   Image,
   UnorderedList,
   ListItem,
} from "@chakra-ui/react";

const PasosCardExpanded = ({ icon, text, points }) => {
   return (
      <Stack
         w='100%'
         transition='0.2s ease'
         _hover={{ bgColor: "whiteAlpha.100" }}
         p='1rem'
      >
         <Stack direction='row' align='start' mb='1rem'>
            <Image src={icon} h='1.5rem' alt={`Imagen de ${text}`} />
            <Heading fontWeight='regular' size='md'>
               {text}
            </Heading>
         </Stack>
         <UnorderedList spacing='1rem'>
            {points.map((point) => (
               <ListItem key='point'>{point}</ListItem>
            ))}
         </UnorderedList>
      </Stack>
   );
};

export default PasosCardExpanded;
