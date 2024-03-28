import { Container, Text } from '@/components'
import { TaskType } from '../task-type'

export const TaskCards = () => {
  return (
    <Container className="flex flex-col bg-gray-500 shadow-sm rounded-md p-4 max-h-[400px] max-w-[400px] m-4">
      <Container className="flex items-center justify-between">
        <Text className="text-lg font-bol">Card title</Text>
        <TaskType varient="done" />
      </Container>
      <Text as="p" className="mt-1 text-xs font-medium uppercase text-gray-300">
        Card subtitle
      </Text>
      <Text as="p" className="mt-2 text-gray-300">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Text>
    </Container>
  )
}
