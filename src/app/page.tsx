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
<<<<<<< HEAD
    fieldName: 'email',
=======
    fieldName: 'email'
>>>>>>> 2284c46dd58fbb68454cc439c70cb891bb28b64e
  },
  {
    id: 2,
    type: 'password',
    placeholder: 'Пароль',
    hasLabel: false,
    iconName: 'password',
<<<<<<< HEAD
    fieldName: 'password',
=======
    fieldName: 'password'
>>>>>>> 2284c46dd58fbb68454cc439c70cb891bb28b64e
  },
  {
    id: 3,
    type: 'checkbox',
    inputId: 'rememberMe',
    hasLabel: true,
<<<<<<< HEAD
    fieldName: 'rememberMe',
  },
=======
    fieldName: 'rememberMe'
  }
>>>>>>> 2284c46dd58fbb68454cc439c70cb891bb28b64e
]

export default function Home() {
  return (
    <div className={ styles.login }>
      <div className={ `container ${ styles.login__container }` }>
        <Logo width={ 171 } height={ 70 }/>
        <FormTitle text="Вход"/>
        <Form inputs={ inputs }/>
      </div>
    </div>
  )
}
