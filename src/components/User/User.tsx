import React from 'react'
import styles from './User.module.scss'
import { Icons } from '../UI/Icons/Icons'

export const User = () => {
  return (
    <div className={styles.user}>
      <Icons name='name' />
      <div className={styles.user__name}>Test Name</div>
    </div>
  )
}
