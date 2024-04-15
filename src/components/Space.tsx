import { Flex } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import BackgroundStyles from '../styles/scenario/background.module.css'
import RocketStyle from '../styles/elements/rocket.module.css'
import Flames from '../assets/flames.gif'
import RocketShip from '../assets/rocketship.svg'
import StarsArray from "./StarsArray.tsx";
import { ReactComponent as PlanetA } from '../assets/planet-a.svg'
import { ReactComponent as PlanetB } from '../assets/planet-b.svg'
import { ReactComponent as PlanetC } from '../assets/planet-c.svg'

function Space(): React.ReactElement {

    const planetRef = useRef();
    const [ planetLeft, setPlanetLeft ] = useState<number>(0); 

    const calcPlanetLeft = (): void => {
        setTimeout(() => {
            
        }, 8000);
    }

    return ( 
        <Flex
            as="main"
            w={"100%"}
            h={"100%"}
            zIndex={99}
            className={BackgroundStyles.spaceAnimation}
            bg={"black"}
        >
            <Flex
            zIndex={99999}
                id="flightFinished"
                pos={"absolute"}
                top={"15%"}
                right={"15%"}
                w={"300px"}
                borderRadius={"15px"}
                border={"1px solid limegreen"}
                h={"400px"}
                bg={"black"}
            >
            </Flex>
            <Flex
                width={"600px"}
                height={"800px"}
                bg={"black"}
                position={"absolute"}
                top={"-120%"}
                left={"0%"}
                borderRadius={"full"}
                className={BackgroundStyles.planetContainer}
                zIndex={"99"}
            >
            </Flex>
            <Flex
                    id="landingRocketWrapper"
                    width={"30px"}
                    height={"100px"}
                    zIndex={"99999"}
                    position={"absolute"}
                    top={"-20%"}
                    left={"15%"}
                    flexDir={"column"}
                    className={RocketStyle.landingRocketWrapper}
                >
                    <Flex
                        id="rocketSection"
                        className={RocketStyle.rocketSection}
                        height={"70%"}
                        width={"100%"}
                        backgroundSize={"100%"}
                        style={{ 
                            backgroundImage: `url(${RocketShip})`,
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                    </Flex>
                    <Flex
                        id="flamesSection"
                        className={RocketStyle.flamesSection}
                        height={"40%"}
                        width={"100%"}
                        pos={"absolute"}
                        bottom={"5%"}
                        zIndex={"99999"}
                        style={{
                            backgroundImage: `url(${Flames})`,
                            backgroundSize: "105%",
                            backgroundRepeat: "no-repeat",
                            transform: "rotate(180deg)", 
                        }}
                    >
                    </Flex>
                </Flex>
            <PlanetC
                ref={planetRef}
                className={BackgroundStyles.planet}
            ></PlanetC>
            <StarsArray />
        </Flex>
     );
}

export default Space;