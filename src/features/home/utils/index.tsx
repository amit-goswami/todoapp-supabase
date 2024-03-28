export const getCardsContainerHeight = (selectedLayout: number) => {
  if (selectedLayout === 0) return 'h-[calc(100vh-160px)]'
  return 'h-screen'
}
