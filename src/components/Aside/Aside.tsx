import { Balance } from '../Balance/Balance'
import { Navigation } from '../Navigation/Navigation'
import { Logo } from '../UI/Logo/Logo'
import { User } from '../User/User'
import styles from './Aside.module.scss'

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside__container}>
        <div className={styles.aside__logo}>
          <Logo width={98} height={40} />
        </div>
        <Navigation />
        <Balance />
        <User />
      </div>
    </aside>
  )
}
