import { Flex } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as Cloud } from '../assets/cloud.svg'
import BackgroundStyles from '../styles/scenario/background.module.css'
import { CenteredProps } from "../styles/chakra/Props.tsx";

function RainingClouds() {
    return ( 
        <Flex
            id="rushingClouds"
            position={"absolute"}
            w={"100%"}
            height={"100%"}
            {...CenteredProps}
        >
            <Cloud
                className={BackgroundStyles.bigDashingCloud}
            ></Cloud>
            <Cloud
                className={BackgroundStyles.mediumDashingCloud}
            ></Cloud>
            <Cloud
                className={BackgroundStyles.smallDashingCloud}
            ></Cloud>
        </Flex>
    );
}

export default RainingClouds;