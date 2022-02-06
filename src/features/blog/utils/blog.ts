import JoiDate from '@joi/date'
import * as JoiImport from 'joi'
import { bundleMDX } from 'mdx-bundler'
import { default as fsWithCallbacks } from 'fs'
import path from 'path'
import { CONFIG } from '@config'
const fs = fsWithCallbacks.promises

const Joi = JoiImport.extend(JoiDate)

const metaSchema = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  readMinutes: Joi.number().required(),
  image: Joi.string().uri().required(),
  tags: Joi.array().items(Joi.string()).required(),
  series: Joi.string(),
  category: Joi.string().required(),
  slug: Joi.string().required(),
  published: Joi.boolean().required(),
  datePublished: Joi.date().format('YYYY-MM-DD').raw().required(),
  dateModified: Joi.date().format('YYYY-MM-DD').raw().required(),
  images: Joi.array().items(Joi.string()).required(),
})

function validatePostMeta(obj: Record<string, unknown>, slug: string) {
  const d = metaSchema.validate(obj, { convert: true })
  if (d.error) throw new Error(d.error)
  const postMeta: BlogPostMeta = d.value
  if (postMeta.slug !== slug)
    throw new Error('Slug and file name not identical')

  return postMeta
}

export async function listAllSlugs() {
  const posts = await fs.readdir(CONFIG.paths.content.blog)
  return posts
}

export async function getPostBySlug(slug: string) {
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
