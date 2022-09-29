import React from 'react'
import Main1 from "../../../Images/Main1.png"
import Main101 from "../../../Images/Main101.png"
import Findjob from '../FindJob/Findjob'
import Premium from '../Premium/Premium'
import style from "./Main.module.css"


function Main() {

  return (
    <div>
        <img className={style.main1} src={Main1} alt="" />
        <img className={style.main101} src={Main101} alt="" />
        <Premium/>
        <Findjob/>
    </div>
  )
}

export default Main