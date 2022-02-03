import { FaEnvelope, FaLaptop, FaUsers } from 'react-icons/fa'
import { styled } from '@lib/stitches'
import { Feature } from './Feature'

const FeaturesWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'hidden',
  boxSizing: 'border-box',
  padding: '$9',

  '@media (min-width: 1600px)': {
    flexDirection: 'row',
  },
})

export function Features() {
  return (
    <FeaturesWrapper>
      <Feature name="Learning" icon={<FaLaptop />}>
        Data, AI, Visualization, Web ... Bitswired mission is to keep learning
        and educating about these pillars of our modern digital era.
      </Feature>

      <Feature name="Community" icon={<FaUsers />}>
        Building an involved community to learn together! You have direct impact
        on the content.
      </Feature>

      <Feature name="Newsletter" icon={<FaEnvelope />}>
        Sharing new content from Bitswired and other websites, interesting
        papers and resources.
      </Feature>
    </FeaturesWrapper>
  )
}
