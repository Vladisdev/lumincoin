import styles from './FormTitle.module.scss'

export const FormTitle = ({ text }: { text: string }) => {
  return <h1 className={styles.title}>{text}</h1>
}
