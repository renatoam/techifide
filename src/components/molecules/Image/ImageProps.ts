export interface ImageProps extends NativeImage {
  figureProps?: FigureProps
  caption?: string
}

export interface FigureProps extends NativeElement {
  ref?: OverrideRef
}
