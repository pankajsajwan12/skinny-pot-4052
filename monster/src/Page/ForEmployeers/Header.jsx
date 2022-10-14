import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import {Button} from "@chakra-ui/react"
// import logo from "../../Images/"
const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <Link to="/">Jobseeker Login</Link> {"|"}{" "}
        <Link to="/">Connect with us</Link> {"|"} <Link to="/">Help</Link> {"|"}{" "}
        <Link to="/">Security</Link> {"|"}{" "}
      </div>
      <div style={{display:"flex",gap:"20px",marginTop:"10px",justifyContent:"space-around"}}>
        <div>
          <img style={{height:"100%"}} src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg" alt="monlogo" />
        </div>
        <div style={{display:"flex",gap:"20px"}}>
          <div style={{border:"1px solid black", height:"100%"}}>
            <Button colorScheme="white">
            <Link to="/">
              <img style={{width:"100px"}} src="thinkinglogo.png" alt="thinkinglogo" />
            </Link>
            </Button>
          </div>
          <div>
            <button style={{backgroundColor:"#f5a623",height:"100%",color:"white",paddingLeft:"20px",paddingRight:"20px"}} >Buy Online</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
