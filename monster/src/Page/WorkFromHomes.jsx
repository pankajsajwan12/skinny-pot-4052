import React from 'react'
import WorkFromHomeFilter from '../WorkFromHome/WorkFromHomeFilter'
import WorkFromHome from '../WorkFromHome/WorkFromHome'
import style from '../WorkFromHome/WorkFromHome.module.css'

const WorkFromHomes = () => {
  return (
    <div className={style.WorkFromHomes_Main}>
      <div className={style.WorkFromHomeFilters}><WorkFromHomeFilter /></div>
      <div className={style.WorkFromHomes}><WorkFromHome /></div>
    </div>
  )
}

export default WorkFromHomes