import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import {
   BrowserRouter as Router,
   Route,
   Routes,
   useLocation,
} from "react-router-dom";
import HomeView from "./View/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ServiciosView from "./View/Servicios";
import EquipoView from "./View/Equipo";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Lenis from "@studio-freight/lenis";

function SmoothScrollWrapper({ children }) {
   const location = useLocation();

   useEffect(() => {
      const lenis = new Lenis();

      function raf(time) {
         lenis.raf(time);
         requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      const handleAnchorClick = (e) => {
         const target = document.querySelector(
            e.currentTarget.getAttribute("href")
         );

         if (target) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -80 });
         }
      };

      const anchors = document.querySelectorAll("[href^='#']");
      anchors.forEach((anchor) => {
         anchor.addEventListener("click", handleAnchorClick);
      });

      // Clean up the event listeners
      return () => {
         anchors.forEach((anchor) => {
            anchor.removeEventListener("click", handleAnchorClick);
         });
      };
   }, [location]);

   return children;
}

function App() {
   return (
      <ChakraProvider theme={theme}>
         <Router>
            <ScrollToTop />
            <Navbar />
            <SmoothScrollWrapper>
               <Routes>
                  <Route path='/' element={<HomeView />} />
                  <Route path='/servicios' element={<ServiciosView />} />
                  <Route path='/nosotros' element={<EquipoView />} />
               </Routes>
            </SmoothScrollWrapper>
            <Footer />
            <ScrollToTopButton />
         </Router>
      </ChakraProvider>
   );
}

export default App;
