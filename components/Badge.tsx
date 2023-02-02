import React, { ReactNode } from 'react'
import clsx from 'clsx'

type Variants = 'success' | 'danger' | 'warning' | 'neutral' | 'primary'
 interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant:Variants,
  children?:ReactNode,
  className?:string
}

const variantStyle: { [key in Variants]: string } = {
      success: 'text-green-400 dark:text-green-300',
      danger: 'text-red-400 dark:text-red-300',
      warning: 'text-yellow-400 dark:text-yellow-100',
      neutral: 'text-gray-400 dark:text-gray-500',
      primary: 'text-blue-400 dark:text-blue-300',
}

const Badge = ({variant,children,className,...props}:BadgeProps) => {

return (
    <span
      className={clsx('h-5 w-5', variantStyle[variant], className)}
      {...props}
    >
      {children}
    </span>
)
}

export default Badge