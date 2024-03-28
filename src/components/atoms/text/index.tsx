import React from 'react'

type TextProps = {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export const Text: React.FC<TextProps> = ({
  children,
  className,
  as = 'span'
}) => {
  return React.createElement(as, { className }, children)
}
