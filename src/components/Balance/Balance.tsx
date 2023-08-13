import styles from './Balance.module.scss'

export const Balance = () => {
  return (
    <div className={styles.balance}>
      <span className={styles.balance__text}>Баланс:</span>
      <span className={styles.balance__value}>500$</span>
    </div>
  )
}
