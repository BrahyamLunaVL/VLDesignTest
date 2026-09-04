import type { Meta, StoryObj } from '@storybook/react-vite'
import { Flag } from './flag'
import { FLAGS, type FlagName } from './flags'

const meta = {
  component: Flag,
  argTypes: {
    name: { control: 'select', options: Object.keys(FLAGS) },
  },
} satisfies Meta<typeof Flag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { name: 'mexico', size: 24 },
}

export const AllFlags: Story = {
  args: { name: 'mexico' },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
        gap: 16,
      }}
    >
      {(Object.keys(FLAGS) as FlagName[])
        .sort()
        .map((name) => (
          <div
            key={name}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
          >
            <Flag name={name} size={24} />
            <span style={{ fontSize: 11, color: '#666', textAlign: 'center' }}>{name}</span>
          </div>
        ))}
    </div>
  ),
}
