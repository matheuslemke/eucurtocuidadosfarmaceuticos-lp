import { ReactNode } from 'react'

type GradientTextProps = {
  children: ReactNode
  className?: string
  bold?: boolean
}

export function GradientText({ 
  children, 
  className = '',
  bold = false
}: GradientTextProps) {
  const baseStyles = 'inline-block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent'
  const boldStyles = bold ? 'font-bold' : ''

  return (
    <span className={`${baseStyles} ${boldStyles} ${className}`}>
      {children}
    </span>
  )
} 