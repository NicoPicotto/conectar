import {
   Stack,
   Button,
   Link,
   Image,
   useDisclosure,
   Icon,
   useMediaQuery,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import NavMobile from "./NavMobile";
import logo from "/assets/images/logosvg.svg";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [isMobile] = useMediaQuery("(max-width: 900px)");

   return (
      <Stack p='2rem' position='sticky' top={0} align='center' zIndex={100}>
         <Stack
            maxW='80rem'
            w='100%'
            border='1px solid white'
            paddingBlock='1rem'
            paddingInline='1.3rem'
            borderRadius='full'
            direction='row'
            align='center'
            justify='space-between'
            shadow='lg'
            backdropFilter='auto'
            backdropBlur='6px'
         >
            <Stack>
               <Link as={ReachLink} to='/'>
                  <Image
                     w={isMobile ? "2.5rem" : "5rem"}
                     src={logo}
                     alt='Logo de Conectar'
                  />
               </Link>
            </Stack>
            {!isMobile && (
               <Stack direction='row' gap='3rem' align='center'>
                  <Link as={ReachLink} to='/nosotros'>
                     <Button
                        variant='link'
                        aria-label='Ir a la sección Nosotros'
                     >
                        Nosotros
                     </Button>
                  </Link>
                  <Link as={ReachLink} to='/servicios'>
                     <Button
                        aria-label='Ir a la sección Servicios'
                        variant='link'
                     >
                        Servicios
                     </Button>
                  </Link>
                  <Link as={ReachLink} to='/faq'>
                     <Button
                        aria-label='Ir a la sección Preguntas Frecuentes'
                        variant='link'
                     >
                        Preguntas Frecuentes
                     </Button>
                  </Link>
                  <Link as='a' href='#contact'>
                     <Button aria-label='Ir a la sección Contactarse'>
                        Contactate
                     </Button>
                  </Link>
               </Stack>
            )}

            {isMobile && (
               <Icon
                  variant='ghost'
                  className='menu-icon'
                  as={RiMenu3Fill}
                  fontSize='1.5rem'
                  onClick={onOpen}
                  bgColor='transparent'
                  _hover={{ bgColor: "transparent" }}
               />
            )}

            <NavMobile onClose={onClose} isOpen={isOpen} />
         </Stack>
      </Stack>
   );
};

export default Navbar;
