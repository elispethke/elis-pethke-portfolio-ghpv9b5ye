import { useRef, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface ThreeDTitleProps {
  text: string
  className?: string
}

export const ThreeDTitle = ({ text, className }: ThreeDTitleProps) => {
  const ref = useRef<HTMLHeadingElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const { left, top, width, height } = ref.current.getBoundingClientRect()
      const x = (e.clientX - left - width / 2) / 25
      const y = (e.clientY - top - height / 2) / 25

      setRotation({ x: -y, y: x })
    }

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 })
    }

    const element = ref.current
    if (element) {
      element.addEventListener('mousemove', handleMouseMove)
      element.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove)
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div className="perspective-1000 inline-block p-4">
      <h1
        ref={ref}
        className={cn(
          'text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary cursor-default transition-transform duration-100 ease-out transform-style-3d',
          className,
        )}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          textShadow: '0 10px 30px rgba(0,0,0,0.15)',
        }}
      >
        {text}
      </h1>
    </div>
  )
}
