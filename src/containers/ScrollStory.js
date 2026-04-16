import React, { useEffect, useRef } from 'react'

const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

const createNodes = (count) =>
  Array.from({ length: count }, (_, i) => {
    const angle = (Math.PI * 2 * i) / count
    const radius = 120 + ((i * 37) % 180)

    return {
      cloudX: (Math.random() - 0.5) * 1.7,
      cloudY: (Math.random() - 0.5) * 1.3,
      ringX: Math.cos(angle) * radius,
      ringY: Math.sin(angle) * radius * 0.6,
      rackX: ((i % 12) - 5.5) * 52,
      rackY: (Math.floor(i / 12) - 3) * 28,
      size: 2 + (i % 4)
    }
  })

const ScrollStory = () => {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const context = canvas.getContext('2d', { alpha: false })
    const nodes = createNodes(108)

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const drawBackdrop = (width, height, value) => {
      const gradient = context.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, '#04070d')
      gradient.addColorStop(0.6, '#0f172a')
      gradient.addColorStop(1, '#111827')
      context.fillStyle = gradient
      context.fillRect(0, 0, width, height)

      context.globalAlpha = 0.12
      context.strokeStyle = '#38bdf8'
      context.lineWidth = 1
      const spacing = 56
      const offset = (value * 120) % spacing

      for (let x = -spacing + offset; x < width + spacing; x += spacing) {
        context.beginPath()
        context.moveTo(x, 0)
        context.lineTo(x + 100, height)
        context.stroke()
      }

      context.globalAlpha = 1
    }

    const drawNodes = (width, height, value) => {
      const centerX = width / 2
      const centerY = height / 2

      nodes.forEach((node) => {
        const stageOne = clamp(value / 0.45, 0, 1)
        const stageTwo = clamp((value - 0.45) / 0.35, 0, 1)
        const stageThree = clamp((value - 0.8) / 0.2, 0, 1)

        const xOne = centerX + node.cloudX * width * 0.42
        const yOne = centerY + node.cloudY * height * 0.38
        const xTwo = centerX + node.ringX
        const yTwo = centerY + node.ringY
        const xThree = centerX + node.rackX
        const yThree = centerY + node.rackY

        const xMid = xOne + (xTwo - xOne) * stageOne
        const yMid = yOne + (yTwo - yOne) * stageOne
        const finalX = xMid + (xThree - xMid) * stageTwo
        const finalY = yMid + (yThree - yMid) * stageTwo

        const glow = 0.22 + stageOne * 0.35 + stageTwo * 0.15
        context.globalAlpha = glow
        context.fillStyle = stageThree > 0.4 ? '#22d3ee' : '#93c5fd'
        context.beginPath()
        context.arc(finalX, finalY, node.size + stageThree * 1.5, 0, Math.PI * 2)
        context.fill()
      })

      context.globalAlpha = clamp((value - 0.72) / 0.28, 0, 0.45)
      context.strokeStyle = '#22d3ee'
      context.lineWidth = 2
      context.strokeRect(centerX - 220, centerY - 120, 440, 240)
      context.strokeRect(centerX - 180, centerY - 80, 160, 40)
      context.strokeRect(centerX + 20, centerY - 80, 160, 40)
      context.strokeRect(centerX - 180, centerY - 20, 360, 80)
      context.globalAlpha = 1
    }

    const draw = (value) => {
      const width = window.innerWidth
      const height = window.innerHeight
      drawBackdrop(width, height, value)
      drawNodes(width, height, value)
    }

    const update = () => {
      const scrollableHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      const progress = clamp(window.scrollY / scrollableHeight, 0, 1)
      draw(progress)
      rafRef.current = window.requestAnimationFrame(update)
    }

    setCanvasSize()

    if (reduceMotion) {
      draw(1)
      return undefined
    }

    rafRef.current = window.requestAnimationFrame(update)
    window.addEventListener('resize', setCanvasSize)

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-55" aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}

export default ScrollStory
