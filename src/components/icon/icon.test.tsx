import { render, screen } from '@testing-library/react'
import { Icon } from './icon'

test('renders as a decorative element by default', () => {
  const { container } = render(<Icon name="solid/chevron-left" />)
  const icon = container.querySelector('.icon')
  expect(icon).toBeInTheDocument()
  expect(icon).toHaveAttribute('aria-hidden', 'true')
})

test('exposes an accessible name when aria-label is provided', () => {
  render(<Icon name="solid/chevron-right" aria-label="Next" />)
  expect(screen.getByRole('img', { name: 'Next' })).toBeInTheDocument()
})

test('applies the requested size', () => {
  const { container } = render(<Icon name="solid/chevron-left" size={24} />)
  const icon = container.querySelector('.icon') as HTMLElement
  expect(icon.style.width).toBe('24px')
  expect(icon.style.height).toBe('24px')
})
