import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import React from 'react'
import { useFormContext } from '..'

interface IFormSwitchProps {
  name: string
  label: string
  labelRequired?: boolean
  className?: string
  disabled?: boolean
}

export const FormSwitch: React.FC<IFormSwitchProps> = ({
  name,
  label,
  labelRequired = false,
  disabled = false,
  className = ''
}) => {
  const { values, setValues, errors } = useFormContext()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.checked })
  }

  return (
    <Container className={className}>
      <Container className="flex items-center gap-x-1">
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={Boolean(values[name])}
          onChange={handleInputChange}
          className="mr-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
           focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent
           disabled:cursor-not-allowed disabled:text-gray-400"
          disabled={disabled}
        />
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
          {labelRequired && <span className="text-red-500"> * </span>}
        </label>
        {errors[name] && (
          <Text as="p" className="text-red-500 mt-1 text-sm">
            {errors[name]}
          </Text>
        )}
      </Container>
    </Container>
  )
}
