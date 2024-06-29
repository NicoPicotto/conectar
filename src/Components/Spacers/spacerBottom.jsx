import { Image, Stack } from "@chakra-ui/react";
import spacerImg from "/assets/images/curve-bottom.svg";

const SpacerBottom = () => {
   return (
      <Stack position='relative' paddingInline='-2rem' w='100dvw'>
         <Image src={spacerImg} />
      </Stack>
   );
};

export default SpacerBottom;
