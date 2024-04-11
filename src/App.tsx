import React, { useState } from 'react';

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

function App(): React.ReactElement {

  const { isOpen, onToggle } = useDisclosure()

  const handleClick = (evt: React.MouseEvent): void => {
  }

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
          <Menu />
          {/* MENU */}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
