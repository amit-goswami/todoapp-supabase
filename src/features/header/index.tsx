import useAppStore from '@/store/app.store'
import { Button, Text } from '@/components'

export const HeaderContainer = () => {
  const { selectedLayout } = useAppStore()
  const { setSelectedLayout } = useAppStore()

  const getLayoutCSS = () => {
    if (selectedLayout === 0) return `flex-row items-center justify-between p-4`
    return `flex-col items-start justify-between flex-1 h-screen p-4 border-r`
  }

  const toggleLayout = () => {
    const layout = selectedLayout === 0 ? 1 : 0
    setSelectedLayout(layout)
  }

  return (
    <header>
      <nav className={`flex ${getLayoutCSS()}`} aria-label="Global">
        <Text as="p">Todo App</Text>
        <Button btnText="Switch Layout" onClick={() => toggleLayout()} />
      </nav>
    </header>
  )
}
