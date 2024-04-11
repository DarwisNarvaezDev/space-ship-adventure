import { Flex } from "@chakra-ui/react";
import React from "react";
import BackgroundStyles from '../styles/scenario/background.module.css'
import StarsArray from "./StarsArray.tsx";
import { ReactComponent as PlanetA } from '../assets/planet-a.svg'
import { ReactComponent as PlanetB } from '../assets/planet-b.svg'
import { ReactComponent as PlanetC } from '../assets/planet-c.svg'

function Space(): React.ReactElement {
    return ( 
        <Flex
            as="main"
            className={BackgroundStyles.spaceFlight}
            w={"100%"}
            h={"100%"}
        >
            <Flex
                width={"600px"}
                height={"600px"}
                bg={"black"}
                position={"absolute"}
                top={"-120%"}
                left={"0%"}
                borderRadius={"full"}
                className={BackgroundStyles.planetContainer}
                zIndex={"99"}
            >
            </Flex>
            <PlanetC
                className={BackgroundStyles.planet}
            ></PlanetC>
            <StarsArray />
        </Flex>
     );
}

export default Space;