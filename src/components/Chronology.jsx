import AccordionChrono from "./AccordionChrono";
import {
  Box,
  Text,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { useAccordionStore, useDrawerStore } from "../store/store";
import { useRef, useState, useEffect } from "react";

export default function Chronology() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { name, content } = useAccordionStore();
  const btnRef = useRef();

  const isDrawerOpen = useDrawerStore((state) => state.isDrawerOpen);
  const openDrawer = useDrawerStore((state) => state.openDrawer);
  const closeDrawer = useDrawerStore((state) => state.closeDrawer);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Flex flexDirection={{ base: "column", lg: "row" }}>
        {screenWidth > 992 ? (
          <AccordionChrono />
        ) : (
          <Button
            _hover={{ bg: "green.500", color: "white" }}
            size={"lg"}
            bg={"green.600"}
            color={"white"}
            my={"5px"}
            mx={"10px"}
            ref={btnRef}
            onClick={openDrawer}
          >
            Cronologia
          </Button>
        )}

        <Drawer
          isOpen={isDrawerOpen}
          size={"sm"}
          placement="left"
          onClose={closeDrawer}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Segunda Guerra Mundial - Cronologia</DrawerHeader>

            <DrawerBody overflowY={"hidden"}>
              <AccordionChrono />
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Box minH={"100vh"} p={{ base: "1rem", lg: "2rem" }}>
          <Text color={"green.700"} fontWeight={"semibold"} fontSize={"4xl"}>
            {name}
          </Text>
          <Text mt={"0.8rem"} letterSpacing={"1px"}>
            {content}
          </Text>
        </Box>
      </Flex>
    </>
  );
}
