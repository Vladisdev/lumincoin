'use client'

import store from '@/redux/store'
import { AppProgressBar } from 'next-nprogress-bar'
import React from 'react'
import { Provider } from 'react-redux'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AppProgressBar height='4px' color='#0D6EFD' shallowRouting />
      {children}
    </Provider>
  )
}
