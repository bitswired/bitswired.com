import { Box } from '@components/core'
import { Socials as S } from '@features/socials'
import { styled } from '@lib/stitches'

const SocialsContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  color: 'white',
  fontSize: '1em',
})

export function Socials() {
  return (
    <SocialsContainer>
      <Box as="p" css={{ margin: 0, marginBottom: '$4' }}>
        Socials
      </Box>
      <S />
    </SocialsContainer>
  )
}
