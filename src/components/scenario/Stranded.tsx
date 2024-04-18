import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { CenteredProps } from "../../styles/chakra/Props.tsx";
import StartAgainButton from "./StartAgainButton.tsx";
import RocketStyle from '../../styles/elements/rocket.module.css'
import BackgroundStyles from '../../styles/scenario/background.module.css'
import RocketShip from '../../assets/rocketship.svg';

const Stranded: FunctionComponent = () => {
    return (<>
        <Flex
            id="stranded"
            position={"absolute"}
            w="50%"
            h={"40%"}
            border={"1px solid limegreen"}
            color={"limegreen"}
            borderRadius={"15px"}
            flexDir={"column"}
            {...CenteredProps}
            zIndex={9999}   
            className={BackgroundStyles.finishingReveal}
        >
            <Flex
                id="strandedHeader"
                w={"100%"}
                h={"20%"}
                {...CenteredProps}
            >
                <Heading size={"xl"}>Standed in Space</Heading>
            </Flex>
            <Flex
                id="strandedMessage"
                w={"100%"}
                height={"50%"}
                {...CenteredProps}
                p={"20px"}
            >
                <Text>You provided a wrong flight plan and the rocket didn't find a planet to land.</Text>
            </Flex>
            <Flex
                id="strandedButtons"
                w={"100%"}
                h={"30%"}
                {...CenteredProps}
            >
                <StartAgainButton />
            </Flex>
            <Flex
                    id="rocketSection"
                    className={RocketStyle.stranded}
                    position={"absolute"}
                    zIndex={999}
                    w={"50px"}
                    h={"150px"}
                    style={{
                        backgroundImage: `url(${RocketShip})`,
                        backgroundRepeat: "no-repeat",
                    }}
                >
                </Flex>
        </Flex>
    </>);
}

export default Stranded;