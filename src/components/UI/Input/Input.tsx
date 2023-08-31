'use client'

import { FC } from 'react'
import styles from './Input.module.scss'
import { UseFormRegister } from 'react-hook-form';
import { FormValues, FormValuesBig } from '@/types';

interface InputProps {
  type: string
  placeholder?: string
  id?: string
  fieldName: string
  register: UseFormRegister<FormValues | FormValuesBig>
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
