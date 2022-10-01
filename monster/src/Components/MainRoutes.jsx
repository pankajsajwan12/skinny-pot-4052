import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CareerTips from '../Page/CareerTips'
import ForEmployeers from '../Page/ForEmployeers/ForEmployeers'
import HomePage from '../Page/HomePage'
import JobSearch from '../Page/JobSearch'
import PremiumServices from '../Page/PremiumServices'
import WorkDetailsPage from '../Page/WorkDetailsPage'
import WorkFromHomes from '../Page/WorkFromHomes'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path="/job-search" element={<JobSearch />}/>
        <Route path='/work-from-home-jobs' element={<WorkFromHomes />}/>
        <Route path="/work-from-home-jobs/:id" element={<WorkDetailsPage />}/>
        <Route path='/career-advice' element={<CareerTips />}/>
        <Route path='/career-services' element={<PremiumServices />}/>
        <Route path='/for-employeers' element={<ForEmployeers />}/>
    </Routes>
  )
}

export default MainRoutes