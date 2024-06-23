import { extendTheme } from "@chakra-ui/react";

const colors = {
   negro: "#2B2A2F",
   blanco: "#FFFFFF",
   azul: "#3691C2",
   celeste: "#5FC9DF",
   gris: "#D7D7D7",
};

const fonts = {
   heading: `"Unbounded", sans-serif;`,
   body: `"Alexandria", sans-serif;`,
};

const Button = {
   baseStyle: {
      fontWeight: "regular",
      rounded: 5,
   },
   // Variaciones de estilos por prop `variant`
   variants: {
      solid: {
         bg: colors.azul,
         width: "fit-content",
         color: colors.blanco,
         _hover: {
            bg: "#2F83A8",
         },
      },
      outline: {
         border: "2px solid",
         width: "fit-content",
         borderColor: colors.blanco,
         color: colors.blanco,
         _hover: {
            bg: colors.azul,
            borderColor: colors.azul,
            color: colors.blanco,
         },
      },
      ghost: {
         color: colors.azul,
         width: "fit-content",
         _hover: {
            bg: colors.azul,
            color: colors.blanco,
         },
      },
      link: {
         color: colors.blanco,
         width: "fit-content",
         _hover: {
            textDecoration: "underline",
            textUnderlineOffset: "2px",
         },
      },
   },
};

const styles = {
   global: {
      "html, body": {
         backgroundColor: colors.negro,
         color: colors.blanco,
         fontSize: "16px",
         scrollBehavior: "smooth",
      },
   },
};

const theme = extendTheme({ colors, fonts, styles, components: { Button } });

export default theme;
