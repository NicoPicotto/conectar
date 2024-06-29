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
               <Image w='5rem' src={logo} />
            </Stack>
            <Stack direction='row' gap='2rem'>
               <Button variant='link'>Equipo</Button>
               <Button variant='link'>Servicios</Button>
               <Button variant='link'>Aliados Estratégicos</Button>
               <Button variant='link'>Preguntas Frecuentes</Button>
               <Button>Contactate</Button>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default Navbar;
