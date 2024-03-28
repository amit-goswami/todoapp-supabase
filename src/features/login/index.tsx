import { Container } from '@/components'
import { LoginForm } from './components/LoginForm'

export const LoginContainer = () => {
  return (
    <Container className="flex items-center justify-center w-full h-full">
      <LoginForm />
    </Container>
  )
}
