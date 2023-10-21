import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./Header";

describe('Header', () => {  
  it('should be in the document', () => {
    render(<Header />)
    const sut = screen.queryByLabelText('header')

    expect(sut).toBeInTheDocument()
  })
  
  it('should have proper title', () => {
    render(<Header />)
    const sut = screen.queryByText('Where in the world?')

    expect(sut).toBeInTheDocument()
  })
  
  it('should have a button for switching theme', () => {
    render(<Header />)
    const header = screen.queryByLabelText('header')
    const sut = within(header!).queryByRole('button')

    expect(sut).toBeInTheDocument()
  })
  
  it('should have an icon and a mode text', () => {
    render(<Header />)
    const button = screen.queryByRole('button')
    const icon = within(button!).queryByText('theme')
    const modeText = within(button!).queryByText(/Mode/i)

    expect(icon).toBeInTheDocument()
    expect(modeText).toBeInTheDocument()
  })
})