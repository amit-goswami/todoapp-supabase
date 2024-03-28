import { create } from 'zustand'

type AppManagementState = {
  isAddTodoModalOpen: boolean
  setIsAddTodoModalOpen: (isOpen: boolean) => void
}

const useAppStore = create<AppManagementState>((set) => ({
  isAddTodoModalOpen: false,
  setIsAddTodoModalOpen: (isOpen) => set({ isAddTodoModalOpen: isOpen })
}))

export default useAppStore
