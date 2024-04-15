import { Flex, Tag, useDisclosure } from "@chakra-ui/react";
import { CenteredProps } from "../styles/chakra/Props.tsx";
import spaceShuttleBackground from "../assets/space-shuttle-bg.png"
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
            overflow={"hidden"}
            bgImage={spaceShuttleBackground}
            filter={"grayscale(100%)"}
        >
            <Flex
                id="spaceShuttleShadowMask"
                width={"20%"}
                height={"100%"}
            >
            <Flex
                id='rocketShadow'
                width="100%"
                height="80%"
                bg="black"
                borderRadius="80%"
                filter="blur(20px)"
                zIndex="0"
            >
            </Flex>
            </Flex>
        </Flex>
    )
}