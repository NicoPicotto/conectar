import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeView from './View/Home';

function App() {
   return (
      <ChakraProvider theme={theme}>
         <Router>
            <Routes>
               <Route path='/' element={<HomeView />} />
            </Routes>
         </Router>
      </ChakraProvider>
   );
}

export default App;
