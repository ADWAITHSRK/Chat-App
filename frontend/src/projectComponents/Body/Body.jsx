import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div className='flex min-h-screen w-full'>
        <Sidebar/>
        <div>{children}</div>
        
    </div>
  )
}

export default Layout