import Joi from 'joi'
import { Button } from '@/components'
import { Form } from '@/components/molecules/form'
import { FormInput } from '@/components/molecules/form/form-input'
import { useSupaBaseAuth } from '@/providers/SupaBaseProvider'

const validationSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6).required()
})

export const LoginForm = () => {
  const { supaBaseSignIn } = useSupaBaseAuth()

  const getFormData = (data: Record<string, string | number | boolean>) => {
    const { email, password } = data as Record<string, string>
    supaBaseSignIn(email, password)
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
      <Button btnText="Login" type="submit" />
    </Form>
  )
}
