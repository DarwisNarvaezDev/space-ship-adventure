import { Badge, Box, CloseButton, Flex, FormControl, FormHelperText, FormLabel, HStack, Heading, Radio, RadioGroup, ScaleFade, Stack, Tag, Text, useDisclosure } from "@chakra-ui/react";
import MenuStyles from '../styles/menu/menu.module.css'
import React, { useState } from "react";
import { CenteredProps } from "../styles/chakra/Props.tsx";
import { Messages } from "../messages/Messages.tsx";
import MenuCommandForm from "./menu/MenuCommandForm.tsx";
import StatusContainer from "./menu/StatusContainer.tsx";
import HintBox from "./menu/HintBox.tsx";
import { MenuFormFieldNames } from "../interfaces/MenuForm.tsx";
import { MenuHintBoxContent } from "../interfaces/MenuHintBoxContent.tsx";

function Menu() {

  const [statusText, setStatusText] = useState<string>(Messages.menu.waitingForCommand)
  const { isOpen, onToggle } = useDisclosure()
  const [ menuHintBoxContent, setMenuHintBoxContent ] = useState<MenuHintBoxContent>({
    title: "Flight Command",
    content: "This is blah blah"
  })

  const handleMouseOverStatusBadge = (evt: React.MouseEvent): void => {
    if (!isOpen) {
      setStatusText(Messages.menu.clickToEnterCommand)
    } else {
      setStatusText(Messages.menu.clickToCloseForm)
    }
  }

  const handleMouseLeaveStatusBadge = (evt: React.MouseEvent): void => {
    setStatusText(Messages.menu.waitingForCommand)
  }

  const handleClickStatusBadge = (evt: React.MouseEvent): void => {
    if (isOpen) {
      setStatusText(Messages.menu.waitingForCommand)
    } else {
      setStatusText(Messages.menu.clickToCloseForm)
    }
    onToggle()
  }

  const handleFormInputClick = (evt: React.MouseEvent): void => {
    const clickedField = evt.target.name
    
    switch( clickedField ){
      case MenuFormFieldNames.distance:
        setMenuHintBoxContent({
          title: "Distance",
          content: "This is blah blah"
        })
        break;
      case MenuFormFieldNames.rocketSpeed:
        setMenuHintBoxContent({
          title: "Rocket Speed",
          content: "This is blah blah"
        })
        break;
      case MenuFormFieldNames.flightTime:
          setMenuHintBoxContent({
            title: "Flight Time",
            content: "This is blah blah"
          })
          break;
    }

  }

  return (
    <Flex
      id="menuWrapper"
      width={"500px"}
      height={"80%"}
      zIndex={"99999"}
      position={"absolute"}
      right={"10%"}
      bottom={"10%"}
      justifyContent={"right"}
    >
      { isOpen && (<HintBox
        hintBoxContent={menuHintBoxContent}
      />)}
      <Flex
        id='menu'
        className={MenuStyles.menu}
        as={"section"}
        width={"55%"}
        height={"100%"}
        zIndex={"999999"}
        borderRadius={"15px"}
        flexDir={"column"}
        overflow={"hidden"}
        {...CenteredProps}
      >
        <MenuCommandForm
          isOpen={isOpen}
          onToggle={onToggle}
          handleClickStatusBadge={handleClickStatusBadge}
          handleFormInputClick={handleFormInputClick}
        />
        <StatusContainer
          handleMouseOverStatusBadge={handleMouseOverStatusBadge}
          handleClickStatusBadge={handleClickStatusBadge}
          handleMouseLeaveStatusBadge={handleMouseLeaveStatusBadge}
          statusText={statusText}
        />
      </Flex>
    </Flex>
  );
}

export default Menu;