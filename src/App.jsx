import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from "./View/Home";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';

function App() {
   return (
      <ChakraProvider theme={theme}>
         <Router>
            <Navbar />
            <Routes>
               <Route path='/' element={<HomeView />} />
            </Routes>
            <Footer />
         </Router>
      </ChakraProvider>
   );
}

export default App;
