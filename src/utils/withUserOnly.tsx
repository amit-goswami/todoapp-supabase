import { useSupaBaseAuth } from '@/providers/SupaBaseProvider'

interface WithCustomerOnlyProps {}

export function withUserOnly<P extends WithCustomerOnlyProps>(
  Component: React.ComponentType<P>
) {
  return function WithUserOnlyWrapper(props: P) {
    const { user } = useSupaBaseAuth()
    return user ? <Component {...props} /> : null
  }
}

export default withUserOnly
