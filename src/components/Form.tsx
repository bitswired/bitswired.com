import { InputHTMLAttributes } from 'react'
import React from 'react'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import { styled } from '@lib/stitches'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string
  className?: string
  register?: UseFormRegister<FieldValues>
  error: boolean
}

const _Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const { error, ...p } = props

    return (
      <>
        {error ? (
          <input data-error ref={ref} {...p} />
        ) : (
          <input ref={ref} {...p} />
        )}
      </>
    )
  }
)
_Input.displayName = '_Input'

export const Input = styled(_Input, {
  width: '100%',
  outline: 'none !important',
  border: '2px solid $secondary1',
  borderRadius: '$md',

  '&:focus': {
    borderColor: '$primary1',
  },

  '&[data-error=true]': {
    borderColor: '$error',
    color: '$error',
  },

  variants: {
    size: {
      sm: {
        padding: '$2',
      },
      md: {
        padding: '$3',
        fontSize: '$3',
      },
      lg: {
        padding: '$4',
        fontSize: '$5',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
