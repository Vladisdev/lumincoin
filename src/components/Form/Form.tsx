'use client'

import { InputType } from '@/types'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FormEvent } from 'react'
import { Button } from '../UI/Button/Button'
import { Input } from '../UI/Input/Input'
import { InputIcon } from '../UI/InputIcons/InputIcons'
import styles from './Form.module.scss'

interface FormProps {
  inputs: InputType[]
}

export const Form = ({ inputs }: FormProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    router.push('/main')
  }

  const currentLinkContent = () => {
    return pathname === '/' ? (
      <>
        <span>Ещё нет аккаунта?</span>
        <Link href='/register'>Пройдите регистрацию</Link>
      </>
    ) : (
      <>
        <span>Уже есть аккаунт?</span>
        <Link href='/'>Войдите в систему</Link>
      </>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {inputs.map(input => (
        <div key={input.id} className={styles.form__item}>
          <Input
            type={input.type}
            placeholder={input.placeholder}
            id={input.inputId}
          />
          {input.hasLabel && (
            <label className={styles.form__itemLabel} htmlFor={input.inputId}>
              Запомнить меня
            </label>
          )}
          <InputIcon name={input.iconName as string} />
        </div>
      ))}
      <Button text='Войти' buttonVariant='primary' />
      <div className={styles.form__link}>{currentLinkContent()}</div>
    </form>
  )
}
