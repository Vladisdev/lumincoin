import { ArrowIcon } from '../ArrowIcon/ArrowIcon'
import { HomeIcon } from '../HomeIcon/HomeIcon'
import { MailIcon } from '../MailIcon/MailIcon'
import { MoneyIcon } from '../MoneyIcon/MoneyIcon'
import { NameIcon } from '../NameIcon/NameIcon'
import { PasswordIcon } from '../PasswordIcon/PasswordIcon'

export const Icon = ({ name }: { name: string }) => {
  return {
    mail: <MailIcon />,
    password: <PasswordIcon />,
    name: <NameIcon />,
    home: <HomeIcon />,
    money: <MoneyIcon />,
    arrow: <ArrowIcon />,
  }[name]
}
