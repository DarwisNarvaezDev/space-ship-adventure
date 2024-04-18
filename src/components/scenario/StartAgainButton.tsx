import { Button } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";

const StartAgainButton: FunctionComponent = () => {
    return (<>
        <Button
            bg={"none"}
            border={"0.5px solid limegreen"}
            color={"limegreen"}
            _hover={{ backgroundColor: "limegreen", color: "black" }}
            zIndex={99999}
            onClick={() => {
                window.location.reload();
            }}
        >Start Again</Button>
    </>);
}

export default StartAgainButton;