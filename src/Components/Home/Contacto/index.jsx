/* eslint-disable react/prop-types */
import { useState } from "react";
import {
   Stack,
   Heading,
   Highlight,
   FormControl,
   Input,
   FormLabel,
   Button,
   SimpleGrid,
   Select,
   Textarea,
   Text,
} from "@chakra-ui/react";

const Contacto = ({ bgColor }) => {
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isError, setIsError] = useState(false);

   const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);

      try {
         const response = await fetch("https://conectar-gd.com/sendEmail.php", {
            // Cambia a HTTPS
            method: "POST",
            body: formData,
         });

         const result = await response.json();

         if (result.success) {
            setIsSubmitted(true);
         } else {
            setIsError(true);
         }
      } catch (error) {
         setIsError(true);
      }
   };

   return (
      <Stack
         align='center'
         paddingInline='2rem'
         paddingBlock='2rem'
         id='contact'
         bgColor={bgColor ? bgColor : "negro"}
      >
         <Stack maxW='80rem' w='100%' gap='1.5rem' paddingBlock='5rem'>
            <SimpleGrid columns={2} spacing='1rem'>
               <Heading size='xl' lineHeight={1.1} mb='1rem' maxW='15ch'>
                  <Highlight query='normas' styles={{ color: "celeste" }}>
                     Contactate y comenzá a impulsar tu crecimiento
                  </Highlight>
               </Heading>
               <Stack as='form' gap='1rem' onSubmit={handleSubmit}>
                  <Stack direction='row' gap='1rem'>
                     <FormControl>
                        <FormLabel fontSize='sm' paddingLeft='0.5rem'>
                           Nombre{" "}
                           <Text as='span' color='red'>
                              *
                           </Text>
                        </FormLabel>
                        <Input
                           type='name'
                           name='nombre'
                           shadow='md'
                           placeholder='Juan Perez'
                           focusBorderColor='celeste'
                           borderRadius='full'
                           borderColor='azul'
                           _hover={{ borderColor: "celeste" }}
                        />
                     </FormControl>
                     <FormControl>
                        <FormLabel fontSize='sm' paddingLeft='0.5rem'>
                           Email{" "}
                           <Text as='span' color='red'>
                              *
                           </Text>
                        </FormLabel>
                        <Input
                           type='email'
                           name='email'
                           shadow='md'
                           placeholder='juanperez@gmail.com'
                           focusBorderColor='celeste'
                           borderRadius='full'
                           borderColor='azul'
                           _hover={{ borderColor: "celeste" }}
                        />
                     </FormControl>
                  </Stack>
                  <Stack direction='row' gap='1rem'>
                     <FormControl>
                        <FormLabel fontSize='sm' paddingLeft='0.5rem'>
                           Nombre de tu empresa
                        </FormLabel>
                        <Input
                           type='text'
                           name='empresa'
                           shadow='md'
                           placeholder='Perez SA'
                           focusBorderColor='celeste'
                           borderRadius='full'
                           borderColor='azul'
                           _hover={{ borderColor: "celeste" }}
                        />
                     </FormControl>
                     <FormControl>
                        <FormLabel fontSize='sm' paddingLeft='0.5rem'>
                           Rubro
                        </FormLabel>
                        <Select
                           placeholder='Seleccioná una opción'
                           name='rubro'
                           shadow='md'
                           focusBorderColor='celeste'
                           borderRadius='full'
                           type='text'
                           borderColor='azul'
                           _hover={{ borderColor: "celeste" }}
                        >
                           <option value='Servicios'>Servicios</option>
                           <option value='Industria'>Industria</option>
                           <option value='Agroindustria'>Agroindustria</option>
                           <option value='Tecnología'>Tecnología</option>
                           <option value='Otro'>Otro</option>
                        </Select>
                     </FormControl>
                  </Stack>
                  <FormControl>
                     <FormLabel fontSize='sm' paddingLeft='0.5rem'>
                        Mensaje{" "}
                        <Text as='span' color='red'>
                           *
                        </Text>
                     </FormLabel>
                     <Textarea
                        placeholder='Escribe tu mensaje...'
                        focusBorderColor='celeste'
                        name='mensaje'
                        shadow='md'
                        type='message'
                        borderRadius={10}
                        borderColor='azul'
                        rows={8}
                        _hover={{ borderColor: "celeste" }}
                     />
                  </FormControl>
                  {!isSubmitted ? (
                     <Button type='submit' size='sm'>
                        Enviar mensaje
                     </Button>
                  ) : (
                     <Text color='blanco' fontWeight='bold'>
                        Mensaje enviado, pronto nos pondremos en contacto.
                     </Text>
                  )}
                  {isError && (
                     <Text color='red' fontWeight='bold'>
                        Ocurrió un error al enviar el mensaje. Por favor,
                        intenta nuevamente.
                     </Text>
                  )}
               </Stack>
            </SimpleGrid>
         </Stack>
      </Stack>
   );
};

export default Contacto;
