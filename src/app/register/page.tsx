import { Form } from '@/components/Form/Form'
import { FormTitle } from '@/components/UI/FormTitle/FormTitle'
import { Logo } from '@/components/UI/Logo/Logo'
import { InputType } from '@/types'
import styles from './page.module.scss'

const inputs: InputType[] = [
  {
    id: 1,
    type: 'text',
    placeholder: 'ФИО',
    hasLabel: false,
    iconName: 'name',
  },
  {
    id: 2,
    type: 'email',
    placeholder: 'Электронная почта',
    hasLabel: false,
    iconName: 'mail',
  },
  {
    id: 3,
    type: 'password',
    placeholder: 'Пароль',
    hasLabel: false,
    iconName: 'password',
  },
  {
    id: 4,
    type: 'password',
    placeholder: 'Подтверждение пароля',
    hasLabel: false,
    iconName: 'password',
  },
]

const page = () => {
  return (
    <div className={styles.register}>
      <div className={`container ${styles.register__container}`}>
        <Logo width={171} height={70} />
        <FormTitle text='Создайте аккаунт' />
        <Form inputs={inputs} />
      </div>
    </div>
  )
}

export default page
