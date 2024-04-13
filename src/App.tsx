import React, { useEffect, useReducer, useState } from 'react';

import { Badge, Box, Button, Center, Fade, Flex, Image, ScaleFade, Tag, Text, useDisclosure } from '@chakra-ui/react';
import { CenteredProps, SpaceInheritedFromParent } from './styles/chakra/Props.tsx';
import Clouds from './components/Clouds.tsx';
import Ground from './components/Ground.tsx';
import SpaceShuttle from './components/SpaceShuttle.tsx';
import Space from './components/Space.tsx';
import RushingClouds from './components/RushingClouds.tsx';
import RocketWrapper from './components/RocketWrapper.tsx';
import MenuStyles from './styles/menu/menu.module.css'
import Menu from './components/Menu.tsx';
import { menuReducer } from './reducer/MenuReducer.tsx';
import { MenuStatusColor } from './interfaces/MenuStatusColor.tsx';
import { Messages } from './messages/Messages.tsx';
import { ExternalCommand, useSocket } from './hooks/useSocket.tsx';
import { Events } from './hooks/Events.tsx';

function App(): React.ReactElement {

  const [ command, setCommand ] = useState<ExternalCommand | null>(null);
  // Tenemos que pasar la variable de entorno con el endpoint
  const { socket, isConnected } = useSocket({ endpoint: '' });
  socket.on(Events[Events.COMMAND_RECEIVED], (externalCommand: ExternalCommand) => {
    console.log("event received!");
    
    setCommand(externalCommand)

    console.log(`now the state is: ${command}`);
  })

  const [ reducerState, reducerDispatcher ] = useReducer(menuReducer, {
    isInputsDisabled: false,
    isLaunchButtonsDisabled: true,
    statusColor: MenuStatusColor.waitingCommand,
    statusText: Messages.menu.waitingForCommand
})

  return (
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
          {/* <Space /> */}
          {/* <RushingClouds /> */}
          {/* <RocketWrapper /> */}
          <SpaceShuttle />
          {/* MENU */}
          <Menu 
            reducerState={reducerState}
            reducerDispatcher={reducerDispatcher}
          />
          {/* MENU */}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
