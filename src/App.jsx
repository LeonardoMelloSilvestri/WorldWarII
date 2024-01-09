import { lazy, Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Loading from "./components/Loading";
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <ChakraProvider>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Outlet />
        <Footer />
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
