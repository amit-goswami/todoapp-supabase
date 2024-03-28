import useAppStore from '@/store/app.store'
import withUserOnly from '@/utils/withUserOnly'
import { Button } from '@/components'
import { useSupaBaseAuth } from '@/providers/SupaBaseProvider'

const AddTodoButton = () => {
  const { user } = useSupaBaseAuth()
  const { setIsAddTodoModalOpen } = useAppStore()

  return (
    user && (
      <Button btnText="Add Todo" onClick={() => setIsAddTodoModalOpen(true)} />
    )
  )
}

export default withUserOnly(AddTodoButton)
