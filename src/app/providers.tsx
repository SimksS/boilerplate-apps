'use client'
import GlobalStyles from '@/styles/global'
import React, { PropsWithChildren } from 'react'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
