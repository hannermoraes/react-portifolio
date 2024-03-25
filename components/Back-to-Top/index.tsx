'use client'

import { TbArrowNarrowUp } from 'react-icons/tb'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '../ui/button'

export const BackToTop = () => {
  const [show, setShow] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = useCallback(() => {
    setShow(window.scrollY > 100)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className=' fixed right-6 bottom-9 z-20 low-bounce border-none'>
      {show && (
        <Button
          onClick={scrollToTop}
          className="shadow-2xl shadow-blue-400/20 rounded-xl"
        >
          <TbArrowNarrowUp
            size={20} />
        </Button>
      )}
    </div>
  )
}
