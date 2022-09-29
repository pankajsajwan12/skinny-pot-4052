import React from 'react'
import style from "./Body.module.css"
import Main from './Main'
import Right from './Right'

function Body() {
  return (
    <div className={style.body} >
        <Main/>
        <Right/>
    </div>
  )
}

export default Body