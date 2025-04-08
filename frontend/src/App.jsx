import React from 'react'
import Signup from './projectPages/Register/Register'
import Navbar from './projectComponents/Navbar/Navbar'
import Footer from './projectComponents/Footer/Footer'
import ChatPage from './projectPages/ChatPage/ChatPage'
import Sidebar from './projectComponents/Sidebar/Sidebar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './projectComponents/Body/Body'
import { Inbox } from './projectComponents/Inbox/Inbox'
import Mail from './projectComponents/Mail/Mail'

const router = createBrowserRouter ([
  {
    path:'/',
    element : <Layout><Inbox/></Layout>},
    {
      path:'/mail/:id',
      element : <Layout><Mail/></Layout>},
])
const App = () => {
  return (
    <div className='flex flex-col bg-white min-h-screen' >
      <Navbar/>
      <RouterProvider router = {router}/>
     
    </div>
  )
}

export default App