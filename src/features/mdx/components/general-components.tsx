import dynamic from 'next/dynamic'
import Image, { ImageProps } from 'next/image'
const MDXCodeBlock = dynamic(() =>
  import('@features/mdx').then((module: any) => module.MDXCodeBlock)
)
Image

export const mdxGeneralComponents = {
  // FIXME
  Figure: (props: ImageProps) => <Image {...props} alt="Image" />,
  code: MDXCodeBlock,
  // FIXME: remove as any if possible
} as any
