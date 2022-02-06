import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'
import React from 'react'
import { default as fsWithCallbacks } from 'fs'
import path from 'path'
import { CONFIG } from '@config'
import { BlogPostLayout, validatePostMeta } from '@features/blog'
const fs = fsWithCallbacks.promises

interface BlogPostPageProps {
  postMeta: BlogPostMeta
  code: string
}

export default function BlogPostPage({ postMeta, code }: BlogPostPageProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code])

  return (
    <>
      <BlogPostLayout postMeta={postMeta}>
        <Component
          components={{
            // FIXME
            Figure: (props) => <img {...props} alt="Image" />,
          }}
        />
      </BlogPostLayout>
    </>
  )
}

async function listAllSlugs() {
  const posts = await fs.readdir(CONFIG.paths.content.blog)
  return posts
}

async function getPostBySlug(slug: string) {
  const postPath = path.join(CONFIG.paths.content.blog, slug)

  const { code, frontmatter } = await bundleMDX({
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

  return { code, postMeta }
}

type Context = {
  params: {
    slug: string
  }
}

export async function getStaticProps(context: Context) {
  const { slug } = context.params

  const { postMeta, code } = await getPostBySlug(slug)

  return {
    props: { postMeta, code },
  }
}

export async function getStaticPaths() {
  const slugs = await listAllSlugs()

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}
