import { styled } from '@lib/stitches'
import { BlogPostCard } from './BlogPostCard'

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gap: '$8',

  boxSizing: 'border-box',

  width: '100%',

  padding: '$4',

  '@bp3': {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },

  '@bp2': {
    padding: '$11',
  },
})

interface BlogPostGridProps {
  postMetas: BlogPostMeta[]
}

export function BlogPostGrid({ postMetas }: BlogPostGridProps) {
  return (
    <Grid>
      {postMetas.map((meta) => (
        <BlogPostCard key={meta.id} postMeta={meta} />
      ))}
    </Grid>
  )
}
