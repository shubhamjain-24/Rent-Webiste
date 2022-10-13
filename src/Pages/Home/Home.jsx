import React from 'react'
import './home.css'
import Navbar from "../../Components/Navbar/Navbar"
import Filter from "../../Components/filter/Filter"
import Card from '../../Components/Card/Card'
const Home = () => {
  return (
    <div className='home'>
      {/* <Navbar/> */}
        <Filter/>
        <div className="cardContainer">
        <Card/>
        </div>
      
    </div>
  )
}

export default Home