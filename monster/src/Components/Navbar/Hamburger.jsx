import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
// import navbarCss from "../Navbar/Navbar.module.css";
import style from "./Navbar.module.css"

export default function Hamburger({ isOpen, setOpen }) {
  const btnRef = React.useRef();

  function onClose() {
    setOpen(false);
  }

  return (
    <>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"white"} />
          <DrawerHeader bgColor={"#7159db"} color="white">
            Monster
          </DrawerHeader>

          <DrawerBody padding="0">
            <div className={style.Hamburger}>
            
              <Link to={"/job-search"}>
                <div onClick={()=>onClose()} >
                  <p> JOBJ SEARCH</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/work-from-home-jobs"}>
                <div onClick={()=>onClose()}  >
                  <p> WORK FROM HOME</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/"} >
                <div onClick={()=>onClose()}  >
                  <p> CAREER TIPS</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              <Link to={"/"} >
                {" "}
                <div onClick={()=>onClose()}  >
                  <p> PREMIUM SERVICES</p>
                  <ChevronRightIcon />
                </div>
              </Link>
              
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
