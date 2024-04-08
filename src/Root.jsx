import React from 'react'
import Header from './components/Header'
import {Outlet} from 'react-router-dom'

function Root() {
  return (
    <div className='container'>
        <Header />
         <Outlet/>

    </div>
  )
}

export default Root