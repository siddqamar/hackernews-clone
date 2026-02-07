'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Modal } from './Modal'

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmitClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <>
      <header className="bg-hn-orange p-1 flex items-center flex-wrap gap-1 leading-tight">
        <Link href="/" className="border border-white shrink-0">
          <div className="bg-hn-orange px-1 text-white font-bold text-[10pt] md:text-[12pt]">Y</div>
        </Link>
        
        <div className="flex items-center flex-wrap gap-1 font-bold text-[10pt]">
          <Link href="/" className="ml-1 whitespace-nowrap">Hacker News</Link>
          <span className="font-normal">|</span>
          <nav className="flex flex-wrap gap-1 font-normal">
            <Link href="/newest">new</Link>
            <span>|</span>
            <Link href="/front">past</Link>
            <span>|</span>
            <Link href="/newcomments">comments</Link>
            <span>|</span>
            <Link href="/ask">ask</Link>
            <span>|</span>
            <Link href="/show">show</Link>
            <span>|</span>
            <Link href="/jobs">jobs</Link>
            <span>|</span>
            <button 
              onClick={handleSubmitClick}
              className="cursor-pointer hover:underline"
            >
              submit
            </button>
          </nav>
        </div>
        
        <div className="ml-auto mr-1 text-[10pt]">
          <Link href="/login" className="font-normal">login</Link>
        </div>
      </header>
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Submission Info"
      >
        <p>This is just a clone haha using gemini for hackathon, please visit the original one.</p>
      </Modal>
    </>
  )
}
