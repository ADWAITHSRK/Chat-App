import React from 'react'
import Signup from './projectPages/Register/Register'
import Navbar from './projectComponents/Navbar/Navbar'
import Footer from './projectComponents/Footer/Footer'
import ChatPage from './projectPages/ChatPage/ChatPage'
import Sidebar from './projectComponents/Sidebar/Sidebar'
const App = () => {
  return (
    <div className='flex flex-col bg-white min-h-screen' >
      <Navbar/>
      <Sidebar/>
     
    </div>
  )
}

export default App