import {
  Box,
  Text,
  Flex,
  VStack,
  Image,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { useCountryStore, useModalStore } from "../store/store";

export default function Countries() {
  const { alliesInfos, axisInfos } = useCountryStore();
  const { country, setCountry, summary, setSummary } = useModalStore();

  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleModal(country, summary) {
    setCountry(country);
    setSummary(summary);
    onOpen();
  }

  return (
    <>
      <Box my={"2rem"} px={{ base: "1rem", lg: "2rem" }}>
        <Text
          textAlign={"center"}
          color={"green.700"}
          fontWeight={"semibold"}
          fontSize={"4xl"}
          mb={"2rem"}
        >
          Participantes
        </Text>
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          mt={"2rem"}
          gap={{ base: "2rem", lg: "4rem" }}
        >
          <VStack
            order={{ base: 2, lg: 1 }}
            maxW={{ base: "auto", lg: "550px" }}
          >
            <Text
              fontWeight={"semibold"}
              color={"green.700"}
              fontSize={"3xl"}
              textAlign={"center"}
            >
              World War II
            </Text>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              facere culpa dignissimos officiis vel amet ipsa similique iusto
              quod laudantium consequatur architecto magnam repellendus aperiam
              distinctio, provident, at quos inventore? Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Fugiat quidem ut vel voluptates
              laudantium sequi ratione sed, aliquid culpa aut? Sequi numquam
              voluptatum quasi exercitationem eius aspernatur nihil reiciendis
              dolor.
            </Text>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              facere culpa dignissimos officiis vel amet ipsa similique iusto
              quod laudantium consequatur architecto magnam repellendus aperiam
              distinctio, provident, at quos inventore? Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Fugiat quidem ut vel voluptates
              laudantium sequi ratione sed, aliquid culpa aut? Sequi numquam
              voluptatum quasi exercitationem eius aspernatur nihil reiciendis
              dolor.
            </Text>
          </VStack>
          <VStack order={{ base: 1, lg: 2 }} alignItems={"start"}>
            <Text
              fontWeight={"semibold"}
              fontSize={"3xl"}
              color={"green.700"}
              textAlign={"center"}
              mb={"1rem"}
            >
              Aliados:
            </Text>
            <SimpleGrid columns={{ base: 2, sm: 3 }} mb={"2rem"} gap={"1.5rem"}>
              {alliesInfos.map((country) => (
                <Image
                  onClick={() => handleModal(country.country, country.summary)}
                  cursor={"pointer"}
                  boxSize="100%"
                  objectFit="cover"
                  key={country.id}
                  src={country.flag}
                  alt={country.country}
                />
              ))}
            </SimpleGrid>
            <Text
              fontWeight={"semibold"}
              fontSize={"3xl"}
              color={"green.700"}
              textAlign={"center"}
              mb={"1rem"}
            >
              Eixo:
            </Text>
            <SimpleGrid columns={{ base: 2, sm: 3 }} mb={"2rem"} gap={"1.5rem"}>
              {axisInfos.map((country) => (
                <Image
                  onClick={() => handleModal(country.country, country.summary)}
                  cursor={"pointer"}
                  boxSize="100%"
                  objectFit="cover"
                  key={country.id}
                  src={country.flag}
                  alt={country.country}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </Flex>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{country}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{summary}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
