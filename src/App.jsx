import { ChakraProvider } from "@chakra-ui/react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Home />
      <Statistics />
    </ChakraProvider>
  );
}

export default App;
