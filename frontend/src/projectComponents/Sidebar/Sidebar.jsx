import { Button } from 'antd'
import { Clock, Inbox, Pen, Pencil, PenIcon, SendHorizontal, Star, StickyNote } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  return (
    <div className=' flex flex-col w-60 h-screen bg-gray-200/50 px-2 py-4 '>
        <div  className='flex  justify-center items-center bg-blue-200 hover:bg-blue-300 w-[130px] h-[50px] rounded-xl ml-4 mt-4'>
            <div className='flex  justify-center items-center mr-2.5'><button  className='bg-transparent w-full  flex gap-1'><Pencil className='h-[18px] '/><h1 className='text-gray-650 text-md'>Compose</h1></button></div>
            
        </div>
        <div className='flex items-center bg-gray-100 hover:bg-gray-200 w-full h-[30px] rounded-xl mt-6 '><button className='flex bg-transparent gap-1 px-8'><Inbox/><span className='text-gray-700 '>Inbox</span></button></div>
        <div className='flex items-center bg-gray-100 hover:bg-gray-200 w-full h-[30px] rounded-xl mt-5 '><button className='flex bg-transparent gap-1 px-8'><Star/><span className='text-gray-700 '>Starred</span></button></div>
        <div className='flex items-center bg-gray-100 hover:bg-gray-200 w-full h-[30px] rounded-xl mt-5 '><button className='flex bg-transparent gap-1 px-8'><Clock/><span className='text-gray-700 '>Snoozed</span></button></div>
        <div className='flex items-center bg-gray-100 hover:bg-gray-200 w-full h-[30px] rounded-xl mt-5 '><button className='flex bg-transparent gap-1 px-8'><SendHorizontal/><span className='text-gray-700 '>Send</span></button></div>
        <div className='flex items-center bg-gray-100 hover:bg-gray-200 w-full h-[30px] rounded-xl mt-5 '><button className='flex bg-transparent gap-1 px-8'><StickyNote/><span className='text-gray-700 '>Drafts</span></button></div>
    </div>
  )
}

export default Sidebar