import { Button, Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { CenteredProps } from "../styles/chakra/Props.tsx";
import { RocketActionPayload } from "../reducer/RocketReducer";

interface FlightFinishedProps {
    rocketReducerState: RocketActionPayload
    rocketReducerDispatcher: Function
}

const FlightFinished: FunctionComponent<FlightFinishedProps> = ({
    rocketReducerState,
    rocketReducerDispatcher
}) => {
    return (
        <Flex
            zIndex={99999}
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
                <Heading size={"md"}>You Arrived to Saturn!</Heading>
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
                        <Text>Traveled Distance: <strong>00</strong>m of Km.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Total Speed: <strong>00</strong>m Km/s.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Flight Time: <strong>00</strong> days.</Text>
                    </ListItem>
                </UnorderedList>
            </Flex>
            <Flex
                id="goBackFlight"
                w={"100%"}
                h={"20%"}
                {...CenteredProps}
            >
                <Button
                    bg={"none"}
                    border={"0.5px solid limegreen"}
                    color={"limegreen"}
                    _hover={{ backgroundColor: "limegreen", color: "black" }}
                    onClick={()=>{
                        window.location.reload();
                    }}
                >Start Again</Button>
            </Flex>
        </Flex>
    );
}

export default FlightFinished;