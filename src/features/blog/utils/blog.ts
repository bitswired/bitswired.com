import JoiDate from '@joi/date'
import dayjs from 'dayjs'
import * as JoiImport from 'joi'

const Joi = JoiImport.extend(JoiDate)

const metaSchema = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  readMinutes: Joi.number().required(),
  //image: Joi.string().uri().required(),
  image: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
  series: Joi.string(),
  category: Joi.string().required(),
  slug: Joi.string().required(),
  published: Joi.boolean().required(),
  datePublished: Joi.date().format('YYYY-MM-DD').raw().required(),
  dateModified: Joi.date().format('YYYY-MM-DD').raw().required(),
  images: Joi.array().items(Joi.string()).required(),
})

function postProcess(postMeta: BlogPostMeta) {
  const res = { ...postMeta }
  res.datePublished = dayjs(postMeta.datePublished).format('MMM M, YYYY')
  res.dateModified = dayjs(postMeta.dateModified).format('MMM M, YYYY')
  return res
}

export function validatePostMeta(obj: Record<string, unknown>, slug: string) {
  const d = metaSchema.validate(obj, { convert: true })
  if (d.error) throw new Error(d.error)
  const postMeta: BlogPostMeta = d.value
  if (postMeta.slug !== slug)
    throw new Error('Slug and file name not identical')

  return postProcess(postMeta)
}
