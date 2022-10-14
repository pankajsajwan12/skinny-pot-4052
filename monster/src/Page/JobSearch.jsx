import React from 'react'
import { Footer } from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import AdvanceJobSearch from '../JobSearch/AdvanceJobSearch'
import JobSearchBottom from '../JobSearch/JobSearchBottom'

const JobSearch = () => {
  return (
    <div>
      <Navbar />
      <AdvanceJobSearch />
      <JobSearchBottom />
      <Footer />
    </div>
  )
}

export default JobSearch