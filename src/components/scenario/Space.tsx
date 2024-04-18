import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { Fragment, FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import BackgroundStyles from '../../styles/scenario/background.module.css'
import StarsArray from "./StarsArray.tsx";
import { RocketActionKind, RocketActionPayload } from "../../reducer/RocketReducer.tsx";
import ArriveMotion from "./ArriveMotion.tsx";
import FlightFinished from "./FlightFinished.tsx";
import { CenteredProps } from "../../styles/chakra/Props.tsx";
import StartAgainButton from "./StartAgainButton.tsx";
import Stranded from "./Stranded.tsx";

interface SpaceProps {
    rocketReducerState: RocketActionPayload
    rocketReducerDispatcher: Function
}

const Space: FunctionComponent<SpaceProps> = ({
    rocketReducerState,
    rocketReducerDispatcher
}) => {

    const ref = useRef(null)
    const [showFlightSummary, setShowFlightSummary] = useState<boolean>(true);
    const [showStranded, setShowStranded] = useState<boolean>(false);

    const resolveStranded = useCallback(() => {
        if (!rocketReducerState.isRocketStranded) {
            setShowFlightSummary(true);
        } else {
            setShowFlightSummary(false);
            setShowStranded(true)
        }
    }, [rocketReducerState.isRocketStranded])

    useEffect(() => {
        resolveStranded()
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
            <StarsArray />
            {showFlightSummary && (
                <Flex
                >
                    <FlightFinished
                        rocketReducerDispatcher={rocketReducerDispatcher}
                        rocketReducerState={rocketReducerState}
                    />
                    <ArriveMotion
                        rocketReducerDispatcher={rocketReducerDispatcher}
                        rocketReducerState={rocketReducerState}
                    />
                </Flex>
            )}
            {showStranded && (
                <Stranded />
            )}
        </Flex>
    );
}

export default Space;