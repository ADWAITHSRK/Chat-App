import React from 'react'
import { MessageCircleDashed } from 'lucide-react'
import { Button } from 'antd'
const Footer = () => {
  return (
    <footer className="mt-6 px-12 bg-gray-100 p-4 flex justify-between items-center text-gray-700 fixed bottom-0 w-full h-20">
    <div className="flex items-center gap-1">
      <MessageCircleDashed />
      <div className='flex flex-col items-center'>
      <span className="text-xl font-bold text-amber-700">ChatVerse</span>
      </div>
      
    </div>
    <div className="flex gap-6">
      <a href="/about" className="hover:text-blue-500">About</a>
      <a href="/privacy" className="hover:text-blue-500">Privacy</a>
      <a href="/terms" className="hover:text-blue-500">Terms</a>
    </div>
    <div className="text-sm">
      © 2025 ChatVerse
    </div>
  </footer>
  )
}

export default Footer