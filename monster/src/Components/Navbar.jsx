import React from 'react'
import Login from '../Page/Login'
import styles from "../CSS/Navbar.module.css"

const Navbar = () => {
  return (
    //Logic
    <div>
      <div className={styles.navbar} >
      <h1>Navbar</h1>
      <Login/>
      </div>
    </div>
  )
}

export default Navbar