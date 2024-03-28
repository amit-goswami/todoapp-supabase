import React, {
  useState,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  useEffect
} from 'react'
import { useFormContext } from '..'
import { Text } from '@/components/atoms/text'
import { Container } from '@/components/atoms/container'

interface PinInputHorizonProps {
  length?: number
  name: string
}

export const PinInputHorizon: React.FC<PinInputHorizonProps> = ({
  length = 4,
  name
}) => {
  const { values, setValues, errors } = useFormContext()

  const [pin, setPin] = useState<string[]>(Array(length).fill(''))
  const inputRefs = Array(length)
    .fill(0)
    .map(() => useRef<HTMLInputElement>(null))

  useEffect(() => {
    setValues({ ...values, [name]: pin.join('') })
  }, [pin])

  const handleChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target
    if (value.length === 1 && /^[0-9]$/.test(value)) {
      const newPin = [...pin]
      newPin[index] = value
      setPin(newPin)
      if (index < length - 1 && inputRefs[index + 1].current) {
        inputRefs[index + 1].current?.focus()
      }
    } else if (value.length === 0) {
      const newPin = [...pin]
      newPin[index] = ''
      setPin(newPin)
      if (index > 0 && inputRefs[index - 1].current) {
        inputRefs[index - 1].current?.focus()
      }
    }
  }

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Backspace' && index > 0 && !pin[index]) {
      inputRefs[index - 1].current?.focus()
    }
  }

  return (
    <React.Fragment>
      <Container className="flex items-center justify-center gap-3">
        {pin.map((value, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-[#f68a1e] focus:ring-2 focus:ring-indigo-100"
          />
        ))}
      </Container>
      {errors[name] && (
        <Text as="p" className="text-red-500 mt-1 text-sm">
          {errors[name]}
        </Text>
      )}
    </React.Fragment>
  )
}
