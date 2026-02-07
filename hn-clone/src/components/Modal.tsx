'use client'

import { X } from 'lucide-react'
import { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-hn-background w-full max-w-md border border-hn-orange shadow-lg">
        <div className="flex items-center justify-between bg-hn-orange p-2 text-white">
          <h2 className="font-bold">{title}</h2>
          <button onClick={onClose} className="hover:text-black">
            <X size={20} />
          </button>
        </div>
        <div className="p-4 bg-[#f6f6ef] text-black">
          {children}
        </div>
        <div className="flex justify-end p-2 bg-[#f6f6ef] border-t border-hn-grey/20">
          <button 
            onClick={onClose}
            className="px-4 py-1 border border-hn-grey text-black hover:bg-gray-200 text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
