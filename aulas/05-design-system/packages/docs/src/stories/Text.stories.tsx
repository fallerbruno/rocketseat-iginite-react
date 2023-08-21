import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@faller-bruno-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit cumque iusto aspernatur accusantium veniam, illo voluptatibus harum natus perspiciatis, suscipit, dolor quis vel consequuntur. Iusto saepe quam dolores modi aperiam!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
