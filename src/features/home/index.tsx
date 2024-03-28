'use client'

import { Container, Modal } from '@/components'
import { TaskCards } from './task-cards'
import { TaskType } from './task-type'
import { useLayout } from '@/providers/LayoutProvider'
import { getCardsContainerHeight } from './utils'
import useAppStore from '@/store/app.store'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

export const HomeContainer = () => {
  const { selectedLayout } = useLayout()
  const { isAddTodoModalOpen, setIsAddTodoModalOpen } = useAppStore()

  return (
    <Container className="p-4">
      <Container className="flex space-x-2">
        <TaskType text="Complete" varient="done" />
        <TaskType text="In Complete" varient="pending" />
      </Container>
      <Container
        className={`flex flex-wrap justify-start items-center py-4 overflow-scroll ${getCardsContainerHeight(
          selectedLayout
        )}`}
      >
        {cards.map((card, index) => (
          <TaskCards key={index} />
        ))}
      </Container>
      <Modal
        isOpen={isAddTodoModalOpen}
        title="Add Todo"
        content={<div>Test Content</div>}
        onClose={() => setIsAddTodoModalOpen(false)}
      />
    </Container>
  )
}
