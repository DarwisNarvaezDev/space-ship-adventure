import { CloseButton, Flex, FormControl, Heading } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { Messages } from "../../messages/Messages.tsx";
import { CenteredProps } from "../../styles/chakra/Props.tsx";
import { Formik } from "formik";

interface MenuCommandFormProps {
    onToggle: Function
    handleClickStatusBadge: Function
}
 
const MenuCommandForm: FunctionComponent<MenuCommandFormProps> = ({
    onToggle,
    handleClickStatusBadge
}) => {
    return (
      <Flex
        id="commandFormContainer"
        width={"90%"}
        height={"80%"}
        borderRadius={"15px"}
        overflow={"hidden"}
      >
        {/* { isOpen && ( */}
        {true && (
          <Flex
            w={"100%"}
            h={"100%"}
            bg={"whitesmoke"}
            style={{ animationDuration: "0.5s" }}
            boxShadow={"md"}
            className={"animate__animated animate__bounceInUp"}
            flexDir={"column"}
          >
            <Flex
              id="formHeader"
              width={"100%"}
              height={"20%"}
              overflow={"hidden"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
            >
              <Flex
                id="forHeaderText"
                w={"80%"}
                h={"100%"}
                justifyContent={"flex-start"}
                align={"center"}
              >
                <Heading size={"sm"} pl={"10px"}>
                  {Messages.menu.formHeader}
                </Heading>
              </Flex>
              <CloseButton
                onClick={() => {
                  onToggle();
                  handleClickStatusBadge();
                }}
              />
            </Flex>
            <Flex id="formBody" w={"100%"} h={"80%"} bg="tomato">
              <FormControl id="commandForm">
                <Formik
                  initialValues={{
                    distance: "",
                    speed: "",
                    days: "",
                  }}
                  validate={(values) => {
                    const errors = {};

                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    // Do something
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    // The form here
                    <></>
                  )}
                </Formik>
              </FormControl>
            </Flex>
          </Flex>
        )}
      </Flex>
    );
}
 
export default MenuCommandForm;