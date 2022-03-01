import NextImage, { ImageProps } from 'next/image'
import { loader } from '@lib/next'

interface IImageProps extends Omit<ImageProps, 'loader'> {
  src: string
}

export function Image(props: IImageProps) {
  return <NextImage loader={loader} {...props} />
}
