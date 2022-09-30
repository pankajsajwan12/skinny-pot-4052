import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CareerTips from '../Page/CareerTips'
import ForEmployeers from '../Page/ForEmployeers/ForEmployeers'
import HomePage from '../Page/HomePage'
import JobSearch from '../Page/JobSearch'
import PremiumServices from '../Page/PremiumServices'
import WorkFromHome from '../Page/WorkFromHome'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="/job-search" element={<JobSearch />}/>
        <Route path='/work-from-home-jobs' element={<WorkFromHome />}/>
        <Route path='/career-advice' element={<CareerTips />}/>
        <Route path='/career-services' element={<PremiumServices />}/>
        <Route path='/for-employeers' element={<ForEmployeers />}/>
    </Routes>
  )
}

export default MainRoutes