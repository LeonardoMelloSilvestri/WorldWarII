import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        bgGradient="linear(to-r, green.500, green.600, green.700)"
        p={4}
        borderBottom={{ base: "", lg: "2px solid white" }}
        align="center"
        justify="space-between"
      >
        <Box p="2">
          <Heading as="h1" size="md" color="white">
            <Link onClick={() => onClose()} to="/">
              World War II
            </Link>
          </Heading>
        </Box>
        <Box
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
        >
          <Link to="/cronologia">
            <Button
              onClick={() => onClose()}
              _hover={{ bg: "white", color: "green.600" }}
              bg="transparent"
              color="white"
              mr={2}
            >
              Cronologia
            </Button>
          </Link>
          <Link to="/participantes">
            <Button
              _hover={{ bg: "white", color: "green.600" }}
              bg="transparent"
              color="white"
              mr={2}
            >
              Participantes
            </Button>
          </Link>
        </Box>
        <IconButton
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="ghost"
          color="white"
          size="md"
          aria-label="Open navigation drawer"
          ml={5}
          display={{ base: "block", md: "none" }}
        />
      </Flex>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent
          color="white"
          bgGradient="linear(to-r, green.500, green.600)"
        >
          <DrawerCloseButton />
          <DrawerHeader>
            <Link onClick={onClose} to="/">
              World War II
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing="10px">
              <Link onClick={onClose} to="/">
                <Button
                  fontSize="xl"
                  color="white"
                  variant="link"
                  href="#"
                  w="100%"
                  mb={2}
                >
                  Home
                </Button>
              </Link>
              <Link onClick={onClose} to="/cronologia">
                <Button
                  fontSize="xl"
                  color="white"
                  variant="link"
                  href="#"
                  w="100%"
                  mb={2}
                >
                  Cronologia
                </Button>
              </Link>
              <Link onClick={onClose} to="/participantes">
                <Button
                  fontSize="xl"
                  color="white"
                  variant="link"
                  href="#"
                  w="100%"
                  mb={2}
                >
                  Participantes
                </Button>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
