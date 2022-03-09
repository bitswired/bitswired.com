import { bundleMDX } from 'mdx-bundler'
import { getMDXExport } from 'mdx-bundler/client'
import dynamic from 'next/dynamic'
import React from 'react'
import rehypeMathjax from 'rehype-mathjax'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { default as fsWithCallbacks } from 'fs'
import path from 'path'
import { CONFIG } from '@config'
import { BlogPostLayout, validatePostMeta } from '@features/blog'
import { BlogPostingJSONLD, CommonSEO } from '@features/seo'
import {
  remarkToc,
  rehypeToc,
  TocEntry,
  remarkExtractComponents,
} from '@lib/mdx'
const fs = fsWithCallbacks.promises

const generalComponents = {
  code: dynamic(() =>
    import('@features/mdx').then((module: any) => module.MDXCodeBlock)
  ),
  a: dynamic(() =>
    import('@features/mdx').then((module: any) => module.MDXLink)
  ),
}

const otherComponents = {
  Figure: dynamic(() =>
    import('@features/mdx').then((module: any) => module.Figure)
  ),
  ColoredBlock: dynamic(() =>
    import('@features/mdx').then((module: any) => module.ColoredBlock)
  ),

  SummaryBlock: dynamic(() =>
    import('@features/mdx').then((module: any) => module.SummaryBlock)
  ),

  LinearLogLineChart: dynamic(() =>
    import('@features/mdx').then((module: any) => module.LinearLogLineChart)
  ),
}

interface BlogPostPageProps {
  postMeta: BlogPostMeta
  code: string
  data: any
}

interface MDXExports {
  toc: TocEntry[]
  components: (keyof typeof otherComponents)[]
}

type ComponentKeys =
  | keyof typeof generalComponents
  | keyof typeof otherComponents

type TComponentKeys = { [K in ComponentKeys]?: React.ComponentType }

export default function BlogPostPage({
  postMeta,
  code,
  data,
}: BlogPostPageProps) {
  const mdxExport = getMDXExport<MDXExports, BlogPostMeta>(code)

  const Component = React.useMemo(() => mdxExport.default, [code])

  const comps: TComponentKeys = { ...generalComponents }

  mdxExport.components.forEach((componentName) => {
    comps[componentName] = otherComponents[componentName]
  })

  console.log(comps)

  return (
    <>
      <CommonSEO
        title={postMeta.title}
        description={postMeta.description}
        uri={`/blog/${postMeta.slug}`}
        images={postMeta.images}
      />

      <BlogPostingJSONLD
        headline={postMeta.title}
        dateCreated={postMeta.datePublished}
        datePublished={postMeta.datePublished}
        dateModified={postMeta.dateModified}
        image={postMeta.images}
      />

      <BlogPostLayout postMeta={postMeta} toc={mdxExport.toc}>
        <Component components={comps} data={data} />
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
  const dataPath = path.join(CONFIG.paths.content.blog, slug, 'data.json')

  const data = JSON.parse((await fs.readFile(dataPath)).toString('utf-8'))

  const { code, frontmatter } = await bundleMDX({
    file: path.resolve(path.join(postPath, 'index.mdx')),
    //cwd: path.resolve(postPath),
    cwd: process.env.PWD,
    esbuildOptions(options) {
      // options.minify = false
      options.target = ['esnext']
      options.platform = 'node'
      options.treeShaking = true
      // FIXME: understand issue with process not defined for some mdx pages
      options.define = {
        'process.env': '142',
      }

      return options
    },
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMath,
        remarkToc,
        remarkGfm,
        remarkExtractComponents,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeMathjax,
        rehypeToc,
      ]
      return options
    },
  })

  const postMeta = validatePostMeta(frontmatter, slug)

  return { code, postMeta, data }
}

type Context = {
  params: {
    slug: string
  }
}

export async function getStaticProps(context: Context) {
  const { slug } = context.params

  const { postMeta, code, data } = await getPostBySlug(slug)

  return {
    props: { postMeta, code, data },
  }
}

export async function getStaticPaths() {
  const slugs = await listAllSlugs()

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}
