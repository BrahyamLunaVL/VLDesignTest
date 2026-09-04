import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'

const meta = {
  component: Button,
  args: {
    text: 'Button Text',
    leftIcon: 'solid/chevron-left',
    rightIcon: 'solid/chevron-right',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'success', 'error'],
    },
    size: { control: 'select', options: ['medium', 'small'] },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = { args: { variant: 'primary' } }
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Tertiary: Story = { args: { variant: 'tertiary' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Success: Story = { args: { variant: 'success' } }
export const Error: Story = { args: { variant: 'error' } }

export const Disabled: Story = { args: { variant: 'primary', disabled: true } }

export const Small: Story = { args: { variant: 'primary', size: 'small' } }

export const WithSupportingText: Story = {
  args: { variant: 'ghost', supportingText: 'Supporting Text', text: 'Action Text' },
}

export const IconOnly: Story = {
  args: { variant: 'primary', text: undefined, rightIcon: undefined, leftIcon: 'solid/chevron-left' },
  render: (args) => <Button {...args} aria-label="Previous" />,
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      {(['primary', 'secondary', 'tertiary', 'ghost', 'success', 'error'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Button
            variant={variant}
            text="Button Text"
            leftIcon="solid/chevron-left"
            rightIcon="solid/chevron-right"
          />
          <Button variant={variant} text="Disabled" disabled />
          <Button variant={variant} leftIcon="solid/chevron-left" aria-label={`${variant} icon`} />
        </div>
      ))}
    </div>
  ),
}

export const AllVariantsSmall: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
      {(['primary', 'secondary', 'tertiary', 'ghost', 'success', 'error'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Button
            variant={variant}
            size="small"
            text="Button Text"
            leftIcon="solid/chevron-left"
            rightIcon="solid/chevron-right"
          />
          <Button variant={variant} size="small" text="Disabled" disabled />
          <Button
            variant={variant}
            size="small"
            leftIcon="solid/chevron-left"
            aria-label={`${variant} icon`}
          />
        </div>
      ))}
    </div>
  ),
}
