import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../component/Navber'
import Footer from '../layout/Footer'


const Rootpage = () => {
  return (
    <div>
        <Navber/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Rootpage