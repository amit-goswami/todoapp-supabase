import React from 'react'
import { Button, Container } from '@/components'
import { useLayout } from '@/providers/LayoutProvider'
import { useTheme } from '@/providers/ThemeProvider'
import { LAYOUT, THEME } from '@/shared/shared.interface'
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid'

export const ThemeButton = () => {
  const { selectedLayout } = useLayout()
  const { theme, toggleTheme } = useTheme()

  return (
    <React.Fragment>
      {selectedLayout === LAYOUT.DEFAULT ? (
        <Container
          className="h-6 w-6 cursor-pointer"
          onClick={() => toggleTheme()}
        >
          {theme === THEME.LIGHT ? <SunIcon /> : <MoonIcon />}
        </Container>
      ) : (
        <Button btnText="Toggle Theme" onClick={() => toggleTheme()} />
      )}
    </React.Fragment>
  )
}
