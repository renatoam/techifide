import { HTMLAttributes, ReactNode } from "react"

export interface SelectProps extends HTMLAttributes<HTMLElement> {
  visibility: boolean
  handleVisibility(): void
  handleSelection?: React.MouseEventHandler<HTMLLIElement>
  display: string
  options: string[]
}

export interface SelectOptionsProps {
  options: string[]
  handleSelection?: React.MouseEventHandler<HTMLLIElement>
}

export interface SelectWrapperProps extends NativeElement {
  handleVisibility: React.MouseEventHandler<HTMLElement>
  display: string
  visibility: boolean
  ref?: OverrideRef
  children: ReactNode
}
