'use client'

import { FormValues, FormValuesBig, InputType } from '@/types'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '../UI/Button/Button'
import { Icon } from '../UI/Icons/Icons'
import { Input } from '../UI/Input/Input'
import styles from './Form.module.scss'

interface FormProps {
  inputs: InputType[]
}

export const Form = ({ inputs }: FormProps) => {
  const pathname = usePathname()
  const router = useRouter()
  const isMainPage = pathname === '/'

  const { register, handleSubmit, reset } = useForm<FormValues | FormValuesBig>(
    {
      defaultValues: {},
    }
  )

  const onSubmit: SubmitHandler<FieldValues> = data => {
    console.log(data)
    reset()
  }

  const currentLinkContent = () => {
    return isMainPage ? (
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
    const { type, placeholder, inputId, hasLabel, iconName, fieldName } = input

    return (
      <>
        <Input
          register={register}
          fieldName={fieldName as 'name' | 'email' | 'password' | 'repPassword'}
          type={type}
          placeholder={placeholder}
          id={inputId}
        />
        {hasLabel && (
          <label className={styles.form__itemLabel} htmlFor={inputId}>
            Запомнить меня
          </label>
        )}
        <Icon name={iconName as string} />
      </>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {inputs.map(input => (
        <div key={input.id} className={styles.form__item}>
          {renderInputs(input)}
        </div>
      ))}
      <Button text='Войти' buttonVariant='primary' />
      <div className={styles.form__link}>{currentLinkContent()}</div>
    </form>
  )
}
