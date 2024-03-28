import { Container } from '@/components'

type TaskTypeProps = {
  text?: string
  varient: 'done' | 'pending'
}

export const TaskType = ({ text, varient }: TaskTypeProps) => {
  const getVarient = () => {
    switch (varient) {
      case 'done':
        return 'bg-green-200'
      case 'pending':
        return 'bg-red-200'
      default:
        return 'bg-gray-200'
    }
  }

  return (
    <Container className="flex items-center">
      <Container className={`w-4 h-4 rounded-full mr-2 ${getVarient()}`} />
      {text && <Container>{text}</Container>}
    </Container>
  )
}
