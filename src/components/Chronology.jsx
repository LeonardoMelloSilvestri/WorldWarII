import {
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Button,
  Box,
} from "@chakra-ui/react";
import { useStore } from "../store/store";
import { useState } from "react";

export default function Chronology() {
  const { chronologyInfos } = useStore();
  const [name, setName] = useState("Segunda Guerra Mundial");
  const [content, setContent] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum fugit magni ducimus nihil quibusdam culpa suscipit consequuntur molestias aliquam consectetur a reprehenderit qui sunt voluptatem architecto voluptas praesentium, officia corrupti!"
  );
  return (
    <>
      <Flex>
        <Flex
          flexDirection={"column"}
          pt={"1rem"}
          gap={"0.7rem"}
          minW={"320px"}
          color={"white"}
          bg={"green.700"}
          px={"1rem"}
          spacing={"1rem"}
          minH={"100vh"}
        >
          {chronologyInfos.map((info) => (
            <Accordion allowToggle key={info.id}>
              <AccordionItem>
                <AccordionButton _expanded={{ bg: "green.500" }}>
                  <Box as="span" flex={"1"} textAlign={"left"}>
                    {info.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  {info.subs.map((sub) => (
                    <Flex flexDirection={"column"} key={sub.id}>
                      <Button
                        onClick={() => (
                          setName(info.name + " - " + sub.name),
                          setContent(sub.content)
                        )}
                        _hover={{ bg: "white", color: "green.600" }}
                        bg="transparent"
                        color="white"
                        mb={"0.3rem"}
                        key={sub.id}
                      >
                        {sub.name}
                      </Button>
                    </Flex>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
        </Flex>
        <Box p={"2rem"}>
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
