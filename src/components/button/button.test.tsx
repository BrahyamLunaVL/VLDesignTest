import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './button'

test('renders the bold text as the accessible name', () => {
  render(<Button text="Continue" />)
  expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument()
})

test('renders supporting text before the bold text', () => {
  render(<Button supportingText="Supporting" text="Action" />)
  const button = screen.getByRole('button')
  const texts = Array.from(button.querySelectorAll('.button__text')).map((el) => el.textContent)
  expect(texts).toEqual(['Supporting', 'Action'])
})

test('defaults to the primary pill variant', () => {
  render(<Button text="Continue" />)
  const button = screen.getByRole('button')
  expect(button).toHaveClass('button--primary')
  expect(button).toHaveClass('button--pill')
})

test('becomes a round icon-only button when there is no text', () => {
  render(<Button leftIcon="solid/chevron-left" aria-label="Previous" />)
  const button = screen.getByRole('button', { name: 'Previous' })
  expect(button).toHaveClass('button--round')
})

test('applies the requested variant and size classes', () => {
  render(<Button text="Delete" variant="error" size="small" />)
  const button = screen.getByRole('button')
  expect(button).toHaveClass('button--error')
  expect(button).toHaveClass('button--small')
})

test('calls onClick when clicked', async () => {
  const user = userEvent.setup()
  const handleClick = vi.fn()
  render(<Button text="Continue" onClick={handleClick} />)

  await user.click(screen.getByRole('button', { name: 'Continue' }))
  expect(handleClick).toHaveBeenCalledTimes(1)
})

test('does not call onClick when disabled', async () => {
  const user = userEvent.setup()
  const handleClick = vi.fn()
  render(<Button text="Continue" onClick={handleClick} disabled />)

  await user.click(screen.getByRole('button', { name: 'Continue' }))
  expect(handleClick).not.toHaveBeenCalled()
  expect(screen.getByRole('button')).toBeDisabled()
})
