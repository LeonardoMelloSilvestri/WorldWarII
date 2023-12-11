import { ChakraProvider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
