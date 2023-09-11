'use client'

import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import { Icon } from '../UI/Icons/Icons'
import styles from './User.module.scss'

export const User = () => {
  const user = useSelector((state: RootState) => state.user)

  return (
    <div className={styles.user}>
      <Icon name='name' />
      <div className={styles.user__name}>{user.name}</div>
    </div>
  )
}
