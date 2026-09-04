import type { Meta, StoryObj } from '@storybook/react-vite'
import telegramLogo from './telegram.png'

function Logo({ src, size = 32 }: { src: string; size?: number }) {
  return <img src={src} alt="" width={size} height={size} />
}

const meta = {
  title: 'assets/logos',
  component: Logo,
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Telegram: Story = {
  args: { src: telegramLogo, size: 48 },
}
