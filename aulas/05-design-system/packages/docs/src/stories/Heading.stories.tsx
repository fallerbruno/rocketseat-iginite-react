import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@faller-bruno-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit cumque iusto aspernatur accusantium veniam, illo voluptatibus harum natus perspiciatis, suscipit, dolor quis vel consequuntur. Iusto saepe quam dolores modi aperiam!',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 HEADING',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por Padrao, o componente Heading renderiza um elemento `h2`. Você pode alterar o elemento HTML que o componente renderiza usando a prop `as`.',
      },
    },
  },
}
