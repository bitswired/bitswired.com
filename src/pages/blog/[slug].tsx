import { getMDXComponent } from 'mdx-bundler/client'
import React from 'react'
import { BlogPostLayout } from '@features/blog'
import { getPostBySlug, listAllSlugs } from '@features/blog'

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
