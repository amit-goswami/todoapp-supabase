import { create } from 'zustand'

type AppManagementState = {
  selectedLayout: number
  setSelectedLayout: (layout: number) => void
}

const useAppStore = create<AppManagementState>((set) => ({
  selectedLayout: 0,
  setSelectedLayout: (layout: number) => set({ selectedLayout: layout })
}))

export default useAppStore
