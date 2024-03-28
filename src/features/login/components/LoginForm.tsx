import Joi from 'joi'
import useAppStore from '@/store/app.store'
import { Button, Container, Text, Form, FormInput } from '@/components'
import { useSupaBaseAuth } from '@/providers/SupaBaseProvider'

const validationSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6).required()
})

export const LoginForm = () => {
  const { supaBaseSignUp, supaBaseSignIn } = useSupaBaseAuth()
  const { isSignUpButtonClicked, setIsSignUpButtonClicked } = useAppStore()

  const getFormData = (data: Record<string, string | number | boolean>) => {
    const { email, password } = data as Record<string, string>
    isSignUpButtonClicked
      ? supaBaseSignIn(email, password)
      : supaBaseSignUp(email, password)
  }
  return (
    <Form
      validationSchema={validationSchema}
      initialValues={{}}
      getFormData={getFormData}
      className="flex flex-col space-y-4 w-96"
    >
      <FormInput label="Email" name="email" labelRequired />
      <FormInput label="Password" name="password" labelRequired />
      <Container className="flex justify-start items-center space-x-2">
        <Button
          btnText={`${isSignUpButtonClicked ? 'Sign Up' : 'Sign In'}`}
          type="submit"
        />
        <Container
          className="cursor-pointer"
          onClick={() => setIsSignUpButtonClicked(!isSignUpButtonClicked)}
        >
          <Text as="p">{`${
            isSignUpButtonClicked ? 'Already Registered?' : 'New User? Sign Up'
          }`}</Text>
        </Container>
      </Container>
    </Form>
  )
}
