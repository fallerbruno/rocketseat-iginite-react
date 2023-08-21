import { styled } from '../styles'
import { ElementType, ComponentProps } from 'react'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  background: '$gray800',
  border: '1px solid $gray600',
})

export type BoxProps = ComponentProps<typeof Box> & {
  as?: ElementType
}
