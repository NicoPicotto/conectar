/* eslint-disable react/prop-types */
import { Image, Stack } from "@chakra-ui/react";
import spacerImg from "/assets/images/curve-top.svg";

const SpacerTop = ({ espejado }) => {
   return (
      <Stack maxW='100dvw'>
         <Image
            src={spacerImg}
            alt='Espaciador de secciones'
            transform={espejado ? "scaleX(-1)" : "scaleX(1)"}
         />
      </Stack>
   );
};

export default SpacerTop;
