'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { InputIcon } from '../InputIcon/InputIcon'
import { Button } from '../UI/Button/Button'
import { Input } from '../UI/Input/Input'
import styles from './Form.module.scss'

interface FormProps {
  inputs: Input[]
}

type Input = {
  id: number
  type: string
  placeholder?: string
  inputId?: string
  hasLabel: boolean
  iconName?: string
}

export const Form = ({ inputs }: FormProps) => {
  const { push } = useRouter()

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()

    push('/register')
  }

  return (
    <form className={styles.form}>
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
      <Button onClick={handleClick} text='Войти' buttonVariant='primary' />
      <div className={styles.form__link}>
        <span>Ещё нет аккаунта?</span>
        <Link href='/register'>Пройдите регистрацию</Link>
      </div>
    </form>
  )
}
