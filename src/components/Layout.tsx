'use client'

import { AppProgressBar } from 'next-nprogress-bar'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AppProgressBar height='4px' color='#0D6EFD' shallowRouting />
      {children}
    </div>
  )
}
