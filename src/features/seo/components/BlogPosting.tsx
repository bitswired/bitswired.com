import Head from 'next/head'
import { jsonLdScriptProps } from 'react-schemaorg'
import { BlogPosting } from 'schema-dts'
import { CONFIG } from '@config'

type BlogPostingJSONLDProps = Pick<
  BlogPosting,
  'headline' | 'dateCreated' | 'datePublished' | 'dateModified' | 'image'
>

export function BlogPostingJSONLD(props: Required<BlogPostingJSONLDProps>) {
  return (
    <Head>
      <script
        {...jsonLdScriptProps<BlogPosting>({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: props.headline,
          dateCreated: props.dateCreated,
          datePublished: props.datePublished,
          dateModified: props.dateModified,
          image: props.image,
          author: {
            '@type': 'Person',
            name: 'Jimi Vaubien',
            url: CONFIG.socials.linkedin,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Bitswired',
            logo: {
              '@type': 'ImageObject',
              url: CONFIG.images.logo,
            },
          },
        })}
      />
    </Head>
  )
}
