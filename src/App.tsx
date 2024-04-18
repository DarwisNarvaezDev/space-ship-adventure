import React, { createContext, useCallback, useEffect, useReducer, useState } from 'react';

import { Flex, useDisclosure } from '@chakra-ui/react';
import { CenteredProps, SpaceInheritedFromParent } from './styles/chakra/Props.tsx';
import { SpaceShuttle } from './components/scenario/SpaceShuttle.tsx';
import Space from './components/scenario/Space.tsx';
import RushingClouds from './components/scenario/RushingClouds.tsx';
import RocketWrapper from './components/scenario/RocketWrapper.tsx';
import Menu from './components/menu/Menu.tsx';
import { MenuActionKind, MenuActionPayload, menuReducer } from './reducer/MenuReducer.tsx';
import { MenuStatusColor } from './interfaces/MenuStatusColor.tsx';
import { Messages } from './messages/Messages.tsx';
import { ExternalCommand, useSocket } from './hooks/useSocket.tsx';
import { Events } from './util/Events.tsx';
import { IncomingCommandModal } from './components/scenario/IncomingCommandModal.tsx';
import { rocketReducer } from './reducer/RocketReducer.tsx';
import { SpaceCoordinates } from './interfaces/SpaceCoordinates.tsx';

const socketAppToken: any = process.env.REACT_APP_SOCKET_APP_TOKEN;
const socketUrl: any = process.env.REACT_APP_SOCKET_URL;

export interface RocketContextData {
  spaceCoordinates: SpaceCoordinates | null
  coordinatesCallback: Function
}

export const RocketContext = createContext<RocketContextData | null>(null)

function App(): React.ReactElement {

  // Modal control
  const [openModal, setOpenModal] = useState<boolean>(false);
  // Menu control
  const { isOpen, onToggle } = useDisclosure()
  // Dashing clouds control
  const [showCloudDashing, setShowCloudsDashing] = useState<boolean>(false);
  // Whole menu control
  const [showWholeMenu, setShowWholeMenu] = useState<boolean>(true);

  const [reducerState, reducerDispatcher] = useReducer(menuReducer, {
    isInputsDisabled: false,
    isLaunchButtonsDisabled: true,
    statusColor: MenuStatusColor.waitingCommand,
    statusText: Messages.menu.waitingForCommand
  });

  const [rocketReducerState, rocketReducerDispatcher] = useReducer(rocketReducer, {
    landingAndApproxClass: '',
    isRocketSmoke: false,
    shiftShuttleClass: ''
  })

  const { socket, isConnected } = useSocket({ endpoint: socketUrl, appToken: socketAppToken });

  socket.on(Events.COMMAND_RECEIVED, (externalCommand: ExternalCommand) => {
    reducerDispatcher({ type: MenuActionKind.RECEIVING_DATA, payload: {} });
    reducerDispatcher({ type: MenuActionKind.SET_MENU_DATA, payload: externalCommand });
    setOpenModal(!openModal)
  })

  const [spaceCoordinatesCtx, setSpaceCoordinatesCtx] = useState<SpaceCoordinates | null>(null);
  const coordinatesCallBack = useCallback((newCoordinates: SpaceCoordinates) => {
    setSpaceCoordinatesCtx(newCoordinates);
  }, [])

  useEffect(() => {
    if (rocketReducerState.shiftShuttleClass.length > 1) {
      setShowCloudsDashing(true);
      setShowWholeMenu(false);
    }

    // console.log(spaceCoordinatesCtx);
    

  }, [rocketReducerState, spaceCoordinatesCtx])

  return (
    <RocketContext.Provider value={{ spaceCoordinates: spaceCoordinatesCtx, coordinatesCallback: coordinatesCallBack }}>
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
                rocketReducerState={rocketReducerState}
                rocketReducerDispatcher={rocketReducerDispatcher}
              />
              {showCloudDashing && (
                <>
                  <RushingClouds />
                  <Space
                    rocketReducerState={rocketReducerState}
                    rocketReducerDispatcher={rocketReducerDispatcher}
                  />
                </>
              )}
              <RocketWrapper
                rocketReducerState={rocketReducerState}
                rocketReducerDispatcher={rocketReducerDispatcher}
              />
              <SpaceShuttle
                rocketReducerState={rocketReducerState}
                rocketReducerDispatcher={rocketReducerDispatcher}
              />
              {showWholeMenu && (
                <Menu
                  reducerState={reducerState}
                  reducerDispatcher={reducerDispatcher}
                  isOpen={isOpen}
                  onToggle={onToggle}
                  rocketReducerState={rocketReducerState}
                  rocketReducerDispatcher={rocketReducerDispatcher}
                />
              )}
            </Flex>
          </Flex>
        </Flex>
      </>
    </RocketContext.Provider>
  );
}

export default App;
