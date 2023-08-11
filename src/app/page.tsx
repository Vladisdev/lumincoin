import { Form } from '@/components/Form/Form'
import { FormTitle } from '@/components/UI/FormTitle/FormTitle'
import Image from 'next/image'
import styles from './page.module.scss'

const inputs = [
  {
    id: 1,
    type: 'email',
    placeholder: 'Электронная почта',
    hasLabel: false,
    iconName: 'mail',
  },
  {
    id: 2,
    type: 'password',
    placeholder: 'Пароль',
    hasLabel: false,
    iconName: 'password',
  },
  {
    id: 3,
    type: 'checkbox',
    inputId: 'rememberMe',
    hasLabel: true,
  },
]

export default function Home() {
  return (
    <div className={styles.login}>
      <div className={`container ${styles.login__container}`}>
        <div className={styles.login__logo}>
          <Image src='/img/logo.png' alt='Lumincoin' fill quality={100} />
        </div>
        <FormTitle text='Вход' />
        <Form inputs={inputs} />
      </div>
    </div>
  )
}
