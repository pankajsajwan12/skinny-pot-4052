import React from 'react'
import Login from '../Page/Login'
import styles from "../CSS/Navbar.module.css"
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const selector=useSelector(state=>state.auth)
  console.log(selector);
  return (
    //Logic
    <div>
      <div className={styles.navbar} >
      <h1>Navbar</h1>
      <Login/>
      
      <Link to="/for-employeers" >
      <Button
        colorScheme="white"
        style={{ color: "black", border: "1px solid black" }}
      >
        FOR EMPLOYEERS
      </Button>
      </Link>
      {/* <h1>{selector.userData.username}</h1> */}
      </div>
    </div>
  )
}

export default Navbar