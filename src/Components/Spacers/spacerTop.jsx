import { Image, Stack } from "@chakra-ui/react";
import spacerImg from "/assets/images/curve-top.svg";

const SpacerTop = () => {
   return (
      <Stack w='100dvw'>
         <Image src={spacerImg} />
      </Stack>
   );
};

export default SpacerTop;
