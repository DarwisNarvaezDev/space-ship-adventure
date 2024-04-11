import { Flex, Tag } from "@chakra-ui/react";
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
            <Tag
                size='lg'
                borderRadius='full'
                variant='solid'
                style={{ position: 'absolute', bottom: '11%', right: '2.5%', zIndex: 9999 }}
            >
                <Flex
                    as="div"
                    w="20px"
                    height="20px"
                    background="green"
                    marginRight="10px"
                    borderRadius="full"
                >

                </Flex>
                Waiting for command
            </Tag>
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