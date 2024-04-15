import { Badge, Box, CloseButton, Flex, FormControl, FormHelperText, FormLabel, HStack, Heading, Radio, RadioGroup, ScaleFade, Stack, Tag, Text, useDisclosure } from "@chakra-ui/react";
import MenuStyles from '../styles/menu/menu.module.css'
import React, { FunctionComponent, useReducer, useState } from "react";
import { CenteredProps } from "../styles/chakra/Props.tsx";
import { Messages } from "../messages/Messages.tsx";
import MenuCommandForm from "./menu/MenuCommandForm.tsx";
import StatusContainer from "./menu/StatusContainer.tsx";
import HintBox from "./menu/HintBox.tsx";
import { MenuFormFieldNames } from "../interfaces/MenuForm.tsx";
import { MenuHintBoxContent } from "../interfaces/MenuHintBoxContent.tsx";
import { MenuActionKind, MenuActionPayload, menuReducer } from "../reducer/MenuReducer.tsx";
import { MenuStatusColor } from "../interfaces/MenuStatusColor.tsx";

interface MenuProps {
  reducerState: MenuActionPayload
  reducerDispatcher: Function
  isOpen: boolean
  onToggle: Function
}

const Menu: FunctionComponent<MenuProps> = ({
  reducerState,
  reducerDispatcher,
  isOpen,
  onToggle
}) => {

  const [statusText, setStatusText] = useState<string>(reducerState.statusText)
  const [ menuHintBoxContent, setMenuHintBoxContent ] = useState<MenuHintBoxContent>({
    title: Messages.menu.hintBox.greeting.header,
    content: Messages.menu.hintBox.greeting.content
  })

  const handleMouseOverStatusBadge = (evt: React.MouseEvent): void => {
    reducerDispatcher({
      type: MenuActionKind.SHOW_CLICK_HINT,
      payload: {}
    })
  }

  const handleMouseLeaveStatusBadge = (evt: React.MouseEvent): void => {
    reducerDispatcher({
      type: MenuActionKind.SHOW_STATUS_MESSAGE,
      payload: { statusText: reducerState.statusText }
    })
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
          title: Messages.menu.hintBox.distance.header,
          content: Messages.menu.hintBox.distance.content
        })
        break;
      case MenuFormFieldNames.rocketSpeed:
        setMenuHintBoxContent({
          title: Messages.menu.hintBox.rocketSpeed.header,
          content: Messages.menu.hintBox.rocketSpeed.content
        })
        break;
      case MenuFormFieldNames.flightTime:
          setMenuHintBoxContent({
            title: Messages.menu.hintBox.flightTime.header,
            content: Messages.menu.hintBox.flightTime.content
          })
          break;
      default:
          setMenuHintBoxContent({
            title: Messages.menu.hintBox.greeting.header,
            content: Messages.menu.hintBox.greeting.content
          })
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
          reducerState={reducerState}
          reducerDispatcher={reducerDispatcher}
        />
        <StatusContainer
          handleMouseOverStatusBadge={handleMouseOverStatusBadge}
          handleClickStatusBadge={handleClickStatusBadge}
          handleMouseLeaveStatusBadge={handleMouseLeaveStatusBadge}
          statusText={reducerState.statusText}
          statusColor={reducerState.statusColor}
                    reducerState={reducerState}
          reducerDispatcher={reducerDispatcher}
        />
      </Flex>
    </Flex>
  );
}

export default Menu;