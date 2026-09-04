import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('renders the counter button and increments on click', async () => {
  const user = userEvent.setup()
  render(<App />)

  const button = screen.getByRole('button', { name: /count is 0/i })
  expect(button).toBeInTheDocument()

  await user.click(button)
  expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
})
