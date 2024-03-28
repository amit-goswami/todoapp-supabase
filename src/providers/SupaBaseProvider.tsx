'use client'

import toast from 'react-hot-toast'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Loader } from '@/components'
import { AUTH_MESSAGE, IUser } from '@/shared/shared.interface'
import { supabase } from '@/client'

interface ISupaBaseContext {
  user: IUser | null
  loading: Boolean
  supaBaseSignUp: (email: string, password: string) => void
  supaBaseSignIn: (email: string, password: string) => void
  logOut: () => void
}

const SupaBaseContext = React.createContext<ISupaBaseContext>({
  user: null,
  loading: true,
  supaBaseSignUp: () => {},
  supaBaseSignIn: () => {},
  logOut: () => {}
})

export const SupaBaseProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [loading, setLoading] = useState<Boolean>(true)

  const supaBaseSignUp = async (email: string, password: string) => {
    try {
      const { error, data } = await supabase.auth.signUp({
        email,
        password
      })
      if (data.user?.email) {
        setUser({
          uid: data.user.id,
          email: data.user.email
        })
      }
      if (error) {
        throw error
      }
      toast.success(AUTH_MESSAGE.EMAIL_SENT)
    } catch (error) {
      toast.error(AUTH_MESSAGE.USER_LOGIN_FAILED)
    }
  }

  const supaBaseSignIn = async (email: string, password: string) => {
    try {
      const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (data?.user?.email) {
        setUser({
          uid: data.user.id,
          email: data.user.email
        })
      }
      if (error) {
        throw error
      }
      toast.success(AUTH_MESSAGE.USER_LOGGED_IN)
    } catch (error) {
      toast.error(AUTH_MESSAGE.USER_LOGIN_FAILED)
    }
  }

  const logOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      throw error
    }
    setUser(null)
    toast.success(AUTH_MESSAGE.USER_LOGGED_OUT)
  }

  const checkIsUserLoggedIn = () =>
    supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user?.email) {
        setUser({
          uid: session.user.id,
          email: session.user.email
        })
      }
      setLoading(false)
    })

  useEffect(() => {
    setLoading(false)
    checkIsUserLoggedIn()
  }, [user])

  return (
    <SupaBaseContext.Provider
      value={{ user, loading, supaBaseSignUp, supaBaseSignIn, logOut }}
    >
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
