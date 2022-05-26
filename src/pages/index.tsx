import { bundleMDX } from 'mdx-bundler'
import { default as fsWithCallbacks } from 'fs'
import path from 'path'
import { CONFIG } from '@config'
import { BlogPostGrid, validatePostMeta } from '@features/blog'
import { Features, Head } from '@features/landing'
import { CommonSEO } from '@features/seo'
const fs = fsWithCallbacks.promises

interface HomePageProps {
  postMetas: BlogPostMeta[]
}

export default function HomePage({ postMetas }: HomePageProps) {
  return (
    <>
      <CommonSEO
        title="Embrace The Data Era"
        description="Artificial Intelligence, Programming, ... and much more! Tutorials, In-depth guides, Research papers ... Join the community!"
        uri=""
      />
      <Head />
      <Features />
      <BlogPostGrid postMetas={postMetas} />
    </>
  )
}

async function listAllSlugs() {
  const posts = await fs.readdir(CONFIG.paths.content.blog)
  return posts
}

async function getPostMeta(slug: string) {
  const postPath = path.join(CONFIG.paths.content.blog, slug)

  const { frontmatter } = await bundleMDX({
    file: path.resolve(path.join(postPath, 'index.mdx')),
    //cwd: path.resolve(postPath),
    cwd: process.env.PWD,
    esbuildOptions(options) {
      // options.minify = false
      options.target = ['esnext']
      options.platform = 'node'
      return options
    },
  })

  const postMeta = validatePostMeta(frontmatter, slug)

  return postMeta
}

export async function getStaticProps() {
  const slugs = await listAllSlugs()

  const postMetas = await Promise.all(slugs.map(getPostMeta))

  const sortedPostMetas = postMetas
    .sort((a, b) => {
      if (a.id > b.id) {
        return -1
      } else {
        return 1
      }
    })
    .slice(0, 3)

  return {
    props: { postMetas: sortedPostMetas },
  }
}
