import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@faller-bruno-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/fallerbruno.png',
    alt: 'Bruno Faller',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
