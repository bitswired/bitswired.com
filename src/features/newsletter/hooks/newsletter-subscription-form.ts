import HCaptcha from '@hcaptcha/react-hcaptcha'
import React from 'react'
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { newsletterSubscribe } from '@features/data'

import { useTracker } from './tracker'

interface MutationParams {
  email: string
  token: string
}

export interface UseNewsletterSubscriptionFormValues {
  register: UseFormRegister<FieldValues>
  onError: (err: string) => void
  onExpire: () => void
  onVerify: (token: string) => void
  captchaRef: React.RefObject<HCaptcha>
  handleSubmit: () => void
  loading: boolean
  errors: { [x: string]: Record<'message', string> }
}

export function useNewsletterSubscriptionForm(): UseNewsletterSubscriptionFormValues {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()
  const captchaRef = React.useRef<HCaptcha>(null)
  const tracker = useTracker()
  const mutation = useMutation(
    ({ token, email }: MutationParams) => {
      return newsletterSubscribe(email, token)
    },
    {
      onSuccess: (_, variables) => {
        console.log(variables)
        tracker.trackNewsletterSubscriptionSuccess(variables)
      },
      onError: () => {
        captchaRef.current && captchaRef.current.resetCaptcha()
      },
    }
  )

  const submit = () => {
    captchaRef.current && captchaRef.current.execute()
  }

  const onVerify = (token: string) => {
    const email = getValues('email')

    toast.promise(
      mutation.mutateAsync({ token, email }),
      {
        loading: 'Loading',
        success: () => `Successfully subscribed: ${email}!`,
        error: (err) => `Error: ${err.data}`,
      },
      {
        success: {
          duration: 5000,
          icon: '🔥',
        },
      }
    )
  }

  const onExpire = () => {
    captchaRef.current && captchaRef.current.resetCaptcha()
  }

  const onError = () => {
    captchaRef.current && captchaRef.current.resetCaptcha()
  }

  return {
    register,
    errors,
    onError,
    onExpire,
    onVerify,
    handleSubmit: handleSubmit(submit),
    captchaRef,
    loading: mutation.isLoading,
  }
}
