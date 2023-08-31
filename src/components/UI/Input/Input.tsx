'use client'

import { FC } from 'react'
import styles from './Input.module.scss'
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  type: string
  placeholder?: string
  id?: string
  fieldName: string
  register: UseFormRegister<FieldValues>
}

export const Input: FC<InputProps> = ({ type, placeholder, id, fieldName, register }) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      id={id}
    />
  )
}
