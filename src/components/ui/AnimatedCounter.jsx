import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const numberFormatter = new Intl.NumberFormat('en-GB')

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 1400,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px -10% 0px' })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!inView) {
      return undefined
    }

    let frameId = 0
    let startTime

    const tick = (timestamp) => {
      if (!startTime) {
        startTime = timestamp
      }

      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = 1 - (1 - progress) ** 3

      setDisplayValue(Math.round(value * easedProgress))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    frameId = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [duration, inView, value])

  return (
    <span ref={ref}>
      {prefix}
      {numberFormatter.format(displayValue)}
      {suffix}
    </span>
  )
}