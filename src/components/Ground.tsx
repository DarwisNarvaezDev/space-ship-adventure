import { Flex, Tag, useDisclosure } from "@chakra-ui/react";
import { CenteredProps } from "../styles/chakra/Props.tsx";
import React from "react";

export default function Ground() {
    
    return (
        <Flex
            id='ground'
            as="div"
            h="100%"
            w="100%"
            bg="whitesmoke"
            border="8px dashed black"
            {...CenteredProps}
        >
            <Flex
                id='rocketShadow'
                {...CenteredProps}
                width="8%"
                height="80%"
                bg="black"
                borderRadius="80%"
                filter="blur(20px)"
                zIndex="0"
            >

            </Flex>
        </Flex>
    )
}