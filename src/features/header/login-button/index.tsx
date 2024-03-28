import withUserOnly from '@/utils/withUserOnly'
import { Button } from '@/components'
import { useSupaBaseAuth } from '@/providers/SupaBaseProvider'

const LogoutButton = () => {
  const { user, logOut } = useSupaBaseAuth()

  return user && <Button btnText="LogOut" onClick={() => logOut()} />
}

export default withUserOnly(LogoutButton)
