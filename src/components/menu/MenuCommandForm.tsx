import { Box, Button, CloseButton, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { Messages } from "../../messages/Messages.tsx";
import { CenteredProps } from "../../styles/chakra/Props.tsx";
import { Field, Form, Formik } from "formik";
import MenuStyles from '../../styles/menu/menu.module.css'


interface MenuCommandFormProps {
    isOpen: boolean
    onToggle: Function
    handleClickStatusBadge: Function
    handleFormInputClick: Function
}
 
const MenuCommandForm: FunctionComponent<MenuCommandFormProps> = ({
    isOpen,
    onToggle,
    handleClickStatusBadge,
    handleFormInputClick
}) => {
    return (
      <Flex
        id="commandFormContainer"
        width={"100%"}
        height={"90%"}
        borderRadius={"15px"}
        overflow={"hidden"}
      >
        { isOpen && (
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
            <Box 
              id="formBody"
              w={"100%"}
              h={"80%"} 
              display={"flex"}
              flexDir={"column"}
              {...CenteredProps} 
              >
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
                    <Form
                      className={MenuStyles.menuForm}
                      style={{
                        width: "100%",
                        height: "100%",
                        paddingLeft: "20px",
                        paddingTop: "10px",
                        paddingRight: "20px",
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      <Field name='distance'>
                        {({ field, form }) => (
                         <FormControl>
                            <FormLabel fontSize={"sm"}>Distance</FormLabel>
                            <Input
                              onClick={(evt: React.MouseEvent) => {
                                handleFormInputClick(evt)
                              }}
                              variant={"filled"}
                              {...field}
                              placeholder='Distance in millions of km.'
                              size={"sm"}
                              ></Input>
                         </FormControl> 
                        )}
                      </Field>
                      <Field name='rocketSpeed'>
                        {({ field, form }) => (
                         <FormControl>
                            <FormLabel fontSize={"sm"}>Rocket Speed</FormLabel>
                            <Input
                              variant={"filled"}
                              {...field}
                              placeholder='Speed in km/s.'
                              onClick={(evt: React.MouseEvent) => {
                                handleFormInputClick(evt)
                              }}
                              size={"sm"}
                              ></Input>
                         </FormControl> 
                        )}
                      </Field>
                      <Field name='flightTime'>
                        {({ field, form }) => (
                         <FormControl>
                            <FormLabel fontSize={"sm"}>Flight Time</FormLabel>
                            <Input
                              variant={"filled"}
                              {...field}
                              placeholder='Time in days.'
                              onClick={(evt: React.MouseEvent) => {
                                handleFormInputClick(evt)
                              }}
                              size={"sm"}
                              ></Input>
                         </FormControl> 
                        )}
                    </Field>
                    <Button
                      mt={4}
                      colorScheme='red'
                      type='submit'
                    >
                      Launch!
                    </Button>
                  </Form>
                  )}
                </Formik>
            </Box>
          </Flex>
        )}
      </Flex>
    );
}
 
export default MenuCommandForm;