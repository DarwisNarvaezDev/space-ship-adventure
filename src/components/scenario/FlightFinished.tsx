import { Button, Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React, { FunctionComponent, useContext } from "react";
import { CenteredProps } from "../../styles/chakra/Props.tsx";
import { RocketActionPayload } from "../../reducer/RocketReducer.tsx";
import { RocketContext } from "../../App.tsx";
import StartAgainButton from "./StartAgainButton.tsx";

interface FlightFinishedProps {
    rocketReducerState: RocketActionPayload
    rocketReducerDispatcher: Function
}

const FlightFinished: FunctionComponent<FlightFinishedProps> = ({
    rocketReducerState,
    rocketReducerDispatcher
}) => {

    const { spaceCoordinates, coordinatesCallback } = useContext(RocketContext);

    return (
        <Flex
            zIndex={99}
            id="flightFinished"
            pos={"absolute"}
            top={"15%"}
            right={"15%"}
            w={"300px"}
            borderRadius={"15px"}
            border={"1px solid limegreen"}
            h={"300px"}
            color={"limegreen"}
            flexDir={"column"}
        >
            <Flex
                id="flightFinishedHeader"
                w={"100%"}
                h={"20%"}
                {...CenteredProps}
            >
                <Heading size={"md"}>You Arrived to {spaceCoordinates.planetName}!</Heading>
            </Flex>
            <Flex
                id="flightSummary"
                width={"100%"}
                h={"55%"}
                justifyContent={"left"}
                pl={"20px"}
                align={"center"}
            >
                <UnorderedList
                    spacing={4}
                >
                    <ListItem>
                        <Text>Traveled Distance: <strong>{spaceCoordinates.distance}</strong>m of Km.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Total Speed: <strong>{spaceCoordinates.rocketSpeed}</strong>m Km/s.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Flight Time: <strong>{spaceCoordinates.flightTime}</strong> days.</Text>
                    </ListItem>
                </UnorderedList>
            </Flex>
            <Flex
                id="goBackFlight"
                w={"100%"}
                h={"20%"}
                {...CenteredProps}
            >
                <StartAgainButton />
            </Flex>
        </Flex>
    );
}

export default FlightFinished;