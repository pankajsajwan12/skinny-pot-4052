import { Button, Text } from '@chakra-ui/react'
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
          <img style={{textAlign:"left",height:"400px"}} className={styles.backgroundimg} src="IT.png" alt="It" />
          <div className={styles.body} >
            <Text style={{display:"flex",gap:"10px"}} > <img src="icon-bg.png" alt="tickicon" /> <span>AI in Recruting Technology</span>  </Text>
            <Text style={{display:"flex",gap:"10px"}}> <img src="icon-bg.png" alt="tickicon" /> Conversional UI</Text>
            <Text style={{display:"flex",gap:"10px"}}> <img src="icon-bg.png" alt="tickicon" />Data Security</Text>
            <Text style={{display:"flex",gap:"10px"}}> <img src="icon-bg.png" alt="tickicon" />Power Recruiting</Text>
            <br />
            <Text style={{paddingLeft:"50px"}}> Introducing</Text>
            <Text style={{paddingLeft:"50px"}}> <b>Monster Better Together</b> </Text>
            <Text style={{paddingLeft:"50px"}}><b>Experience</b> </Text>  
          </div>
          <div className={styles.employeerslogin}>
            <b  >Login</b>
            <br />
            <input className={styles.employeesinput} type="email" placeholder='Username' />
            <br />
            <input className={styles.employeesinput} type="password" placeholder='Password' />
            <br />
            <br />
            <button className={styles.loginbtn} >Login</button>
            <br />
            <br />
            <hr style={{border:"0.1px solid grey"}} />
            <br />
            <div style={{display:"flex",margin:"auto"}} >
            <h5>New User?</h5>
            <a href="/">Sign up</a>
            </div>
          </div>
        </div>
        <div>
            <Text fontSize="5xl"  >Our Services</Text>
            <Text style={{fontWeight:"400"}} >For employers who need great people. Find Better, Faster.</Text>
            <div style={{gap:"10px"}} >
            <button className={styles.servicesbtn}>CORE SERVICES</button>
            <button className={styles.servicesbtn}>BETTER TOGETHER</button>
            <button className={styles.servicesbtn}>MORE SOLUTIONS</button>
            </div>
          </div>
    </div>
  )
}

export default ForEmployeers