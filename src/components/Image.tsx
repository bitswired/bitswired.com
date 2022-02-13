import NextImage, { ImageProps } from 'next/image'
import { loader } from '@lib/next'

export function Image(props: Omit<ImageProps, 'loader'>) {
  return <NextImage loader={loader} {...props} />
}
