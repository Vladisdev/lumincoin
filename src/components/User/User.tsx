import React from 'react'
import styles from './User.module.scss'
import { Icon } from '../UI/Icons/Icons'

export const User = () => {
  return (
    <div className={styles.user}>
      <Icon name='name' />
      <div className={styles.user__name}>Test Name</div>
    </div>
  )
}
