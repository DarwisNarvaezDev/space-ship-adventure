import { Badge, Box, Flex, Tag, Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { CenteredProps } from "../../styles/chakra/Props.tsx";

interface StatusContainerProps {
    handleMouseOverStatusBadge: Function
    handleClickStatusBadge: Function
    handleMouseLeaveStatusBadge: Function
    statusText: string
}
 
const StatusContainer: FunctionComponent<StatusContainerProps> = ({
    handleMouseOverStatusBadge,
    handleClickStatusBadge,
    handleMouseLeaveStatusBadge,
    statusText
}) => {
    return ( 
        <Flex
        id='statusContainer'
        width={"100%"}
        height={"10%"}
        {...CenteredProps}
      >
        <Tag
          id='statusBadge'
          w={"100%"}
          h="86%"
          borderRadius={"15px"}
          display={"flex"}
          {...CenteredProps}
          bg={"whitesmoke"}
          gap={2}
          cursor={"pointer"}
          onMouseOver={handleMouseOverStatusBadge}
          onMouseLeave={handleMouseLeaveStatusBadge}
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
            display={"flex"}
            {...CenteredProps}
          >
            <Text
              as="p"
              fontSize={"md"}
            >
            {statusText}
            </Text>
          </Box>
        </Tag>
      </Flex>
     );
}
 
export default StatusContainer;