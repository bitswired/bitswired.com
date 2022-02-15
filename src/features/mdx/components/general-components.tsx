import dynamic from 'next/dynamic'
import { ImageProps } from 'next/image'
import { Image, AspectRatio, Box } from '@components/core'

const MDXCodeBlock = dynamic(() =>
  import('@features/mdx').then((module: any) => module.MDXCodeBlock)
)

interface FigureProps extends ImageProps {
  ratio: number
  title: string
}

export const mdxGeneralComponents = {
  Figure: ({ ratio, title, ...props }: FigureProps) => (
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
  ),
  code: MDXCodeBlock,
  // FIXME: remove as any if possible
} as any
