import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { CenteredProps } from "../styles/chakra/Props.tsx";
import { ReactComponent as PlanePassingBy } from '../assets/plane.svg'
import BackgroundStyles from '../styles/scenario/background.module.css'
import Clouds from "./Clouds.tsx";
import React from "react";
import Ground from "./Ground.tsx";

export default function SpaceShuttle(): React.ReactElement {
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
      className={BackgroundStyles.spaceShuttle}
    >
      <Flex
        id='cloudsWrapper'
        as="div"
        height="90%"
        w="100%"
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