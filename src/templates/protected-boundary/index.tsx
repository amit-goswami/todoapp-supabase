'use client'

import React from 'react'
import { LoginContainer } from '@/features/login'
import { useSupaBaseAuth } from '@/providers/SupaBaseProvider'

export const ProtectedBoundary = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const { user } = useSupaBaseAuth()

  if (!user) {
    return <LoginContainer />
  }

  return <React.Fragment>{children}</React.Fragment>
}
