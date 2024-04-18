import { Button, Code, Flex, Heading, Link, ListItem, Menu, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, UnorderedList, useDisclosure } from "@chakra-ui/react";
import { CenteredProps } from "../../styles/chakra/Props.tsx";
import { ReactComponent as PlanePassingBy } from '../../assets/plane.svg'
import BackgroundStyles from '../../styles/scenario/background.module.css'
import MenuStyles from '../../styles/menu/menu.module.css'
import ChalkArrow from '../../assets/chalk-arrow.png'
import Clouds from "./Clouds.tsx";
import React, { FunctionComponent, useEffect, useState } from "react";
import Ground from "./Ground.tsx";
import { RocketActionPayload } from "../../reducer/RocketReducer.tsx";

interface SpaceShuttleProps {
  rocketReducerState: RocketActionPayload
  rocketReducerDispatcher: Function
}

export const SpaceShuttle: FunctionComponent<SpaceShuttleProps> = ({
  rocketReducerState,
  rocketReducerDispatcher
}) => {

  const [ spaceShuttleAnimationClass, setSpaceShuttleAnimationClass ] = useState<string>('');

  useEffect(()=>{
    setSpaceShuttleAnimationClass(rocketReducerState.shiftShuttleClass);
  }, [rocketReducerState.shiftShuttleClass])

  return (
    <Flex
      id='spaceShuttle'
      as="div"
      {...CenteredProps}
      bg="#1f1f1f"
      h="100vh"
      w="100%"
      zIndex={99}
      flexDirection="column"
      className={`${BackgroundStyles.spaceShuttle} ${spaceShuttleAnimationClass}`}
      color={"white"}
    >
      <Flex
        id="appHero"
        position={"absolute"}
        top={"5%"}
        left={"10%"}
        w={"25%"}
        h={"250px"}
        flexDir={"column"}
        className={MenuStyles.menu}
      >
        <Flex
          id="heroHeader"
          height={"30%"}
          w={"100%"}
          justify={"left"}
          align={"center"}
        >
          <Heading size={"xl"} opacity={"0.3"}>Space Ship Adventure!</Heading>
        </Flex>
        <Flex
          id="heroBody"
          w={"100%"}
          height={"70%"}
          flexDir={"column"}
          gap={3}
          opacity={"0.3"}
        >
          <Text 
          >Animated fun project developed by <Link color={"whitesmoke"} href="https://github.com/DarwisNarvaezDev" isExternal>@DarwisNarvaezDev</Link>.</Text>
          <Text>Just open a the side menu and give the rocket flight specifications, enjoy!</Text>
          <Text>Alternatively, you can do a POST request with this <Link href="https://github.com/DarwisNarvaezDev/space-ship-adventure-api.git" isExternal>API</Link> with the following body to provide a command.</Text>
          <Text>{"{"}</Text>
          <Text pl={"20px"}>{'  "distance": <numeric value>'}</Text>
          <Text pl={"20px"}>{'  "flightTime": <numeric value>'}</Text>
          <Text pl={"20px"}>{'  "rocketSpeed": <numeric value>'}</Text>
          <Text>{"}"}</Text>
        </Flex>
      </Flex>
      <Flex
        id="clickMenuHint"
        w={"300px"}
        h={"250px"}
        position={"absolute"}
        bottom={"15%"}
        right={"20%"}
        className={MenuStyles.menu}
      >
        <Flex
          id="chalkArrowContainer"
          w={"100%"}
          h={"100%"}
          opacity={"0.3"}
          style={{
            backgroundImage: `url(${ChalkArrow})`,
            backgroundSize: "60%",
            backgroundRepeat: "no-repeat",
            transform: "rotate(120deg)"
          }}
        >
        </Flex>
      </Flex>
      <Flex
          id="clickHintText"
          position={"absolute"}
          bottom={"28%"}
          right={"12%"} 
          className={MenuStyles.clickHint}
          opacity={"0.3"}
         >
          <Text>Click here to start!</Text>
         </Flex>
      <Flex
        id='cloudsWrapper'
        as="div"
        height="90%"
        w="100%"
        color={"white"}
      >
        <Clouds></Clouds>
      </Flex>
      <Flex
        id='groundWrapper'
        as="div"
        height="10%"
        width="100%"
      >
        <PlanePassingBy
          className={BackgroundStyles.planePassingBy}
        ></PlanePassingBy>
        <Ground />
      </Flex>
    </Flex>
  );
}