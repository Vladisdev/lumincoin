import Image from 'next/image'
import { FC } from 'react'
import styles from './Logo.module.scss'

interface LogoProps {
  width: number
  height: number
}

export const Logo: FC<LogoProps> = ({ width, height }) => {
  return (
    <div className={styles.logo}>
      <Image
        src='/img/logo.png'
        alt='Lumincoin'
        width={width}
        height={height}
        quality={100}
      />
    </div>
  )
}
