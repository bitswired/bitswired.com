import dynamic from 'next/dynamic'
import { ImageProps } from 'next/image'
import { Image, AspectRatio } from '@components/core'

const MDXCodeBlock = dynamic(() =>
  import('@features/mdx').then((module: any) => module.MDXCodeBlock)
)

interface FigureProps extends ImageProps {
  ratio: number
}

export const mdxGeneralComponents = {
  Figure: ({ ratio, ...props }: FigureProps) => (
    <AspectRatio ratio={ratio}>
      <Image {...props} quality={77} />
    </AspectRatio>
  ),
  code: MDXCodeBlock,
  // FIXME: remove as any if possible
} as any
