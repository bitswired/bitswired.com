import Link from 'next/link'
import { Container } from '@components/core'
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
    <Container
      as="ul"
      gap="lg"
      css={{
        height: '100%',
        alignItems: 'center',
        width: 'max-content',
        listStyle: 'none',
      }}
    >
      {CONFIG.navigation.paths.map((x) => (
        <li key={x.name}>
          <Link href={x.path} passHref>
            <Item title={x.name}>{x.name}</Item>
          </Link>
        </li>
      ))}
    </Container>
  )
}
