import { Form } from '@/components/Form/Form'
import { FormTitle } from '@/components/UI/FormTitle/FormTitle'
import { Logo } from '@/components/UI/Logo/Logo'
import { InputType } from '@/types'
import styles from './page.module.scss'

const inputs: InputType[] = [
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
        <Logo width={171} height={70} />
        <FormTitle text='Вход' />
        <Form inputs={inputs} />
      </div>
    </div>
  )
}
