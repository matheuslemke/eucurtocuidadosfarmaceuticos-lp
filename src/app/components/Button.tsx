import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles =
    'relative font-bold rounded-full transition-all duration-300 flex items-center justify-center overflow-hidden border border-yellow-300 shadow-[0_0_24px_4px_rgba(253,224,71,0.5)] mx-auto'

  const variants = {
    primary:
      'bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-black',
    secondary:
      'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white'
  }

  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  }

  return (
    <button
      className={
        `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} group`
      }
      {...props}
    >
      <span
        className="z-10 transition-all duration-300 group-hover:scale-110 group-hover:font-extrabold uppercase"
        style={{ letterSpacing: 1 }}
      >
        {children}
      </span>
      <span
        aria-hidden
        className="absolute right-0 top-0 h-full w-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 80% 50%, #fde047 40%, #fbbf24 70%, transparent 100%)',
          filter: 'blur(4px)',
          opacity: 0.95,
          transition: 'opacity 0.3s'
        }}
      />
      <span
        aria-hidden
        className="absolute inset-0 rounded-full border border-yellow-200 pointer-events-none"
        style={{ boxShadow: '0 0 32px 8px #fde04788' }}
      />
    </button>
  )
} 