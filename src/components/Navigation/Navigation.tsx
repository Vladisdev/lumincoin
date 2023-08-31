'use client'

import { NavItemType } from '@/types'
import Link from 'next/link'
import { useState } from 'react'
import { Icons } from '../UI/Icons/Icons'
import styles from './Navigation.module.scss'

const navItems: NavItemType[] = [
  {
    id: 1,
    text: 'Главная',
    iconName: 'home',
    linkHref: '/main',
    hasSubMenu: false,
  },
  {
    id: 2,
    text: 'Доходы & Расходы',
    iconName: 'money',
    linkHref: '/incomesAndExpences',
    hasSubMenu: false,
  },
  {
    id: 3,
    text: 'Категории',
    iconName: 'arrow',
    hasSubMenu: true,
    subMenu: [
      { id: 4, text: 'Доходы', linkHref: '/incomes' },
      { id: 5, text: 'Расходы', linkHref: '/expences' },
    ],
  },
]

export const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1)
  const [isOpened, setIsOpened] = useState<boolean>(false)

  const handleClick = (index: number) => {
    index !== 3 && setActiveIndex(index)

    if (index === 3) {
      setIsOpened(!isOpened)
    }
  }

  const renderSubMenu = (item: NavItemType) => {
    return item.hasSubMenu ? (
      <nav
        className={`${styles.nav__submenuNav} ${
          isOpened ? styles.nav__submenuNavActive : ''
        }`}
      >
        {item.subMenu?.map(item => (
          <Link
            onClick={() => handleClick(item.id)}
            className={activeIndex === item.id ? styles.nav__itemActive : ''}
            href={item.linkHref}
            key={item.id}
          >
            {item.text}
          </Link>
        ))}
      </nav>
    ) : null
  }

  return (
    <nav className={styles.nav}>
      {navItems.map(item => (
        <>
          <li
            onClick={() => handleClick(item.id)}
            key={item.id}
            className={`${styles.nav__item} ${
              activeIndex === item.id ? styles.nav__itemActive : ''
            } ${item.hasSubMenu ? styles.nav__itemSub : ''}`}
          >
            <Link
              href={item.linkHref ? item.linkHref : ''}
              className={styles.nav__itemInfo}
            >
              <Icons name={item.iconName ? item.iconName : ''} />
              <p>{item.text}</p>
            </Link>
          </li>
          <div className={styles.nav__submenu}>{renderSubMenu(item)}</div>
        </>
      ))}
    </nav>
  )
}
