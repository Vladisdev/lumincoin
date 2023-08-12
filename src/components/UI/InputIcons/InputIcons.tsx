import { MailIcon } from '../MailIcon/MailIcon'
import { NameIcon } from '../NameIcon/NameIcon'
import { PasswordIcon } from '../PasswordIcon/PasswordIcon'

export const InputIcon = ({ name }: { name: string }) => {
  return {
    mail: <MailIcon />,
    password: <PasswordIcon />,
    name: <NameIcon />,
  }[name]
}
