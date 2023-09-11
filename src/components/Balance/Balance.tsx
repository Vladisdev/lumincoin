'use client'

import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'
import styles from './Balance.module.scss'

export const Balance = () => {
  const user = useSelector((state: RootState) => state.user)

  return (
    <div className={styles.balance}>
      <span className={styles.balance__text}>Баланс:</span>
      <span className={styles.balance__value}>{user.balance}$</span>
    </div>
  )
}
