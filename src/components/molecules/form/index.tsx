import Joi from 'joi'
import React, { ReactNode, useContext, useEffect, useState } from 'react'

interface IFormProps {
  children: ReactNode
  className?: string
  validationSchema: Joi.ObjectSchema
  initialValues: Record<string, string | number | boolean>
  id?: string
  getFormDetails?: (data: Record<string, string | number | boolean>) => void
  getFormData: (data: Record<string, string | number | boolean>) => void
}

interface IFormContext {
  values: Record<string, any>
  errors: Record<string, string>
  setValues: React.Dispatch<
    React.SetStateAction<Record<string, string | number | boolean>>
  >
}

export const FormContext = React.createContext<IFormContext | undefined>(
  undefined
)

export const useFormContext = (): IFormContext => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context
}

export const Form = ({ ...props }: IFormProps) => {
  const [values, setValues] = useState(props.initialValues)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (props.getFormDetails) {
      props.getFormDetails(values)
    }
  }, [values])

  const handleValidation = (event: React.FormEvent) => {
    event.preventDefault()
    const result = props.validationSchema.validate(values, {
      abortEarly: false
    })
    if (result.error) {
      const error: Record<string, string> = {}
      result.error.details.forEach((data) => {
        error[data.path[0]] = data.message
      })
      setErrors(error)
    } else {
      setErrors({})
      props.getFormData(values)
    }
  }

  return (
    <FormContext.Provider value={{ values, setValues, errors }}>
      <form
        className={props.className}
        onSubmit={handleValidation}
        id={props.id}
      >
        {props.children}
      </form>
    </FormContext.Provider>
  )
}
