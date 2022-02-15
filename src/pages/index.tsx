import { Features, Head } from '@features/landing'
import { CommonSEO } from '@features/seo'

export default function Home() {
  return (
    <>
      <CommonSEO
        title="Embrace The Data Era"
        description="Artificial Intelligence, Programming, ... and much more! Tutorials, In-depth guides, Research papers ... Join the community!"
        uri=""
      />
      <Head />
      <Features />
    </>
  )
}
