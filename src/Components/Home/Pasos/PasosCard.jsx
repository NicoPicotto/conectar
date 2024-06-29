import { Stack, Text, Heading, Image } from "@chakra-ui/react";

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
         justify='space-between'
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
