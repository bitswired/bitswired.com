import { bundleMDX } from 'mdx-bundler'
import { default as fsWithCallbacks } from 'fs'
import path from 'path'
import { CONFIG } from '@config'
import { BlogPostGridMobile, validatePostMeta } from '@features/blog'
import { CommonSEO } from '@features/seo'
const fs = fsWithCallbacks.promises

interface BlogPageProps {
  postMetas: BlogPostMeta[]
}

export default function BlogPage({ postMetas }: BlogPageProps) {
  const sortedPostMetas = postMetas.sort((a, b) => {
    if (a.datePublished > b.datePublished) {
      return -1
    } else {
      return 1
    }
  })

  return (
    <>
      <CommonSEO
        title="Blog, Learn Together"
        description="Bitswired blog. Articles about artificial intelligence, computer graphics, web development and more."
        uri="/blog"
      />
      {/* <BlogPostGrid postMetas={sortedPostMetas} /> */}
      <BlogPostGridMobile postMetas={sortedPostMetas} />
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

  return {
    props: { postMetas },
  }
}
