import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { MenuHintBoxContent } from "../../interfaces/MenuHintBoxContent";

interface HintBoxProps {
    hintBoxContent: MenuHintBoxContent
}
 
const HintBox: FunctionComponent<HintBoxProps> = ({hintBoxContent}) => {
    return ( 
        <Flex
              id="menuFormHintBoxWrapper"
              w={"45%"}
              h={"100%"}
              justifyContent={"right"}
            >
              <Stack
                id="menuFormHintBox"
                width={"90%"}
                height={"90%"}
                bg={"whitesmoke"}
                mr={"5px"}
                borderRadius={"15px"}
                direction={"column"}
                spacing={0}
                overflow={"hidden"}
              >
                <Flex
                  id="hintHeader"
                  width={"100%"}
                  h={"20%"}
                  justifyContent={"left"}
                  align={"center"}
                >
                  <Heading pl={"20px"} size={"sm"}>{hintBoxContent.title}</Heading>
                </Flex>
                <Flex
                  id="hintText"
                  w={"100%"}
                  height={"80%"}
                  pl={"20px"}
                  pt={"10px"}
                  pr={"20px"}
                >
                <Text
                  fontSize={"13px"}
                  maxW={"100%"}
                >{hintBoxContent.content}</Text>
                </Flex>
                </Stack>
            </Flex>
     );
}
 
export default HintBox;