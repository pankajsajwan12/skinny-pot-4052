import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Register from "./Register";
import { useForm } from "react-hook-form";
import styles from "../CSS/Login.module.css";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Button
        ref={btnRef}
        colorScheme="white"
        style={{ color: "black", border: "1px solid black" }}
        onClick={onOpen}
      >
        JOBSEEKERLOGIN
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Text paddingLeft="20px" fontSize="3xl" fontWeight="bold">
            Welcome!
          </Text>
          <Text paddingLeft="20px" fontSize="xl">Log in using your Monster credentials</Text>
          <DrawerBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  placeholder="E-mail/Mobile"
                  className={styles.email}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>Please enter valid Email ID/Mobile number</span>
                )}
                <br />
                <br />
                <input
                  type="text"
                  placeholder="Password"
                  className={styles.password}
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span style={{ color: "red" }}>Please enter your password</span>
                )}
                <br />
                <br />
                <button className={styles.login}>Login</button>
              </div>
            </form>
            <br />
            <div style={{ display: "flex", textAlign: "center" }}>
              <hr
                style={{
                  border: "0.5px solid grey",
                  width: "50%",
                  marginTop: "20px",
                }}
              />
              <span
                style={{
                  padding: "0 10px",
                  fontSize: "1.714em",
                  color: "grey",
                }}
              >
                OR
              </span>
              <hr
                style={{
                  border: "1px solid grey",
                  width: "50%",
                  marginTop: "20px",
                }}
              />
            </div>
            <Text fontSize="xl" textAlign="center">
              With your social network
            </Text>
            <br />
            <div
              style={{ display: "flex", gap: "20px", justifyContent: "center" }}
            >
              <a href="https://www.google.com/" target="-blank">
                {" "}
                <div className={styles.google}>
                  {" "}
                  <img
                    src="https://img.icons8.com/parakeet/24/000000/experimental-google-logo-parakeet.png"
                    alt="google"
                  />
                  <Text fontSize="sm">Login with Google</Text>{" "}
                </div>
              </a>
              <a href="https://www.facebook.com/" target="-blank">
                <div className={styles.facebook}>
                  {" "}
                  <img
                    src="https://img.icons8.com/nolan/24/facebook-new.png"
                    alt="facebook"
                  />
                  <Text fontSize="sm">Login with facebook</Text>{" "}
                </div>
              </a>
            </div>
            <br />
            <div
              style={{
                border: "1px solid black",
                borderRadius: "5px",
                textAlign: "center",
                height: "140px",
              }}
            >
              <b style={{fontSize:"20px"}} >New to Monster?</b>
              <p>
                Create your profile now and be visible to the top recruiters in
                the world
              </p>
              <Register />
            </div>
            <br />
            <div
              style={{
                border: "1px solid black",
                height: "100px",
                textAlign: "center",
                borderRadius:"5px"
              }}
            >
              <p>Your dream job is a click away! Get the app on your mobile.</p>
              <Flex justifyContent="center" gap="20px">
                <a
                  target="-blank"
                  href="https://play.google.com/store/apps/details?id=com.monsterindia.seeker.views&referrer=utm_source%3DWebsite%26utm_campaign%3DJobs-App"
                >
                  <Image height="40px" src="googleplaystore.png" />
                </a>
                <a
                  target="-blank"
                  href="https://apps.apple.com/in/app/monster-jobs/id525775161"
                >
                  <Image height="40px" src="ios.png" />
                </a>
              </Flex>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Login;
