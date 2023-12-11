import { Container, Text, Box, VStack, Button } from "@chakra-ui/react";
import hero from "../assets/img/hero.jpg";
export default function Home() {
  return (
    <>
      <Box
        h={{ base: "75vh", lg: "85vh" }}
        bgImage={hero}
        bgSize={{ base: "auto", lg: "cover" }}
        bgAttachment="fixed"
        pos="relative"
        bgRepeat="no-repeat"
        bgPos={"top"}
        display={"flex"}
        pt={{ base: "2rem", lg: "10rem" }}
        overflow={"hidden"}
        transition={"transform 0.5s ease-out"}
      >
        <Container maxW={"container.lg"} centerContent={"true"}>
          <VStack textAlign={{ base: "center", md: "start" }} spacing={"8px"}>
            <Text
              textShadow={"1px 1px black"}
              fontWeight={"bold"}
              fontSize={"5xl"}
              color={"White"}
            >
              Segunda Guerra Mundial
            </Text>
            <Text textShadow={"1px 1px black"} fontSize={"3xl"} color={"white"}>
              O conflito mais sangrento da história
            </Text>

            <Button
              _hover={{ bg: "white", color: "green.600" }}
              size={"lg"}
              bg={"green.600"}
              color={"white"}
              mt={"20px"}
            >
              Mais informações
            </Button>
          </VStack>
        </Container>
      </Box>
    </>
  );
}
