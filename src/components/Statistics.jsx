import { Flex, Box, Text } from "@chakra-ui/react";
export default function Statistics() {
  return (
    <>
      <Box
        bgGradient={"linear(to-r, green.500, green.600, green.700)"}
        py={{ base: "2rem", lg: "4rem" }}
      >
        <Flex
          justifyContent={"center"}
          flexDirection={{ base: "column", lg: "row" }}
          px={"1rem"}
          gap={"2rem"}
        >
          <Box maxW={{ base: "100vw", lg: "380px" }}>
            <Text fontSize={"2xl"} fontWeight={"bold"} color={"white"}>
              70 MILHÕES de mortes
            </Text>
            <Text letterSpacing={"1px"} color={"white"} mt={"0.7rem"}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              at aperiam repudiandae mollitia! Cum, necessitatibus dolor porro
              sapiente laudantium ullam eligendi blanditiis magni delectus
              suscipit adipisci dolores officiis, error incidunt.
            </Text>
          </Box>
          <Box maxW={{ base: "100vw", lg: "380px" }}>
            <Text fontSize={"2xl"} fontWeight={"bold"} color={"white"}>
              Lorem ipsum dolor sit amet
            </Text>
            <Text letterSpacing={"1px"} color={"white"} mt={"0.7rem"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum impedit facere animi quia in! Officiis eum fuga alias
              ea facilis culpa harum, ipsa, itaque, totam id dignissimos
              doloribus autem consequatur.
            </Text>
          </Box>
          <Box maxW={{ base: "100vw", lg: "380px" }}>
            <Text fontSize={"2xl"} fontWeight={"bold"} color={"white"}>
              Lorem ipsum dolor
            </Text>
            <Text letterSpacing={"1px"} color={"white"} mt={"0.7rem"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              deleniti accusamus, aut optio modi ab enim laudantium, nobis
              voluptatem facilis reprehenderit nulla officiis magnam culpa
              cupiditate eveniet minima fuga sit.
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
