/* eslint-disable react/jsx-no-comment-textnodes */
import {
   Stack,
   Divider,
   Text,
   Button,
   Image,
   Icon,
   Link,
   useMediaQuery,
} from "@chakra-ui/react";
import SpacerTop from "../Spacers/spacerTop";
import logo from "/assets/images/logo-full.svg";
import { Link as ReachLink } from "react-router-dom";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
   const currentYear = new Date().getFullYear();
   const [isMobile] = useMediaQuery("(max-width: 900px)");

   return (
      <>
         <SpacerTop espejado={true} />
         <Stack align='center' paddingInline='2rem' bgColor='negroOscuro'>
            <Stack maxW='80rem' w='100%' gap='1rem' marginBottom='3rem'>
               <Stack
                  direction={isMobile ? "column" : "row"}
                  justify='space-between'
               >
                  <Stack>
                     <Link as={ReachLink} to='/'>
                        <Image w='10rem' src={logo} mb='3rem' />
                     </Link>
                     <Stack>
                        <Text
                           fontSize='sm'
                           display='flex'
                           alignItems={isMobile ? "flex-start" : "center"}
                        >
                           <Icon mr={2} fontSize='md' as={MdLocationOn} />
                           Ada Montinori de Herrera 60, General Deheza
                           (Córdoba).
                        </Text>
                        <Stack direction='row' align='center'>
                           {" "}
                           <Text
                              as='a'
                              href='
                            https://api.whatsapp.com/send?phone=5493584355413&text=%C2%A1Hola!%20Estoy%20interesado%20en%20los%20servicios%20de%20Conectar.'
                              fontSize='sm'
                              target='_blank'
                              display='flex'
                              alignItems='center'
                           >
                              <Icon mr={2} fontSize='md' as={IoLogoWhatsapp} />
                              358-12345678
                           </Text>
                           <Text fontSize='sm'>|</Text>
                           <Text
                              as='a'
                              href='
                            https://api.whatsapp.com/send?phone=5493584907603&text=%C2%A1Hola!%20Estoy%20interesado%20en%20los%20servicios%20de%20Conectar.'
                              fontSize='sm'
                              target='_blank'
                              display='flex'
                              alignItems='center'
                           >
                              358-4907603
                           </Text>
                        </Stack>

                        <Text
                           as='a'
                           href='mailto:info@conectar-gd.com'
                           fontSize='sm'
                           display='flex'
                           alignItems='center'
                        >
                           <Icon mr={2} fontSize='md' as={MdEmail} />
                           info@conectar-gd.com
                        </Text>
                     </Stack>
                  </Stack>
                  {!isMobile && (
                     <Stack gap='1rem' justify='flex-end' align='flex-end'>
                        <Link as={ReachLink} to='/nosotros'>
                           <Button variant='link' size='sm' fontFamily='body'>
                              Nosotros
                           </Button>
                        </Link>
                        <Link as={ReachLink} to='/servicios'>
                           <Button variant='link' size='sm' fontFamily='body'>
                              Servicios
                           </Button>
                        </Link>
                        <Link as={ReachLink} to='/faq'>
                           <Button variant='link' size='sm' fontFamily='body'>
                              Preguntas Frecuentes
                           </Button>
                        </Link>
                        <Link as='a' href='#contact'>
                           <Button variant='link' size='sm' fontFamily='body'>
                              Contactarse
                           </Button>
                        </Link>
                     </Stack>
                  )}
               </Stack>
               <Divider />
               <Stack
                  direction={isMobile ? "column" : "row"}
                  justify='space-between'
               >
                  <Text fontSize='xs'>© {currentYear} Conectar</Text>
                  <Text
                     fontSize='xs'
                     maxW='42ch'
                     textAlign={isMobile ? "left" : "right"}
                  >
                     Este sitio está protegido por reCAPTCHA y aplican la{" "}
                     <Text
                        as='a'
                        textDecor='underline'
                        href='https://policies.google.com/privacy'
                     >
                        Política de privacidad
                     </Text>{" "}
                     y los{" "}
                     <Text
                        as='a'
                        textDecor='underline'
                        href='https://policies.google.com/terms'
                     >
                        Términos de servicio
                     </Text>{" "}
                     de Google.
                  </Text>
               </Stack>
            </Stack>
         </Stack>
      </>
   );
};

export default Footer;
