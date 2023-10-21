import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import Input from "./Input"

describe('Input', () => {
  it('should be in the document', () => {
    render(<Input />)
    expect(screen.queryByLabelText('input')).toBeInTheDocument()
  })
  
  it('should have a wrapper', () => {
    render(<Input />)
    expect(screen.queryByLabelText('textbox')).toBeInTheDocument()
  })
  
  it('should have an icon', () => {
    render(<Input />)
    expect(screen.queryByText('search')).toBeInTheDocument()
  })
  
  it('should be empty', () => {
    render(<Input />)
    const sut = screen.queryByLabelText('input') as HTMLInputElement
    expect(sut.value).toBe('')
  })
  
  it('should show the default value', () => {
    render(<Input defaultValue={5} />)
    const sut = screen.queryByLabelText('input') as HTMLInputElement
    expect(sut.value).toBe('5')
  })
  
  it('should show the typed value', () => {
    render(<Input />)
    const sut = screen.queryByLabelText('input') as HTMLInputElement

    fireEvent.change(sut, {
      target: {
        value: 'testing'
      }
    })

    expect(sut.value).toBe('testing')
  })
})
