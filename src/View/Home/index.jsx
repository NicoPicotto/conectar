import { Stack, Heading, Text, Button } from "@chakra-ui/react";

const HomeView = () => {
   return (
      <Stack>
         <Heading>Hello world!</Heading>
         <Text>This is a paragraph.</Text>
         <Text color='azul'>This is a paragraph.</Text>
         <Text color='celeste'>This is a paragraph.</Text>
         <Stack direction='row'>
            <Button>This is a button</Button>
            <Button variant='outline'>This is another button</Button>
         </Stack>
      </Stack>
   );
};

export default HomeView;
