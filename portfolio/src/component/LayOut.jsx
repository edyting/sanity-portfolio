import React from 'react'
import { Outlet } from 'react-router-dom'

function LayOut() {
  return (
    <div>
      {/* navbar */}


      {/* body */}
      <div className="">
        <Outlet/>
      </div>

      {/* footer */}
    </div>
  )
}

export default LayOut
