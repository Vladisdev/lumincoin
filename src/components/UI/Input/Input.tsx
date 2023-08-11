import { FC } from 'react'
import styles from './Input.module.scss'

interface InputProps {
  type: string
  placeholder?: string
  id?: string
}

export const Input: FC<InputProps> = ({ type, placeholder, id }) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      id={id}
    />
  )
}
