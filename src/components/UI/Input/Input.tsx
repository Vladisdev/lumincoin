'use client'

import { FormValues, FormValuesBig } from '@/types'
import { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'
import styles from './Input.module.scss'

interface InputProps {
  type: string
  placeholder?: string
  id?: string
  fieldName: 'name' | 'email' | 'password' | 'repPassword'
  register: UseFormRegister<FormValues | FormValuesBig>
}

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  id,
  fieldName,
  register,
}) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      id={id}
      {...register(fieldName)}
      required={type !== 'checkbox' ? true : false}
    />
  )
}
