import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Image from "./Image";

describe('Image', () => {
  it('should be in the document', () => {
    render(<Image src={'image-test.jpg'} alt="image" />)
    expect(screen.queryByAltText('image')).toBeInTheDocument()
  })
  
  it('should have a figure for ensuring semantic', () => {
    render(<Image src={'image-test.jpg'} alt="image" />)
    expect(screen.queryByLabelText('figure')).toBeInTheDocument()
  })
})
