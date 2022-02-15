import Link from 'next/link'
import { Box } from '@components/core'
import { CONFIG } from '@config'
import { styled } from '@lib/stitches'

const Item = styled('a', {
  color: 'white',
  fontSize: '$5',
  textTransform: 'uppercase',
  textDecoration: 'none',
  transition: 'color 0.2s ease',

  '&:hover': {
    color: '$secondary1',
  },
})

export function Navigation() {
  return (
    <Box
      as="nav"
      css={{
        paddingInlineStart: 0,
        margin: 'auto',
        height: '100%',
        alignItems: 'center',
        width: 'max-content',
        listStyle: 'none',
        display: 'flex',
        gap: '$5',
        flexDirection: 'column',

        '@bp3': {
          flexDirection: 'row',
        },
      }}
    >
      {CONFIG.navigation.paths.map((x) => (
        <li key={x.name}>
          <Link href={x.path} passHref>
            <Item title={x.name}>{x.name}</Item>
          </Link>
        </li>
      ))}
    </Box>
  )
}
