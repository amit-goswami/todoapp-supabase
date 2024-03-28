'use client'

import useAppStore from '@/store/app.store'
import { DefaultLayout } from './default-layout'
import { CustomLayout } from './custom-layout'
import { HeaderContainer } from '@/features/header'

export const Layouts = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const { selectedLayout } = useAppStore()

  const getSelectedLayout = (selectedLayout: number) => {
    switch (selectedLayout) {
      case 0:
        return (
          <DefaultLayout children={children} header={<HeaderContainer />} />
        )
      case 1:
        return <CustomLayout children={children} header={<HeaderContainer />} />
      default:
        return (
          <DefaultLayout children={children} header={<HeaderContainer />} />
        )
    }
  }

  return getSelectedLayout(selectedLayout)
}
