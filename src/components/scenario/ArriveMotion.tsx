import { Flex } from "@chakra-ui/react";
import React, { FunctionComponent, ReactElement, useContext, useEffect, useState } from "react";
import BackgroundStyles from '../../styles/scenario/background.module.css';
import RocketStyle from '../../styles/elements/rocket.module.css';
import { ReactComponent as Mars } from '../../assets/planet-a.svg';
import { ReactComponent as Saturn } from '../../assets/planet-b.svg';
import { ReactComponent as Venus } from '../../assets/planet-c.svg';
import Flames from '../../assets/flames.gif';
import { RocketActionPayload } from "../../reducer/RocketReducer.tsx";
import RocketShip from '../../assets/rocketship.svg';
import { RocketContext, RocketContextData } from "../../App.tsx";
import { PlanetNames } from "../../util/PlanetNames.tsx";


interface ArriveMotionProps {
    rocketReducerState: RocketActionPayload
    rocketReducerDispatcher: Function
}

const ArriveMotion: FunctionComponent<ArriveMotionProps> = ({
    rocketReducerState,
    rocketReducerDispatcher
}) => {

    const { spaceCoordinates, coordinatesCallback } = useContext(RocketContext);

    const [planet, setPlanet] = useState('');
    const getRenderingPlanet = (): void => {
        setPlanet(spaceCoordinates.planetName);
    }

    useEffect(() => {
        getRenderingPlanet()
    }, [spaceCoordinates])

    return (
        <>
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
                    style={rocketReducerState.isRocketSmoke ? {
                        backgroundImage: `url(${Flames})`,
                        backgroundSize: "105%",
                        backgroundRepeat: "no-repeat",
                        transform: "rotate(180deg)",
                    } : {}}
                >
                </Flex>
            </Flex>
            {
                PlanetNames.MARS == planet && (<Mars
                    className={BackgroundStyles.planet}    
                />)
            }
            {
                PlanetNames.VENUS == planet && (<Venus
                    className={BackgroundStyles.planet}      
                />)
            }
            {
                PlanetNames.SATURN == planet && (<Saturn
                    className={BackgroundStyles.planet}      
                />)
            }
        </>
    );
}

export default ArriveMotion;