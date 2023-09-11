'use client'

import { Icon } from '../UI/Icons/Icons'
import styles from './User.module.scss'

export const User = () => {
  const userName = localStorage && localStorage.getItem('name')

  return (
    <div className={styles.user}>
      <Icon name='name' />
      <div className={styles.user__name}>{userName}</div>
    </div>
  )
}
