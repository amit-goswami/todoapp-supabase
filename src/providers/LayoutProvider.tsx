'use client'

import toast from 'react-hot-toast'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Loader } from '@/components'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { LAYOUT } from '@/shared/shared.interface'

interface ILayoutContext {
  selectedLayout: number
  isLoading: boolean
  changeLayout: () => void
}

const LayoutContext = React.createContext<ILayoutContext>({
  selectedLayout: 0,
  isLoading: false,
  changeLayout: () => {}
})

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const { getItem: getLayoutType, setItem: setLayoutType } = useLocalStorage(
    LAYOUT.LAYOUT
  )
  const [selectedLayout, setSelectedLayout] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  const changeLayout = async () => {
    try {
      setLoading(true)
      const newLayout =
        selectedLayout === LAYOUT.DEFAULT ? LAYOUT.CUSTOM : LAYOUT.DEFAULT
      setTimeout(() => {
        setLayoutType(newLayout)
        setSelectedLayout(newLayout)
        setTimeout(() => {
          setLoading(false)
        }, 100)
      }, 100)
      toast.success('Layout changed successfully')
    } catch (error) {
      toast.error('Failed to change layout')
    }
  }

  const checkLayoutToRender = () => {
    const layout = getLayoutType()
    if (!layout) {
      setLayoutType(LAYOUT.DEFAULT)
      setSelectedLayout(LAYOUT.DEFAULT)
    } else {
      setSelectedLayout(layout)
    }
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    checkLayoutToRender()
  }, [])

  return (
    <LayoutContext.Provider
      value={{
        selectedLayout: selectedLayout,
        isLoading: loading,
        changeLayout: changeLayout
      }}
    >
      {loading ? <Loader /> : children}
    </LayoutContext.Provider>
  )
}

export const useLayout = () => {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error('LayoutContext must be used within a LayoutProvider')
  }
  return context
}
