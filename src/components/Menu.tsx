import { Badge, Box, CloseButton, Flex, FormControl, FormHelperText, FormLabel, HStack, Heading, Radio, RadioGroup, ScaleFade, Tag, Text, useDisclosure } from "@chakra-ui/react";
import MenuStyles from '../styles/menu/menu.module.css'
import React, { useState } from "react";
import { CenteredProps } from "../styles/chakra/Props.tsx";
import { Messages } from "../messages/Messages.tsx";
import MenuCommandForm from "./menu/MenuCommandForm.tsx";

function Menu() {

    const [statusText, setStatusText] = useState<string>('Waiting for command.')
    const { isOpen, onToggle } = useDisclosure()

    const handleMouseOverStatusBadge = (evt: React.MouseEvent): void => {
        if(!isOpen){
            setStatusText(Messages.menu.clickToEnterCommand)
        }else{
            setStatusText(Messages.menu.clickToCloseForm)
        }
    }

    const hanldeMouseLeaveStatusBadge = (evt: React.MouseEvent): void => {
        setStatusText(Messages.menu.waitingForCommand)
    }

    const handleClickStatusBadge = (evt: React.MouseEvent): void => {
        if( isOpen ){
            setStatusText(Messages.menu.waitingForCommand)
        }else{
            setStatusText(Messages.menu.clickToCloseForm)
        }
        onToggle()
    }

    return ( 
        <Flex
            id='menu'
            className={MenuStyles.menu}
            as={"section"}
            position={"absolute"}
            // bg={"whitesmoke"}
            width={"300px"}
            height={"60%"}
            right={"10%"}
            bottom={"12%"}
            zIndex={"999999"}
            borderRadius={"15px"}
            flexDir={"column"}
            overflow={"hidden"}
            {...CenteredProps}
          >
            <MenuCommandForm
                onToggle={onToggle}
                handleClickStatusBadge={handleClickStatusBadge}
            />
            <Flex
              id='statusContainer'
              width={"100%"}
              height={"20%"}
              // bg={"green"}
              {...CenteredProps}
            >
              <Tag
                id='statusBadge'
                w={"90%"}
                h="50%"
                borderRadius={"15px"}
                display={"flex"}
                {...CenteredProps}
                bg={"whitesmoke"}
                gap={2}
                cursor={"pointer"}
                onMouseOver={handleMouseOverStatusBadge}
                onMouseLeave={hanldeMouseLeaveStatusBadge}
                onClick={handleClickStatusBadge}
              >
                <Box
                  id='statusLightWrapper'
                  width={"10%"}
                  h={"100%"}
                  display={"flex"}
                  {...CenteredProps}
                >
                  <Badge
                    id='statusLight'
                    as={"span"}
                    w="100%"
                    height={"25px"}
                    borderRadius={"full"}
                    bg={"green"}
                  >
                  </Badge>
                </Box>
                <Box
                  id='statusLight'
                  width={"80%"}
                  h={"100%"}
                  // bg={"blue"}
                  display={"flex"}
                  {...CenteredProps}
                >
                  <Text
                    as="p"
                    w={"90%"}
                    h={"50%"}
                    textAlign={"center"}
                  >
                    {statusText}
                  </Text>
                </Box>
              </Tag>
            </Flex>
          </Flex>
     );
}

export default Menu;