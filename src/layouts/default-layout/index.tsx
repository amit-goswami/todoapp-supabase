import { Container } from '@/components'

export const DefaultLayout = ({
  children,
  header
}: Readonly<{
  children: React.ReactNode
  header: React.ReactNode
}>) => {
  return (
    <main className="flex flex-col h-screen w-screen space-y-2">
      <Container>{header}</Container>
      <Container>{children}</Container>
    </main>
  )
}
