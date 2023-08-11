'use client'

import { FC } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  text: string
  buttonVariant: 'primary' | 'error' | 'success'
  onClick: (e: MouseEvent) => void
}

const variants = {
  primary: styles.primary,
  error: styles.error,
  success: styles.success,
}

export const Button: FC<ButtonProps> = ({ text, buttonVariant, onClick }) => {
  return (
    <button
      onClick={() => onClick}
      className={`${styles.btn} ${variants[buttonVariant]}`}
    >
      {text}
    </button>
  )
}
