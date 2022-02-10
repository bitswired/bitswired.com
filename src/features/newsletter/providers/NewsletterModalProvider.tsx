import { useBooleanToggle } from '@mantine/hooks'
import React, { SetStateAction } from 'react'

interface ContextState {
  isOpen: boolean
  toggle: (value?: SetStateAction<boolean> | undefined) => void
}

export const NewsletterModalContext = React.createContext({} as ContextState)

interface NewsletterModalProviderProps {
  children: JSX.Element
}

export function NewsletterModalProvider({
  children,
}: NewsletterModalProviderProps) {
  const [isOpen, toggle] = useBooleanToggle(false)

  return (
    <NewsletterModalContext.Provider value={{ isOpen, toggle }}>
      {children}
    </NewsletterModalContext.Provider>
  )
}
