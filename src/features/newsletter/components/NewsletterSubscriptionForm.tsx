import HCaptcha from '@hcaptcha/react-hcaptcha'
import { Box, Button, Input } from '@components/core'
import { CONFIG } from '@config'
import { styled } from '@lib/stitches'
import { useNewsletterSubscriptionForm } from '../hooks/newsletter-subscription-form'

const StyledForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$4',

  '@bp1': {
    flexDirection: 'row',
  },
})

export function NewsletterSubscriptionForm() {
  const {
    register,
    handleSubmit,
    errors,
    captchaRef,
    onError,
    onExpire,
    onVerify,
  } = useNewsletterSubscriptionForm()

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          css={{
            backgroundColor: 'rgba(0,0,0,0)',
            color: '$primary1',
            fontFamily: '$sans',
          }}
          placeholder="Email address"
          {...register('email', {
            required: 'Email address required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          error={!!errors.email}
        />
        <Button variant="secondary-solid">SUBSCRIBE</Button>
      </StyledForm>
      <Box css={{ color: '$error' }}>
        {errors.email && errors.email.message}
      </Box>
      <HCaptcha
        sitekey={CONFIG.hCaptcha.siteKey}
        onError={onError}
        onExpire={onExpire}
        onVerify={onVerify}
        ref={captchaRef}
        size="invisible"
      />
    </>
  )
}
