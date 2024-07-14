import { Stack, Divider, Text, Button, Image, Icon } from "@chakra-ui/react";
import SpacerTop from "../Spacers/spacerTop";
import logo from "/assets/images/logo-full.svg";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
   return (
      <>
         <SpacerTop espejado={true} />
         <Stack align='center' paddingInline='2rem' bgColor='negroOscuro'>
            <Stack maxW='80rem' w='100%' gap='1.5rem' marginBottom='3rem'>
               <Stack direction='row' justify='space-between'>
                  <Stack>
                     <Image w='10rem' src={logo} mb='3rem' />
                     <Stack>
                        <Text fontSize='sm' display='flex' alignItems='center'>
                           <Icon mr={2} fontSize='md' as={MdLocationOn} />
                           Calle falsa 123, General Deheza, Córdoba (Argentina).
                        </Text>
                        <Text fontSize='sm' display='flex' alignItems='center'>
                           <Icon mr={2} fontSize='md' as={IoLogoWhatsapp} />
                           (0358) 12345678
                        </Text>
                        <Text fontSize='sm' display='flex' alignItems='center'>
                           <Icon mr={2} fontSize='md' as={MdEmail} />
                           info@conectar-gd.com
                        </Text>
                     </Stack>
                  </Stack>
                  <Stack gap='1rem' justify='flex-end' align='flex-end'>
                     <Button variant='link' size='sm' fontFamily='body'>
                        Equipo
                     </Button>
                     <Button variant='link' size='sm' fontFamily='body'>
                        Servicios
                     </Button>
                     <Button variant='link' size='sm' fontFamily='body'>
                        Aliados Estratégicos
                     </Button>
                     <Button variant='link' size='sm' fontFamily='body'>
                        Preguntas Frecuentes
                     </Button>
                     <Button variant='link' size='sm' fontFamily='body'>
                        Contactarse
                     </Button>
                  </Stack>
               </Stack>
               <Divider />
               <Stack direction='row' justify='space-between'>
                  <Text fontSize='sm' mb={-2}>
                     © 2024 Conectar
                  </Text>
                  <Text fontSize='sm' mb={-2}>
                     Todos los derechos reservados.
                  </Text>
               </Stack>
            </Stack>
         </Stack>
      </>
   );
};

export default Footer;
