'use client'

import React from "react"

import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface ProgressContextType {
  progress: number
  setProgress: (value: number) => void
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined)

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    // Start progress on navigation
    const handleRouteChange = () => {
      setProgress(10)
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return 90
          return prev + Math.random() * 30
        })
      }, 200)

      return () => clearInterval(interval)
    }

    // Complete progress
    const handleRouteComplete = () => {
      setProgress(100)
      setTimeout(() => setProgress(0), 500)
    }

    // Listen to router events
    const originalPush = router.push
    router.push = function (...args: any[]) {
      handleRouteChange()
      const result = originalPush.apply(router, args)
      setTimeout(handleRouteComplete, 100)
      return result
    }

    return () => {
      router.push = originalPush
    }
  }, [router])

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const context = useContext(ProgressContext)
  if (context === undefined) {
    throw new Error('useProgress must be used within ProgressProvider')
  }
  return context
}
