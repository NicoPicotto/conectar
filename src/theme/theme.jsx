import { extendTheme } from "@chakra-ui/react";

const colors = {
   negro: "#2B2A2F",
   negroOscuro: "#232226",
   blanco: "#FFFFFF",
   azul: "#3691C2",
   celeste: "#5FC9DF",
   gris: "#292929",
};

const fonts = {
   heading: `"Unbounded", sans-serif;`,
   body: `"Alexandria", sans-serif;`,
};

const Heading = {
   baseStyle: {
      fontWeight: "regular",
   },
};

const Button = {
   baseStyle: {
      fontWeight: "regular",
      rounded: "full",
      fontFamily: `"Unbounded", sans-serif;`,
      shadow: "md",
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
         shadow: "none",
         _hover: {
            bg: colors.azul,
            color: colors.blanco,
            shadow: "md",
         },
      },
      link: {
         color: colors.blanco,
         width: "fit-content",
         shadow: "none",
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

const theme = extendTheme({
   colors,
   fonts,
   styles,
   components: { Button, Heading },
});

export default theme;
