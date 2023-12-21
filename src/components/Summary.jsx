import { Box, Text, Flex, Container, Image } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/img/Swiper.jpg";

export default function Summary() {
  const slides = [
    { id: 1, url: img1 },
    { id: 2, url: img1 },
    { id: 3, url: img1 },
    { id: 4, url: img1 },
    { id: 5, url: img1 },
  ];
  return (
    <>
      <Box py={{ base: "2rem", lg: "5rem" }}>
        <Container maxW={"container.lg"}>
          <Flex flexDirection={{ base: "column", lg: "row" }} gap={"2rem"}>
            <Box flex={{ base: "auto", lg: "0 0 450px" }}>
              <Text
                color={"green.700"}
                fontWeight={"semibold"}
                fontSize={"3xl"}
              >
                Breve Resumo
              </Text>
              <Text mt={"1rem"} letterSpacing={"1px"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatum maxime provident quam adipisci ipsum dolores ad
                quaerat debitis quos sint molestias omnis dignissimos, odio
                inventore harum minima cupiditate vel labore? Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Quaerat eius porro totam
                corrupti tenetur, alias soluta aliquid provident fugiat velit
                dolorem rem aut omnis accusamus voluptate optio sapiente odit
                dolorum? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ipsam maiores, debitis quaerat nostrum beatae, dolorem
                recusandae modi illum suscipit qui blanditiis dolorum
                repellendus a quia natus eligendi labore ut at!
              </Text>
            </Box>
            <Box minW={"200px"}>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                grabCursor={true}
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <Image
                      rounded={"0.5rem"}
                      mx={"auto"}
                      w={{ base: "100%", lg: "400px" }}
                      h={{ base: "auto", lg: "400px" }}
                      src={slide.url}
                    ></Image>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
