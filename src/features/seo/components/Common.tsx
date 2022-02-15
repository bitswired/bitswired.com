import { NextSeo, NextSeoProps } from 'next-seo'
import { CONFIG } from '@config'

interface CommonSEOProps
  extends Required<Pick<NextSeoProps, 'title' | 'description'>> {
  uri: string
  images?: string[]
}

export function CommonSEO({ images = [], ...props }: CommonSEOProps) {
  const cannonicalUrl = `https://www.bitswired.com${props.uri}`

  return (
    <NextSeo
      title={`Bitswired - ${props.title}`}
      description={props.description}
      canonical={cannonicalUrl}
      openGraph={{
        type: 'website',
        locale: 'en_CH',
        url: cannonicalUrl,
        title: props.title,
        description: props.description,
        images: images.map((x) => ({
          url: x,
        })),
        site_name: 'Bitswired',
      }}
      twitter={{
        handle: CONFIG.socials.twitterUserHandle,
        site: CONFIG.socials.twitterSiteHandle,
        cardType: 'summary_large_image',
      }}
    />
  )
}

CommonSEO.defaultProps = {
  images: [],
}
