import React from 'react'
import { useFormContext } from '..'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

interface IFormRadioInputProps {
  name: string
  label: string
  value: string
  labelRequired?: boolean
  disabled?: boolean
  className?: string
}

export const FormRadioInput: React.FC<IFormRadioInputProps> = ({
  name,
  label,
  value,
  labelRequired = false,
  disabled = false,
  className = ''
}) => {
  const { values, setValues, errors } = useFormContext()

  const handleRadioChange = () => {
    setValues({ ...values, [name]: value })
  }

  return (
    <Container className={className}>
      <Container className="flex items-center gap-x-3">
        <input
          id={`${name}-${value}`}
          name={name}
          type="radio"
          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 disabled:cursor-not-allowed"
          value={value}
          checked={values[name] === value}
          onChange={handleRadioChange}
          disabled={disabled}
        />
        <label
          htmlFor={`${name}-${value}`}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
          {labelRequired && <span className="text-red-500"> * </span>}
        </label>
      </Container>
      {errors[name] && (
        <Text as="p" className="text-red-500 mt-1 text-sm">
          {errors[name]}
        </Text>
      )}
    </Container>
  )
}
