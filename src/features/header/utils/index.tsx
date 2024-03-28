export const getLayoutCSS = (selectedLayout: number) => {
  if (selectedLayout === 0)
    return `flex-row items-center justify-between p-4 m-2 rounded-lg shadow-md`
  return `flex-col items-start justify-between flex-1 h-screen p-4 border-r`
}

export const getContainerCSS = (selectedLayout: number) => {
  if (selectedLayout === 0) return `flex items-center justify-center space-x-2`
  return `flex flex-col items-start justify-center space-y-4`
}
