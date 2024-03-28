import withUserOnly from '@/utils/withUserOnly'
import { Button } from '@/components'
import { useSupaBaseAuth } from '@/providers/SupaBaseProvider'

const AddTodoButton = () => {
  const { user } = useSupaBaseAuth()
  const addTodo = () => {}

  return user && <Button btnText="Add Todo" onClick={() => addTodo()} />
}

export default withUserOnly(AddTodoButton)
