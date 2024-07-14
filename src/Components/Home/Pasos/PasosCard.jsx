/* eslint-disable react/prop-types */
import { Stack, Heading, Image } from "@chakra-ui/react";

const PasosCard = ({ icon, text }) => {
   return (
      <Stack
         borderWidth={1}
         borderColor='azul'
         borderRadius={20}
         bgColor='gris'
         w='100%'
         h='12rem'
         p='1rem'
         transition='0.2s ease'
         justify='space-between'
         _hover={{ filter: "brightness(1.2)" }}
      >
         <Stack align='start'>
            <Image src={icon} h='2rem' />
         </Stack>
         <Stack>
            {" "}
            <Heading fontWeight='regular' size='md'>
               {text}
            </Heading>
         </Stack>
      </Stack>
   );
};

export default PasosCard;
