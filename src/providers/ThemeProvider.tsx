'use client'

import React from 'react'
import toast from 'react-hot-toast'
import { Loader } from '@/components'
import { THEME } from '@/shared/shared.interface'

interface IThemeContext {
  theme: string
  toggleTheme: () => void
}

const ThemeContext = React.createContext<IThemeContext>({
  theme: THEME.DARK,
  toggleTheme: () => {}
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState(THEME.DARK)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme')
    document.body.classList.add(`${theme}-theme`)
  }, [theme])

  const toggleTheme = () => {
    setLoading(true)
    setTimeout(() => {
      setTheme((prev) => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT))
      setLoading(false)
    }, 400)
    toast.success('Theme changed successfully')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {loading ? <Loader /> : children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return React.useContext(ThemeContext)
}
