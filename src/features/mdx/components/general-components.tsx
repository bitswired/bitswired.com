import { ImageProps } from 'next/image'
import React from 'react'
import {
  Image,
  AspectRatio,
  Box,
  InternalLink,
  ExternalLink,
  LinkProps,
} from '@components/core'

// const MDXCodeBlock = dynamic(() =>
//   import('@features/mdx').then((module: any) => module.MDXCodeBlock)
// )

export function MDXLink({ children, ...props }: LinkProps) {
  if (props.href?.startsWith('/')) {
    return <InternalLink {...props}>{children}</InternalLink>
  } else {
    return <ExternalLink {...props}>{children}</ExternalLink>
  }
}

interface FigureProps extends ImageProps {
  ratio: number
  title: string
  src: string
}

// export const mdxGeneralComponents = {
//   Figure: ({ ratio, title, ...props }: FigureProps) => (
//     <Box
//       as="figure"
//       css={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '$4',
//         margin: 0,
//         my: '3em',
//       }}
//     >
//       <AspectRatio ratio={ratio}>
//         <Image {...props} quality={77} />
//       </AspectRatio>
//       <Box as="figcaption">{title}</Box>
//     </Box>
//   ),
//   code: MDXCodeBlock,
//   a: MDXLink,
//   // FIXME: remove as any if possible
// } as any

export function Figure({ ratio, title, ...props }: FigureProps) {
  return (
    <Box
      as="figure"
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '$4',
        margin: 0,
        my: '3em',
      }}
    >
      <AspectRatio ratio={ratio}>
        <Image {...props} quality={77} />
      </AspectRatio>
      <Box as="figcaption">{title}</Box>
    </Box>
  )
}
