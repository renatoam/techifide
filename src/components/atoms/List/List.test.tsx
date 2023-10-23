import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import List from "./List"

describe('List', () => {
  it('should be in the document', () => {
    render(<List />)
    
    expect(screen.queryByRole('listbox')).toBeInTheDocument()
  })
  
  it('should contain the right children', () => {
    const children = 'content'
    render(<List children={children} />)
    
    expect(screen.queryByRole('listbox')?.innerHTML).toBe(children)
  })
  
  it('should have the proper tag name', () => {
    render(<List element="ol" />)
    
    expect(screen.queryByRole('listbox')?.tagName.toLowerCase()).toBe('ol')
  })
})
