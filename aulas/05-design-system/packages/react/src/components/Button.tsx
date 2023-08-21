import { styled } from '../styles'
import { ElementType, ComponentProps } from 'react'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontFamily: '$default',
  minWidth: 120,
  boxSizing: 'border-box',
  textAlign: 'center',
  padding: '$0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$green500',

        '&:not(:disabled):hover': {
          backgroundColor: '$green300',
        },

        '&:disabled': {
          backgroundColor: '$gray300',
        },
      },
      secondary: {
        color: '$green300',
        border: '2px solid $green500',

        '&:not(:disabled):hover': {
          backgroundColor: '$green500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          boderColor: '$gray200',
        },
      },
      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          boderColor: '$gray200',
        },
      },
    },
    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType
}
