import { Box, InternalLink } from '@components/core'
import { CONFIG } from '@config'
import { styled } from '@lib/stitches'

const PagesContainer = styled('section', {
  display: 'flex',
  margin: 'auto',
  alignItems: 'center',
  flexDirection: 'column',
  color: 'white',
  fontSize: '1em',
})

export function Pages() {
  return (
    <PagesContainer>
      <Box as="p" css={{ margin: 0, marginBottom: '$4' }}>
        Pages
      </Box>
      <Box
        as="ul"
        css={{
          paddingInlineStart: 0,
          margin: 'auto',
          height: '100%',
          alignItems: 'center',
          width: 'max-content',
          listStyle: 'none',
          display: 'flex',
          gap: '$2',
          flexDirection: 'column',
          fontSize: '$6',
        }}
      >
        {CONFIG.navigation.paths.map((x) => (
          <li key={x.name}>
            <InternalLink
              variant="raw"
              color="white"
              href={x.path}
              title={x.name}
            >
              {x.name}
            </InternalLink>
          </li>
        ))}
      </Box>
    </PagesContainer>
  )
}
