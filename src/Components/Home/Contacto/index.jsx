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

   const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes agregar lógica adicional si es necesario.
      // Luego de enviar el formulario a través del atributo action, establecemos el estado:
      setIsSubmitted(true);

      // Simular el envío del formulario manualmente si es necesario
      event.target.submit();
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
               <Stack
                  as='form'
                  gap='1rem'
                  action='https://formsubmit.co/d9266b665bb4566e1ae1f67371c3079e'
                  method='POST'
                  onSubmit={handleSubmit}
               >
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
                           <option value='option1'>Servicios</option>
                           <option value='option1'>Industria</option>
                           <option value='option1'>Agroindustria</option>
                           <option value='option2'>Tecnología</option>
                           <option value='option3'>Otro</option>
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
               </Stack>
            </SimpleGrid>
         </Stack>
      </Stack>
   );
};

export default Contacto;
