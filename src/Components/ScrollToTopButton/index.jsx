import { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { IoMdArrowRoundUp } from "react-icons/io";

const ScrollToTopButton = () => {
   const [isVisible, setIsVisible] = useState(false);

   const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop > 50 && scrollTop + clientHeight < scrollHeight) {
         setIsVisible(true);
      } else {
         setIsVisible(false);
      }
   };

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <IconButton
         icon={<IoMdArrowRoundUp />}
         onClick={scrollToTop}
         position='fixed'
         opacity={isVisible ? 1 : 0}
         transition='0.3s'
         bottom='20px'
         right='20px'
         zIndex='1000'
         aria-label='Scroll to top'
         pointerEvents={isVisible ? "auto" : "none"}
      />
   );
};

export default ScrollToTopButton;
