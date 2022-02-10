interface LoaderInput {
  src: string
  width: string | number
  quality?: number
}

export function loader({ src, width, quality = 75 }: LoaderInput) {
  return `https://assets.bitswired.com${src}?w=${width}&q=${quality}`
}
