import JoiDate from '@joi/date'
import * as JoiImport from 'joi'

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

export function validatePostMeta(obj: Record<string, unknown>) {
  const d = metaSchema.validate(obj, { convert: true })
  if (d.error) throw new Error(d.error)
  return d.value as BlogPostMeta
}
