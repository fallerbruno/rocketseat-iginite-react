import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@faller-bruno-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Text>Testando algo dentro da box</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
