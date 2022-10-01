

import React from 'react'
import style from "./Research.module.css"
import img from "../../../Images/research.png"

function Research() {
  return (
    <div className={style.container} >
        <h1>Monster Research and Reports</h1>
        <div>
            <div><img src={img}alt={img}/><p>Monster Employment Index</p></div>
            <div>The Monster Employment Index is a broad and comprehensive monthly analysis of online job posting activity conducted by Monster India.</div>
            <div>Learn More</div>
        </div>
    </div>
  )
}

export default Research