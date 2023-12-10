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

const NavbarWithDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        bgGradient="linear(to-r, green.500, green.600, green.700)"
        p={4}
        align="center"
        justify="space-between"
      >
        <Box p="2">
          <Heading as="h1" size="md" color="white">
            World War II
          </Heading>
        </Box>
        <Box
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
        >
          <Button
            _hover={{ bg: "white", color: "green.600" }}
            bg="transparent"
            color="white"
            mr={2}
          >
            Cronologia
          </Button>
          <Button
            _hover={{ bg: "white", color: "green.600" }}
            bg="transparent"
            color="white"
            mr={2}
          >
            Participantes
          </Button>
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
          <DrawerHeader>World War II</DrawerHeader>

          <DrawerBody>
            <VStack spacing="10px">
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavbarWithDrawer;
