import { Button, CloseButton, Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { CenteredProps } from "../../styles/chakra/Props.tsx";
import { Messages } from "../../messages/Messages.tsx";
import { MenuActionPayload } from "../../reducer/MenuReducer.tsx";
import { RocketActionKind, RocketActionPayload } from "../../reducer/RocketReducer.tsx";
import MenuStyles from '../../styles/menu/menu.module.css';

interface IncomingModalProps {
    isOpen: boolean
    setOpenModal: Function
    toggleMenu: Function
    incomingCommandData: MenuActionPayload
    rocketReducerState: RocketActionPayload
    rocketReducerDispatcher: Function
}

export const IncomingCommandModal: FunctionComponent<IncomingModalProps> = ({
    isOpen,
    setOpenModal,
    toggleMenu,
    incomingCommandData,
    rocketReducerState,
    rocketReducerDispatcher
}) => {

    const handleLaunchButton = (evt: React.MouseEvent) => {
        rocketReducerDispatcher({
          type: RocketActionKind.LAUNCH_TO_PLANET,
          payload: {}
        })
      }

    return (
        <>
            {isOpen && (
                <Flex
                    id="incomingCommandModal"
                    h={"100%"}
                    w={"100%"}
                    zIndex={9999999}
                    position={"absolute"}
                    style={{ backgroundColor: "rgba(0,0,0, 0.5)" }}
                    {...CenteredProps}
                    className={MenuStyles.menu}
                >
                    <Flex
                        id='modalContainer'
                        h={"60%"}
                        w={"25%"}
                        bg={"whitesmoke"}
                        zIndex={9999999}
                        position={"absolute"}
                        borderRadius={"15px"}
                        overflow={'hidden'}
                        p={"20px"}
                        flexDir={"column"}
                    >
                        <Flex
                            id='modalHeader'
                            w={"90%"}
                            h={"20%"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            pl={"20px"}
                        >
                            <Heading size={"md"}>Incoming Command!</Heading>
                            <CloseButton onClick={() => {
                                setOpenModal(false)
                            }} />
                        </Flex>
                        <Flex
                            id='modalBody'
                            width={"100%"}
                            height={"80%"}
                            flexDir={"column"}
                            pt={"20px"}
                            pl={"20px"}
                        >
                            <Text>Do you want to accept this command from remote?</Text>
                            <Flex
                                id='modalPropList'
                                w={"100%"}
                                h={"100%"}
                                flexDir={"column"}
                                pt={"20px"}
                            >
                                <UnorderedList>
                                    <ListItem><strong>Distance: </strong>{incomingCommandData.distance}m of Km.</ListItem>
                                    <ListItem><strong>Speed: </strong>{incomingCommandData.rocketSpeed} Km/s.</ListItem>
                                    <ListItem><strong>Flight Time: </strong>{incomingCommandData.flightTime} days.</ListItem>
                                </UnorderedList>
                            </Flex>
                        </Flex>
                        <Flex
                            w={"100%"}
                            h={"20%"}
                            {...CenteredProps}    
                            gap={1}
                        >
                            <Button
                                id="modalLaunch"
                                colorScheme={"red"}
                                size={"md"}
                                onClick={(evt)=>{
                                    setOpenModal(false)
                                    handleLaunchButton(evt)
                                }}
                            >
                                {Messages.menu.launchButtonText}
                            </Button>
                            <Button
                                id="modalEdit"
                                colorScheme={"blue"}
                                size={"md"}
                                onClick={(evt)=>{
                                    setOpenModal(false)
                                    toggleMenu()
                                }}
                            >
                                {"Edit Something"}
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            )}
        </>
    );
}