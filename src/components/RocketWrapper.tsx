import React, { FunctionComponent, useEffect, useState } from "react";
import RocketShip from '../assets/rocketship.svg'
import Flames from '../assets/flames.gif'
import RocketStyle from '../styles/elements/rocket.module.css'
import { Flex } from "@chakra-ui/react";
import { CenteredProps } from "../styles/chakra/Props.tsx";
import { RocketActionKind, RocketActionPayload } from "../reducer/RocketReducer.tsx";

interface RocketWrapperProps {
    rocketReducerState: RocketActionPayload
    rocketReducerDispatcher: any
}

const RocketWrapper: FunctionComponent<RocketWrapperProps> = ({
    rocketReducerState,
    rocketReducerDispatcher
}) => {

    const [ rocketAnimationClass, setRocketAnimationClass ] = useState<string>('');

    useEffect(()=>{
        setRocketAnimationClass(rocketReducerState.landingAndApproxClass)
    }, [rocketReducerState])

    return (
        <Flex
            id="rocketShipWrapper"
            gap={2}
            flexDir={"column"}
            height={"100%"}
            {...CenteredProps}
        >
            <Flex
                id="rocketShipContainer"
                zIndex={"99999"}
                flexDir={"column"}
                className={`${RocketStyle.rocket} ${rocketAnimationClass}`}
            >
                    <Flex
                        id="rocketSection"
                        className={RocketStyle.rocketSection}
                        height={"70%"}
                        width={"100%"}
                        style={{ 
                            backgroundImage: `url(${RocketShip})`,
                            backgroundRepeat: "no-repeat",
                            marginLeft: "15px",
                            marginTop: "10px"
                        }}
                    >
                    </Flex>
                    <Flex
                        id="flamesSection"
                        className={RocketStyle.flamesSection}
                        height={"40%"}
                        width={"100%"}
                        zIndex={9999999}
                        style={!rocketReducerState.isRocketSmoke ? {} : {
                            backgroundImage: `url(${Flames})`,
                            backgroundSize: "105%",
                            backgroundRepeat: "no-repeat",
                            transform: "rotate(180deg)", 
                        }}
                    >
                    </Flex>
            </Flex>
        </Flex>
    );
}

export default RocketWrapper;