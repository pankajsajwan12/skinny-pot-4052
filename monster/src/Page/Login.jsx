import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Register from "./Register";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div>
      <Button ref={btnRef} colorScheme="white" style={{color:"black",border:"1px solid black" }}   onClick={onOpen}>
        JOBSEEKERLOGIN
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
      <Register/>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Login;
