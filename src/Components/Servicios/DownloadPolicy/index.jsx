import { Stack, Heading, Icon } from "@chakra-ui/react";
import { MdDownloadForOffline } from "react-icons/md";

const DownloadPolicy = () => {
   return (
      <Stack align='center' paddingInline='2rem' bgColor='negroOscuro'>
         <Stack
            maxW='80rem'
            w='100%'
            gap='1rem'
            align='center'
            paddingBlock='3rem'
            marginBlock='3rem'
            direction='row'
            justify='center'
            borderBlock='1px solid #3691C2'
         >
            <Heading
               as='a'
               download
               href='/assets/politica/PGS-01-00_PolíticaDeGestiónSostenible.pdf'
               size='lg'
               lineHeight={1.1}
               textDecorationColor='celeste'
               _hover={{ textDecoration: "underline" }}
            >
               Descargá nuestra Política de Calidad
            </Heading>
            <Icon
               as={MdDownloadForOffline}
               color='celeste'
               fontSize='xx-large'
            />
         </Stack>
      </Stack>
   );
};

export default DownloadPolicy;
