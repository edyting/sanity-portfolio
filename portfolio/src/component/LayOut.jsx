import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function LayOut() {
  return (
    <div>
      {/* navbar */}
     < div className="">
        <Navbar/>
     </div>

      {/* body */}
      <div className="">
        <Outlet/>
      </div>

      {/* footer */}
    </div>
  )
}

export default LayOut
