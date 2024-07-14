import { Image, Stack } from "@chakra-ui/react";
import spacerImg from "/assets/images/curve-top.svg";

const SpacerTop = ({ espejado }) => {
   return (
      <Stack maxW='100dvw'>
         <Image
            src={spacerImg}
            transform={espejado ? "scaleX(-1)" : "scaleX(1)"}
         />
      </Stack>
   );
};

export default SpacerTop;
