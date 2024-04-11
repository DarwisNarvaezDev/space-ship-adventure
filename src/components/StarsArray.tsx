import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BackgroundStyles from '../styles/scenario/background.module.css'
import { RandomStar, StarCoordinates } from '../interfaces/Star.tsx'
import StarWrapper from "./StarWrapper.tsx";

function StarsArray(): React.ReactElement {
    
    const randomizer = (max: number, min: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    const starCount: number = 4000
    const possibleStarVariants: string[] = [
        BackgroundStyles.distantBrilliantStar,
        BackgroundStyles.distantSmallStar,
        BackgroundStyles.closeBigStar
    ]

    const randomizeStarPosition = (): StarCoordinates => {
        const MIN_X_QTY = 1
        const MAX_X_QTY = 100

        const MIN_Y_QTY = 1
        const MAX_Y_QTY = 100

        return { x: randomizer(MAX_X_QTY, MIN_X_QTY), y: randomizer(MAX_Y_QTY, MIN_Y_QTY) }
    }

    const randomizeStarVariant = () => {
        const minIterationNumber = 0
        const maxIterationNumber = 2

        return possibleStarVariants[randomizer(maxIterationNumber, minIterationNumber)]
    }

    return ( 
        <Flex
            id="startsArrayContainer"
            as="div"
            w={"100%"}
            h={"100vh"}
            position={"absolute"}
            top={"0%"}
            right={"0%"}
            gap={"10px"}
            zIndex={"9"}
            className={BackgroundStyles.space}
        >
            {
                Array.from({ length: 200 }, (_, i) => <StarWrapper 
                                                            key={i}
                                                            index={i}
                                                            xPosition={randomizeStarPosition().x}
                                                            yPosition={randomizeStarPosition().y}
                                                            variant={randomizeStarVariant()}
                                                            />)
            }
        </Flex>
     );
}

export default StarsArray;