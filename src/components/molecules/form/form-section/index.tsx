import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

type FormSectionProps = {
  children: React.ReactNode
  title: string
}

export const FormSection = ({ children, title }: FormSectionProps) => {
  return (
    <Container className="pb-6">
      <Text as="h2" className="text-base font-semibold leading-7 text-gray-900">
        {title}
      </Text>
      {children}
    </Container>
  )
}
