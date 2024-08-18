/* eslint-disable react/prop-types */

import {
   Drawer,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
   DrawerBody,
   Link,
   Button,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

const NavMobile = ({ onClose, isOpen }) => {
   return (
      <Drawer onClose={onClose} isOpen={isOpen} size='full'>
         <DrawerOverlay />
         <DrawerContent bgColor='negroOscuro'>
            <DrawerCloseButton
               color='blanco'
               fontSize='1.5rem'
               padding='2em'
               _focusVisible={false}
            />
            <DrawerBody
               h='100%'
               alignItems='center'
               display='flex'
               justifyContent='center'
               flexDir='column'
               gap='3em'
            >
               <Link as={ReachLink} to='/' onClick={onClose}>
                  <Button
                     textDecor='underline'
                     variant='link'
                     fontSize='xl'
                     textUnderlineOffset={4}
                     textDecorationColor='azul'
                  >
                     Inicio
                  </Button>
               </Link>
               <Link as={ReachLink} to='/nosotros' onClick={onClose}>
                  <Button
                     textDecor='underline'
                     variant='link'
                     fontSize='xl'
                     textUnderlineOffset={4}
                     textDecorationColor='azul'
                  >
                     Nosotros
                  </Button>
               </Link>
               <Link as={ReachLink} to='/servicios' onClick={onClose}>
                  <Button
                     textDecor='underline'
                     variant='link'
                     fontSize='xl'
                     textUnderlineOffset={4}
                     textDecorationColor='azul'
                  >
                     Servicios
                  </Button>
               </Link>

               <Link as={ReachLink} to='/faq' onClick={onClose}>
                  <Button
                     textDecor='underline'
                     variant='link'
                     fontSize='xl'
                     textUnderlineOffset={4}
                     textDecorationColor='azul'
                  >
                     Preguntas Frecuentes
                  </Button>
               </Link>

               <Link as='a' href='#contact' onClick={onClose}>
                  <Button
                     textDecor='underline'
                     variant='link'
                     fontSize='xl'
                     textUnderlineOffset={4}
                     textDecorationColor='azul'
                  >
                     Contacto
                  </Button>
               </Link>
            </DrawerBody>
         </DrawerContent>
      </Drawer>
   );
};

export default NavMobile;
