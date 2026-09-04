import { render, screen } from '@testing-library/react'
import { Flag } from './flag'

test('renders as decorative by default', () => {
  const { container } = render(<Flag name="mexico" />)
  const img = container.querySelector('img') as HTMLImageElement
  expect(img).toBeInTheDocument()
  expect(img).toHaveAttribute('aria-hidden', 'true')
  expect(img.alt).toBe('')
})

test('exposes an accessible name when aria-label is provided', () => {
  render(<Flag name="chile" aria-label="Chile" />)
  expect(screen.getByRole('img', { name: 'Chile' })).toBeInTheDocument()
})

test('applies the requested size', () => {
  const { container } = render(<Flag name="peru" size={32} />)
  const img = container.querySelector('img') as HTMLImageElement
  expect(img.width).toBe(32)
  expect(img.height).toBe(32)
})
