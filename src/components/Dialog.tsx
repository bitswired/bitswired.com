import { blackA, mauve } from '@radix-ui/colors'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import React from 'react'
import { styled, keyframes } from '@lib/stitches'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: 'white',
  overflow: 'hidden',
  borderRadius: '$md',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '1000px',
  maxHeight: '85vh',
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
})

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  color: mauve.mauve12,
  fontSize: '$6',
})

const StyledDescription = styled(DialogPrimitive.Description, {
  margin: '10px 0 20px',
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
})

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  DialogPrimitive.DialogContentProps
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <StyledOverlay />
    <StyledContent {...props} ref={forwardedRef}>
      {/* <DialogPrimitive.Close asChild>
          <Icon icon={<FaTimes />} />
        </DialogPrimitive.Close> */}
      {children}
    </StyledContent>
  </DialogPrimitive.Portal>
))
DialogContent.displayName = 'DialogContent'

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogTitle = StyledTitle
export const DialogDescription = StyledDescription
