'use client'

import { useProgress } from './progress-provider'

export function ProgressBar() {
  const { progress } = useProgress()

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#7A1E1E] to-cyan-500 transition-all duration-300 ease-out z-50"
      style={{
        width: `${progress}%`,
        opacity: progress > 0 ? 1 : 0,
        boxShadow: progress > 0 ? '0 0 10px rgba(122, 30, 30, 0.5)' : 'none',
      }}
    />
  )
}
