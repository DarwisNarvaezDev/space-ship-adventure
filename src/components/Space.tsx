import { Flex } from "@chakra-ui/react";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import BackgroundStyles from '../styles/scenario/background.module.css'
import StarsArray from "./StarsArray.tsx";
import { RocketActionKind, RocketActionPayload } from "../reducer/RocketReducer.tsx";
import ArriveMotion from "./ArriveMotion.tsx";
import FlightFinished from "./FlightFinished.tsx";

interface SpaceProps {
    rocketReducerState: RocketActionPayload
    rocketReducerDispatcher: Function
}

const Space: FunctionComponent<SpaceProps> = ({
    rocketReducerState,
    rocketReducerDispatcher
}) => {

    const [ showFlightSummary, setShowFlightSummary ] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            rocketReducerDispatcher({
                type: RocketActionKind.SHUT_DOWN,
                payload: {}
            })
            setShowFlightSummary(true);
        }, 10000);
    }, [])

    return (
        <Flex
            as="main"
            w={"100%"}
            h={"100%"}
            zIndex={99}
            className={BackgroundStyles.spaceAnimation}
            bg={"black"}
        >
            { showFlightSummary && (
                <FlightFinished 
                    rocketReducerDispatcher={rocketReducerDispatcher}
                    rocketReducerState={rocketReducerState}
                />
            )}
            {true && (
                <ArriveMotion
                    rocketReducerDispatcher={rocketReducerDispatcher}
                    rocketReducerState={rocketReducerState}
                />
            )}
            <StarsArray />
        </Flex>
    );
}

export default Space;