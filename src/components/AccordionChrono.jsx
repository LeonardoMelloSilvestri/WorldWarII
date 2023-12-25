import {
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Button,
  Box,
} from "@chakra-ui/react";
import {
  useAccordionStore,
  useChronologyStore,
  useDrawerStore,
} from "../store/store";

export default function AccordinChrono() {
  const { chronologyInfos } = useChronologyStore();
  const { setName, setContent } = useAccordionStore();
  const closeDrawer = useDrawerStore((state) => state.closeDrawer);

  return (
    <>
      <Flex>
        <Flex
          flexDirection={"column"}
          py={"1rem"}
          gap={"0.7rem"}
          minW={{ base: "100%", lg: "320px" }}
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
                    <Flex
                      onClick={closeDrawer}
                      flexDirection={"column"}
                      key={sub.id}
                    >
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
      </Flex>
    </>
  );
}
