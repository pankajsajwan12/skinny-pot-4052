import React from 'react'
import WorkFromHomeFilter from '../WorkFromHome/WorkFromHomeFilter'
import WorkFromHome from '../WorkFromHome/WorkFromHome'
import style from '../WorkFromHome/WorkFromHome.module.css'
import Navbar from '../Components/Navbar/Navbar'
import { Footer } from '../Components/Footer/Footer'

const WorkFromHomes = () => {
  return (
    <>
    <Navbar />
      <div className={style.WorkFromHomes_Main}>
        <div className={style.WorkFromHomeFilters}><WorkFromHomeFilter /></div>
        <div className={style.WorkFromHomes}><WorkFromHome /></div>
      </div>
      <Footer />
    </>
  )
}

export default WorkFromHomes