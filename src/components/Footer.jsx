import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Box
        py={"1rem"}
        bgGradient="linear(to-r, green.500, green.600, green.700)"
      >
        <Text color={"white"} textAlign={"center"}>
          Handcrafted by Leonardo Mello Silvestri
        </Text>
      </Box>
    </>
  );
}
