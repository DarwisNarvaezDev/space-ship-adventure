import './App.css';
import React, { useState } from 'react';

import { Button, Flex, Image, Tag } from '@chakra-ui/react';
import { CenteredProps, SpaceInheritedFromParent } from './styles/chakra/Props.tsx';
import Clouds from './components/Clouds.tsx';
import Ground from './components/Ground.tsx';
import SpaceShuttle from './components/SpaceShuttle.tsx';
import Space from './components/Space.tsx';
import RushingClouds from './components/RushingClouds.tsx';
import RocketWrapper from './components/RocketWrapper.tsx';

function App(): React.ReactElement {

  const handleClick = (evt: React.MouseEvent): void => {
    // setAnimationClass(rocketLaunchAnimationClass)
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
          <Space />
          <RushingClouds />
          <RocketWrapper />
          <SpaceShuttle />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
