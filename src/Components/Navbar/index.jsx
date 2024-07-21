import React from "react";
import { Stack, Text, Button, Link, Image } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import logo from "/assets/images/logosvg.svg";

const Navbar = () => {
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
                  <Image w='5rem' src={logo} />
               </Link>
            </Stack>
            <Stack direction='row' gap='2rem' align='center'>
               <Link as={ReachLink} to='/equipo'>
                  <Button variant='link'>Equipo</Button>
               </Link>
               <Link as={ReachLink} to='/servicios'>
                  <Button variant='link'>Servicios</Button>
               </Link>
               <Link as={ReachLink} to='/aliados'>
                  <Button variant='link'>Aliados Estratégicos</Button>
               </Link>
               <Link as='a' href='#faq'>
                  <Button variant='link'>Preguntas Frecuentes</Button>
               </Link>

               <Button>Contactate</Button>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default Navbar;
