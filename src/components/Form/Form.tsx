'use client'

import { InputType } from '@/types'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FormEvent } from 'react'
import { Button } from '../UI/Button/Button'
import { Icon } from '../UI/Icons/Icons'
import { Input } from '../UI/Input/Input'
import styles from './Form.module.scss'

interface FormProps {
  inputs: InputType[]
}

export const Form = ({ inputs }: FormProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    router.push('main')
  }

  const currentLinkContent = () => {
    return pathname === '/' ? (
      <>
        <span>Ещё нет аккаунта?</span>
        <Link href='register'>Пройдите регистрацию</Link>
      </>
    ) : (
      <>
        <span>Уже есть аккаунт?</span>
        <Link href='/'>Войдите в систему</Link>
      </>
    )
  }

  const renderInputs = (input: InputType) => {
    const { type, placeholder, inputId, hasLabel, iconName } = input

    return <>
      <Input type={type} placeholder={placeholder} id={inputId}/>
      {hasLabel && <label className={styles.form__itemLabel} htmlFor={inputId}>Запомнить меня</label>}
      <Icon name={iconName as string}/>
    </>
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {inputs.map(input => (
        <div key={input.id} className={styles.form__item}>
          {renderInputs(input)}
        </div>
      ))}
      <Button text='Войти' buttonVariant='primary'/>
      <div className={styles.form__link}>{currentLinkContent()}</div>
    </form>
  )
}
