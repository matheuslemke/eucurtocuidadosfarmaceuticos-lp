import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  variant?: 'default' | 'feature' | 'testimonial'
  className?: string
}

export function Card({ 
  children, 
  variant = 'default',
  className = ''
}: CardProps) {
  const baseStyles = 'p-6 rounded-lg border border-yellow-400/20'
  
  const variants = {
    default: 'bg-black',
    feature: 'bg-black',
    testimonial: 'bg-gray-900'
  }

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
} 