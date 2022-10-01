import React from 'react'
import Body from '../Components/HomePage/Body/Body'
import SimpleSlider from '../Components/HomePage/Logos/Logos'
import RightContainer2 from '../Components/HomePage/RightContainer2'
import TopSearch from '../Components/HomePage/TopSearch'
import Navbar from '../Components/Navbar/Navbar'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <TopSearch/>
      <RightContainer2/>
      <SimpleSlider/>
      <Body/>
    </div>
  )
}

export default HomePage