import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { styled } from '@lib/stitches'

export const Separator = styled(SeparatorPrimitive.Root, {
  backgroundColor: 'black',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
})
