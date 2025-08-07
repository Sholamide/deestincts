'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface InfinityPatternProps {
  isDark?: boolean
  className?: string
}

export default function InfinityPattern({ isDark = false, className = '' }: InfinityPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current
        setDimensions({ width: offsetWidth, height: offsetHeight })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !dimensions.width || !dimensions.height) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const drawInfinity = (progress: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const scale = Math.min(canvas.width, canvas.height) * 0.15
      
      ctx.strokeStyle = isDark ? '#ffffff' : '#000000'
      ctx.lineWidth = 3
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      ctx.beginPath()
      
      const totalPoints = 200
      const pointsToShow = Math.floor(totalPoints * progress)
      
      for (let i = 0; i <= pointsToShow; i++) {
        const t = (i / totalPoints) * 4 * Math.PI
        const x = centerX + scale * Math.cos(t) / (1 + Math.sin(t) * Math.sin(t))
        const y = centerY + scale * Math.sin(t) * Math.cos(t) / (1 + Math.sin(t) * Math.sin(t))
        
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      
      ctx.stroke()
      
      // Add multiple infinity symbols for pattern effect
      if (progress > 0.3) {
        const symbols = [
          { x: centerX - scale * 2, y: centerY - scale * 1.5, scale: 0.6 },
          { x: centerX + scale * 2, y: centerY + scale * 1.5, scale: 0.4 },
          { x: centerX - scale * 1.5, y: centerY + scale * 2, scale: 0.3 },
          { x: centerX + scale * 1.8, y: centerY - scale * 1.8, scale: 0.5 },
        ]
        
        symbols.forEach((symbol, index) => {
          const symbolProgress = Math.max(0, (progress - 0.3 - index * 0.1) * 2)
          if (symbolProgress > 0) {
            ctx.save()
            ctx.globalAlpha = 0.3
            ctx.lineWidth = 2
            
            ctx.beginPath()
            const symbolPoints = Math.floor(100 * symbolProgress)
            
            for (let i = 0; i <= symbolPoints; i++) {
              const t = (i / 100) * 4 * Math.PI
              const x = symbol.x + symbol.scale * scale * Math.cos(t) / (1 + Math.sin(t) * Math.sin(t))
              const y = symbol.y + symbol.scale * scale * Math.sin(t) * Math.cos(t) / (1 + Math.sin(t) * Math.sin(t))
              
              if (i === 0) {
                ctx.moveTo(x, y)
              } else {
                ctx.lineTo(x, y)
              }
            }
            
            ctx.stroke()
            ctx.restore()
          }
        })
      }
    }

    const unsubscribe = progress.on('change', drawInfinity)
    drawInfinity(progress.get())

    return () => unsubscribe()
  }, [dimensions, progress, isDark])

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
