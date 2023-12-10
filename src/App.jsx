import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";
import Summary from "./components/Summary";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Home />
      <Statistics />
      <Summary />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
