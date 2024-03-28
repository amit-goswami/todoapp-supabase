import { create } from 'zustand'

type AppManagementState = {
  isAddTodoModalOpen: boolean
  isSignUpButtonClicked: boolean
  setIsAddTodoModalOpen: (isOpen: boolean) => void
  setIsSignUpButtonClicked: (isClicked: boolean) => void
}

const useAppStore = create<AppManagementState>((set) => ({
  isAddTodoModalOpen: false,
  isSignUpButtonClicked: false,
  setIsAddTodoModalOpen: (isOpen) => set({ isAddTodoModalOpen: isOpen }),
  setIsSignUpButtonClicked: (isClicked) =>
    set({ isSignUpButtonClicked: isClicked })
}))

export default useAppStore
