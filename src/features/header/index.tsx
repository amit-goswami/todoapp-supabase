import LoginButton from './login-button'
import AddTodoButton from './add-todo-button'
import { Button, Container, Text } from '@/components'
import { useLayout } from '@/providers/LayoutProvider'
import { getContainerCSS, getLayoutCSS } from './utils'
import { ThemeButton } from './theme-button'

export const HeaderContainer = () => {
  const { selectedLayout, changeLayout } = useLayout()

  return (
    <header>
      <nav
        className={`flex ${getLayoutCSS(selectedLayout)}`}
        aria-label="Global"
      >
        <Text as="p">Todo App</Text>
        <Container className={`flex ${getContainerCSS(selectedLayout)}`}>
          <Button btnText="Switch Layout" onClick={() => changeLayout()} />
          <AddTodoButton />
          <LoginButton />
          <ThemeButton />
        </Container>
      </nav>
    </header>
  )
}
