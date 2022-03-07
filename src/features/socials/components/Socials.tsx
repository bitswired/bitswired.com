import { FaLinkedinIn, FaTwitter, FaDiscord } from 'react-icons/fa'
import { Icon, ExternalLink } from '@components/core'
import { CONFIG } from '@config'
import { styled } from '@lib/stitches'

const SocialsContainer = styled('div', {
  display: ' flex',
  color: '$primary1',
  fontSize: '32px',
  gap: '$5',
})

export function Socials() {
  return (
    <SocialsContainer>
      <ExternalLink href={CONFIG.socials.discord} title="discord">
        <Icon icon={<FaDiscord />} css={{ color: '$primary1' }} />
      </ExternalLink>

      <ExternalLink href={CONFIG.socials.linkedin} title="linkedin">
        <Icon icon={<FaLinkedinIn />} css={{ color: '$primary1' }} />
      </ExternalLink>

      <ExternalLink href={CONFIG.socials.twitter} title="twitter">
        <Icon icon={<FaTwitter />} css={{ color: '$primary1' }} />
      </ExternalLink>
    </SocialsContainer>
  )
}
