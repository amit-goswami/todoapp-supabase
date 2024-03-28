import { Container } from '@/components'

export const CustomLayout = ({
  children,
  header
}: Readonly<{
  children: React.ReactNode
  header: React.ReactNode
}>) => {
  return (
    <main className="flex flex-col h-screen w-screen space-x-2">
      <Container className="flex w-full">
        <Container className="w-1/3">{header}</Container>
        <Container className="w-full">{children}</Container>
      </Container>
    </main>
  )
}
