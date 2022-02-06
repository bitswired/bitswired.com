import { Box, Button } from '@components/core'
import { styled } from '@lib/stitches'

const WireupContainer = styled('section', {
  display: 'flex',
  margin: 'auto',
  alignItems: 'center',
  flexDirection: 'column',
  color: 'white',
  fontSize: '1em',

  '@bp3': {
    alignItems: 'flex-start',
  },
})

const Highlight = styled('span', {
  color: '$primary1',
})

export function Wireup() {
  return (
    <WireupContainer>
      <Box as="p" css={{ margin: 0 }}>
        <Highlight>Wire Up!</Highlight> Subscribe
      </Box>
      <Box as="p" css={{ margin: 0, marginBottom: '$4' }}>
        To The Newsletter
      </Box>
      <Button variant="secondary-outlined" size="lg">
        SUBSCRIBE
      </Button>
    </WireupContainer>
  )
}
