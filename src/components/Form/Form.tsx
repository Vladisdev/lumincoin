'use client'

import { createUser } from '@/redux/slices/userSlice'
import { FormValues, FormValuesBig, InputType } from '@/types'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
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
  const dispatch = useDispatch()
  const isMainPage = pathname === '/'
  const { register, handleSubmit, reset } = useForm<FormValues | FormValuesBig>(
    {
      defaultValues: {},
    }
  )

  useEffect(() => {
    const rememberMeValue = localStorage.getItem('rememberMe')
    if (isMainPage && rememberMeValue === 'true') {
      return router.push('/main')
    }

    if (isMainPage && !localStorage.getItem('password')) {
      router.push('/register')
    }
  }, [isMainPage, router])

  const onSubmit: SubmitHandler<FormValues | FormValuesBig> = data => {
    if ('name' in data) {
      const { password, repPassword, name, email, rememberMe } = data

      if (password !== repPassword) {
        return alert('Пароли не совпадают\nПроверьте введенные вами значения')
      }

      localStorage.setItem('email', email)
      localStorage.setItem('password', password)
      dispatch(createUser({ name, email }))

      reset()

      return router.push('/main')
    }

    const storageEmail = localStorage.getItem('email')
    const storagePassword = localStorage.getItem('password')

    if (data.email === storageEmail && data.password === storagePassword) {
      localStorage.setItem('rememberMe', String(data.rememberMe))
      reset()
      router.push('/main')
    } else {
      alert('Проверьте введенные вами значения')
    }
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
