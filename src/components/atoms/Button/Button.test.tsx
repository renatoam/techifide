import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import Button from "./Button"
import { BrowserRouter } from "react-router-dom"

describe('Button', () => {
  const user = userEvent.setup()

  it('should be in the document', () => {
    render(<Button />)
    expect(screen.queryByRole('button')).toBeInTheDocument()
  })

  it('should show text properly', () => {
    render(<Button>tobirama</Button>)
    expect(screen.queryByText('tobirama')).toBeInTheDocument()
  })

  it('should be clickable', async () => {
    const mockFunction = vi.fn()
    render(<Button onClick={mockFunction} />)

    await user.click(screen.queryByRole('button')!)
    
    expect(mockFunction).toHaveBeenCalled()
  })

  it('should be a link if the prop link is provided', () => {
    render(
      <BrowserRouter>
        <Button link="link" />
      </BrowserRouter>
    )
    const link = screen.queryByLabelText('link')
    expect(link).toBeInTheDocument()
  })

  it('should contain an icon if icon prop is provided', () => {
    render(<Button icon={true} />)
    expect(screen.queryByText('back')).toBeInTheDocument()
  })
})
