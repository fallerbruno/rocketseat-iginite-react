import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$green900',
  borderRadius: '$md',
  padding: '$4',
  height: '$12',
  width: '$48',
})

export function App() {
  return <Button>Hello World</Button>
}
