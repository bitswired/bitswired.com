import { styled } from '@lib/stitches'

const FeatureCard = styled('div', {
  display: 'flex',

  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',

  borderRadius: '$md',

  padding: '2rem',

  width: '100%',
  maxWidth: '500px',

  '& .name': {
    fontSize: '2rem',
  },

  '& .icon': {
    fontSize: '8rem',
    color: '$primary1',
  },

  '& .description': {
    textAlign: 'center',
    height: '4em',
    fontSize: '1.25rem',
  },
})

interface FeatureProps {
  name: string
  icon: JSX.Element
  children: JSX.Element | string
}

export function Feature({ name, icon, children }: FeatureProps) {
  return (
    <FeatureCard>
      <h2 className="name">{name}</h2>
      <div className="icon">{icon}</div>
      <p className="description">{children}</p>
    </FeatureCard>
  )
}
