import type { Meta, StoryObj } from '@storybook/react-vite'
import { Icon } from './icon'
import { ICONS, type IconName } from './icons'

const meta = {
  component: Icon,
  argTypes: {
    name: { control: 'select', options: Object.keys(ICONS) },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { name: 'solid/chevron-left', size: 16 },
}

export const Large: Story = {
  args: { name: 'solid/chevron-right', size: 32 },
}

function IconGrid({ prefix }: { prefix: 'solid/' | 'regular/' }) {
  const names = (Object.keys(ICONS) as IconName[]).filter((name) => name.startsWith(prefix)).sort()
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
        gap: 16,
      }}
    >
      {names.map((name) => (
        <div
          key={name}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
        >
          <Icon name={name} size={24} />
          <span style={{ fontSize: 11, color: '#666', textAlign: 'center', wordBreak: 'break-word' }}>
            {name.slice(prefix.length)}
          </span>
        </div>
      ))}
    </div>
  )
}

export const AllSolidIcons: Story = {
  args: { name: 'solid/chevron-left' },
  render: () => <IconGrid prefix="solid/" />,
}

export const AllRegularIcons: Story = {
  args: { name: 'regular/chevron-left' },
  render: () => <IconGrid prefix="regular/" />,
}
