"use client"

import { useEffect, useRef } from "react"

export function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      time += 0.01

      // Clear canvas
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Create flowing patterns
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, `rgba(255, 255, 255, ${0.05 + Math.sin(time) * 0.02})`)
      gradient.addColorStop(0.5, `rgba(255, 255, 255, ${0.02 + Math.cos(time * 1.5) * 0.01})`)
      gradient.addColorStop(1, `rgba(255, 255, 255, ${0.03 + Math.sin(time * 0.8) * 0.015})`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add flowing lines
      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + Math.sin(time + i) * 0.05})`
        ctx.lineWidth = 2

        const y = (canvas.height / 6) * (i + 1) + Math.sin(time + i) * 50
        const amplitude = 100 + Math.sin(time * 0.5 + i) * 30

        ctx.moveTo(0, y)
        for (let x = 0; x <= canvas.width; x += 10) {
          const waveY = y + Math.sin(x * 0.01 + time + i) * amplitude
          ctx.lineTo(x, waveY)
        }
        ctx.stroke()
      }

      // Add particles
      for (let i = 0; i < 20; i++) {
        const x = Math.sin(time * 0.5 + i) * canvas.width * 0.4 + canvas.width * 0.5
        const y = Math.cos(time * 0.3 + i) * canvas.height * 0.3 + canvas.height * 0.5
        const size = 2 + Math.sin(time + i) * 1

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + Math.sin(time + i) * 0.2})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" style={{ mixBlendMode: "screen" }} />
  )
}
