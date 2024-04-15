import { Box, Button, CloseButton, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import React, { FunctionComponent, useEffect, useReducer, useRef, useState } from "react";
import { Messages } from "../../messages/Messages.tsx";
import { CenteredProps } from "../../styles/chakra/Props.tsx";
import { Field, Form, Formik } from "formik";
import MenuStyles from '../../styles/menu/menu.module.css'
import { MenuActionKind, MenuActionPayload } from "../../reducer/MenuReducer.tsx";
import { MenuFormFieldNames } from "../../interfaces/MenuForm.tsx";
import { RocketActionKind, RocketActionPayload } from "../../reducer/RocketReducer.tsx";

interface MenuCommandFormProps {
  isOpen: boolean
  onToggle: Function
  handleClickStatusBadge: Function
  handleFormInputClick: Function
  reducerState: MenuActionPayload,
  reducerDispatcher: any,
  rocketReducerState: RocketActionPayload
  rocketReducerDispatcher: Function
}

const MenuCommandForm: FunctionComponent<MenuCommandFormProps> = ({
  isOpen,
  onToggle,
  handleClickStatusBadge,
  handleFormInputClick,
  reducerState,
  reducerDispatcher,
  rocketReducerState,
  rocketReducerDispatcher
}) => {

  const [distance, setDistance] = useState<number | null | undefined>(null)
  const distanceRef = useRef<string>()
  const [rocketSpeed, setRocketSpeed] = useState<number | null | undefined>(null)
  const rocketSpeedeRef = useRef<string>()
  const [flightTime, setFlightTime] = useState<number | null | undefined>(null)
  const flightTimeRef = useRef<string>()

  const handleInputClickWrapper = (evt: React.MouseEvent) => {
    handleFormInputClick(evt)
  }

  const handleInputKeyUpEvent = (evt: React.KeyboardEvent) => {
    const inputWritten: string = evt.target.name;
    switch (inputWritten) {
      case MenuFormFieldNames.distance:
        setDistance(distanceRef.current.value)
      case MenuFormFieldNames.rocketSpeed:
        setRocketSpeed(rocketSpeedeRef.current.value)
      case MenuFormFieldNames.flightTime:
        setFlightTime(flightTimeRef.current.value)
    }
  }

  const handleLaunchButton = (evt: React.MouseEvent) => {
    rocketReducerDispatcher({
      type: RocketActionKind.LAUNCH_TO_PLANET,
      payload: {}
    })
  }

  useEffect(()=>{
    setDistance(reducerState.distance)
    setFlightTime(reducerState.flightTime)
    setRocketSpeed(reducerState.rocketSpeed)
  }, [reducerState])

  return (
    <Flex
      id="commandFormContainer"
      width={"100%"}
      height={"90%"}
      borderRadius={"15px"}
      overflow={"hidden"}
    >
      {isOpen && (
        <Flex
          w={"100%"}
          h={"100%"}
          bg={"whitesmoke"}
          style={{ animationDuration: "0.5s" }}
          boxShadow={"md"}
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
                distance: distance || '',
                rocketSpeed: rocketSpeed || '',
                flightTime: flightTime || '',
              }}
              validate={({
                distance,
                rocketSpeed,
                flightTime
              }) => {
                const errors = {};
                if (distance && rocketSpeed && flightTime) {
                  reducerDispatcher({ type: MenuActionKind.READY_FOR_LAUNCH })
                } else {
                  reducerDispatcher({ type: MenuActionKind.WAITING_FOR_COMMAND })
                }
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
                          ref={distanceRef}
                          disabled={reducerState.isInputsDisabled}
                          onClick={handleInputClickWrapper}
                          onKeyUp={handleInputKeyUpEvent}
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
                          ref={rocketSpeedeRef}
                          disabled={reducerState.isInputsDisabled}
                          variant={"filled"}
                          {...field}
                          placeholder='Speed in km/s.'
                          onClick={handleInputClickWrapper}
                          onKeyUp={handleInputKeyUpEvent}
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
                          ref={flightTimeRef}
                          disabled={reducerState.isInputsDisabled}
                          variant={"filled"}
                          {...field}
                          placeholder='Time in days.'
                          onClick={handleInputClickWrapper}
                          onKeyUp={handleInputKeyUpEvent}
                          size={"sm"}
                        ></Input>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    mt={4}
                    colorScheme='red'
                    type='submit'
                    isDisabled={reducerState.isLaunchButtonsDisabled}
                    onClick={handleLaunchButton}
                  >
                    {Messages.menu.launchButtonText}
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