import React, { useEffect, useReducer, useState } from 'react';

import { Badge, Box, Button, Center, Fade, Flex, HStack, Heading, Image, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ScaleFade, Spacer, Tag, Text, UnorderedList, useDisclosure } from '@chakra-ui/react';
import { CenteredProps, SpaceInheritedFromParent } from './styles/chakra/Props.tsx';
import Clouds from './components/Clouds.tsx';
import Ground from './components/Ground.tsx';
import SpaceShuttle from './components/SpaceShuttle.tsx';
import Space from './components/Space.tsx';
import RushingClouds from './components/RushingClouds.tsx';
import RocketWrapper from './components/RocketWrapper.tsx';
import MenuStyles from './styles/menu/menu.module.css'
import Menu from './components/Menu.tsx';
import { MenuActionKind, MenuActionPayload, menuReducer } from './reducer/MenuReducer.tsx';
import { MenuStatusColor } from './interfaces/MenuStatusColor.tsx';
import { Messages } from './messages/Messages.tsx';
import { ExternalCommand, useSocket } from './hooks/useSocket.tsx';
import { Events } from './hooks/Events.tsx';
import { IncomingCommandModal } from './components/IncomingCommandModal.tsx';

const socketAppToken: any = process.env.REACT_APP_SOCKET_APP_TOKEN;
const socketUrl: any = process.env.REACT_APP_SOCKET_URL;

function App(): React.ReactElement {

  // Modal control
  const [ openModal, setOpenModal ] = useState<boolean>(false);
  // Menu control
  const { isOpen, onToggle } = useDisclosure()

  const { socket, isConnected } = useSocket({ endpoint: socketUrl, appToken: socketAppToken });
  const [reducerState, reducerDispatcher] = useReducer(menuReducer, {
    isInputsDisabled: false,
    isLaunchButtonsDisabled: true,
    statusColor: MenuStatusColor.waitingCommand,
    statusText: Messages.menu.waitingForCommand
  })

  socket.on(Events.COMMAND_RECEIVED, (externalCommand: ExternalCommand) => {
    console.log("event received!");
    console.log(externalCommand);

    reducerDispatcher({ type: MenuActionKind.RECEIVING_DATA, payload: {} });
    reducerDispatcher({ type: MenuActionKind.SET_MENU_DATA, payload: externalCommand });
    setOpenModal(!openModal)

  })

  return (
    <>
      <Flex
        id='main'
        as="main"
        w="100%"
        h="100vh"
        {...CenteredProps}
      >
        <Flex
          id='backgroundContainer'
          flexDir="column"
          {...CenteredProps}
          {...SpaceInheritedFromParent}
          width={"120%"}
          height={"100%"}
          position={"absolute"}
        >
          <Flex
            position={"absolute"}
            id='backgroundWrapper'
            as="div"
            h="100%"
            w="100%"
            zIndex="9999"
            {...CenteredProps}
          >
            <IncomingCommandModal
              isOpen={openModal}
              setOpenModal={setOpenModal}
              toggleMenu={onToggle}
              incomingCommandData={reducerState}
            />
            {/* <Space /> */}
            {/* <RushingClouds /> */}
            {/* <RocketWrapper /> */}
            <SpaceShuttle />
            {/* MENU */}
            <Menu
              reducerState={reducerState}
              reducerDispatcher={reducerDispatcher}
              isOpen={isOpen}
              onToggle={onToggle}
            />
            {/* MENU */}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
