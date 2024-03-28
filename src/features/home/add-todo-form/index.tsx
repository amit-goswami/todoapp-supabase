import Joi from 'joi'
import { Button, Container, Form, FormInput, FormSwitch } from '@/components'
import Logger from '@/libs/logger.util'
import toast from 'react-hot-toast'
import { supabase } from '@/client'

const validationSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  isCompleted: Joi.boolean().default(false)
})

export const AddTodoForm = () => {
  const getFormData = async (
    data: Record<string, string | number | boolean>
  ) => {
    const user = await supabase.auth.getUser()
    try {
      await supabase.from('todos').insert([
        {
          title: data.title,
          description: data.description,
          isComplete: data.isCompleted,
          user_id: user.data.user?.id
        }
      ])
    } catch (error) {
      toast.error('Failed to create todo')
      Logger.error(error as string)
    }
  }
  return (
    <Form
      validationSchema={validationSchema}
      initialValues={{}}
      getFormData={getFormData}
      className="flex flex-col space-y-4 w-96"
    >
      <FormInput label="Title" name="title" labelRequired />
      <FormInput label="Description" name="description" labelRequired />
      <FormSwitch label="Is Completed" name="isCompleted" />
      <Container className="flex justify-start items-center space-x-2">
        <Button btnText="Create" type="submit" />
      </Container>
    </Form>
  )
}
