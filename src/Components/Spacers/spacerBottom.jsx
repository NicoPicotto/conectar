import { Image, Stack } from "@chakra-ui/react";
import spacerImg from "/assets/images/curve-bottom.svg";

const SpacerBottom = () => {
   return (
      <Stack w='100dvw'>
         <Image src={spacerImg} />
      </Stack>
   );
};

export default SpacerBottom;
