import { Center, Text, Box } from "@chakra-ui/react";

export default function Loading() {
  return (
    <>
      <Center h="100vh">
        <Box>
          <Text fontWeight={"semibold"} fontSize={"4xl"} color={"green.600"}>
            Carregando...
          </Text>
        </Box>
      </Center>
    </>
  );
}
