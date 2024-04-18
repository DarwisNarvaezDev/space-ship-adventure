import { Flex } from "@chakra-ui/react";
import React, { FunctionComponent, useEffect } from "react";
import { ReactComponent as Star } from '../../assets/star.svg'

interface StarWrapperProps {
    index: number
    xPosition: number | any
    yPosition: number | any
    variant: string | any
}
 
const StarWrapper: FunctionComponent<StarWrapperProps> = ({
    index,
    xPosition,
    yPosition,
    variant
}) => {

    return ( 
        <Flex
            id={`starW_${index}`}
            position={"absolute"}
            style={{ 
                right: `${xPosition}%`,
                top: `${yPosition}%`
            }}
        >
            <Star 
                className={variant}
            ></Star>
        </Flex>
);
}
 
export default StarWrapper;