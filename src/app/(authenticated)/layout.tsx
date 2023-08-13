import { Aside } from '@/components/Aside/Aside'
import { ReactNode } from 'react'
import styles from './layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Aside />
      {children}
    </div>
  )
}

export default layout
