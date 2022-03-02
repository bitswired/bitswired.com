import { Box, Separator } from '@components/core'
import { styled } from '@lib/stitches'
import { BlogPostCardMobile } from './BlogPostCardMobile'

const Grid = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  maxWidth: '800px',
  width: '100%',
  my: '2rem',
})

interface BlogPostGridMobileProps {
  postMetas: BlogPostMeta[]
}

export function BlogPostGridMobile({ postMetas }: BlogPostGridMobileProps) {
  return (
    <Grid>
      {postMetas.map((postMeta) => (
        <>
          <BlogPostCardMobile key={postMeta.id} postMeta={postMeta} />
          <Box
            css={{
              width: '80%',
              margin: 'auto',
            }}
          >
            <Separator
              orientation="horizontal"
              css={{
                height: '1Apx !important',
                backgroundColor: '$gray7',
                my: '2rem',
              }}
            />
          </Box>
        </>
      ))}
    </Grid>
  )
}
