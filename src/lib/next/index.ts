import { ImageLoaderProps } from 'next/image'
import { CONFIG } from '@config'

export function loader({ src, width, quality = 75 }: ImageLoaderProps) {
  return `${CONFIG.api.assets.basePath}${src}?w=${width}&q=${quality}`
}
