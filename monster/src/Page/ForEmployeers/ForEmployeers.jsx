import { Text } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'
import styles from "./Header.module.css"

const ForEmployeers = () => {
  return (
    <div>
        <Header/>
        <br />
        {/* <div style={{display:"flex",height:"100%", border:"1px solid black"}} >
          <div>
            <img style={{height:"100%"}} src="body.png" alt="" />
          </div>
          <div style={{backgroundColor:"#380c5e"}}>
            <b style={{color:"white"}} >Login</b>
            <input type="email" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button className={styles.login}>Login</button>
          </div>
        </div> */}
        <div className={styles.employeers} >
          <img style={{textAlign:"left",height:"400px"}} src="IT.png" alt="It" />
          <div className={styles.body} >
            <Text> AI in Recruting Technology </Text>
            <Text> Conversional UI</Text>
            <Text> Data Security</Text>
            <Text> Power Recruiting</Text>
            <Text> Introducing</Text>
            <Text> Monster Better Together Experience</Text>  
          </div>
          <div className={styles.employeerslogin}>
            <b  >Login</b>
            <input type="email" />
            <input type="password" />
            <button>Login</button>
          </div>
        </div>
    </div>
  )
}

export default ForEmployeers