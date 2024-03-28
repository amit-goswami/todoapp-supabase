'use client'

import toast from 'react-hot-toast'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Loader } from '@/components'
import { AUTH_MESSAGE, IUser } from '@/shared/shared.interface'
import { createClient } from '@supabase/supabase-js'

interface ISupaBaseContext {
  user: IUser | null
  loading: Boolean
  supaBaseSignIn: () => void
  logOut: () => void
}

const SupaBaseContext = React.createContext<ISupaBaseContext>({
  user: null,
  loading: true,
  supaBaseSignIn: () => {},
  logOut: () => {}
})

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey)

export const SupaBaseProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [loading, setLoading] = useState<Boolean>(true)

  const supaBaseSignIn = async () => {
    setUser(user)
  }

  const logOut = async () => {
    setUser(null)
    toast.success(AUTH_MESSAGE.USER_LOGGED_OUT)
  }

  const checkIsUserLoggedIn = () => {}

  useEffect(() => {
    setLoading(false)
    return () => checkIsUserLoggedIn()
  }, [user])

  return (
    <SupaBaseContext.Provider value={{ user, loading, supaBaseSignIn, logOut }}>
      {loading ? <Loader /> : children}
    </SupaBaseContext.Provider>
  )
}

export const useSupaBaseAuth = () => {
  const context = useContext(SupaBaseContext)
  if (!context) {
    throw new Error(
      'useSupaBaseAuth must be used within an SupaBaseAuthProvider'
    )
  }
  return context
}
