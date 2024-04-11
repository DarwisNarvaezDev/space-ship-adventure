import './App.css';
import React, { useState } from 'react';

import { Button, Fade, Flex, Image, ScaleFade, Tag, useDisclosure } from '@chakra-ui/react';
import { CenteredProps, SpaceInheritedFromParent } from './styles/chakra/Props.tsx';
import Clouds from './components/Clouds.tsx';
import Ground from './components/Ground.tsx';
import SpaceShuttle from './components/SpaceShuttle.tsx';
import Space from './components/Space.tsx';
import RushingClouds from './components/RushingClouds.tsx';
import RocketWrapper from './components/RocketWrapper.tsx';

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
          <Flex
            id='menu'
            // as={"section"}
            position={"absolute"}
            bg={"whitesmoke"}
            width={"30vw"}
            height={"80%"}
            right={"10%"}
            bottom={"17%"}
            zIndex={"999999"}
            borderRadius={"15px"}
          >
          </Flex>
          <Tag
                size='lg'
                borderRadius='15px'
                variant='solid'
                style={{ position: 'absolute', bottom: '11%', right: '10%', zIndex: 9999 }}
            >
                <Flex
                    as="div"
                    w="20px"
                    height="20px"
                    background="green"
                    marginRight="10px"
                    borderRadius="full"
                >
                </Flex>
                Waiting for command
            </Tag>
          {/* MENU */}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
