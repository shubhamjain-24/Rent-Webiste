import React from 'react'
import  './shortlist.css'
import Navbar from '../../Components/Navbar/Navbar'
// import Card from '../../Components/Card/Card'
import Cart from '../../Components/Cart/cart'
const SortList = () => {
    return (
        <>
        <Navbar/>
        <div className='shortList'>
          <div className="heading">
            Favourite Properties
          </div>
             <div className="container-main">
              <Cart/>
             </div>
        </div>
    </>
  )
}

export default SortList
