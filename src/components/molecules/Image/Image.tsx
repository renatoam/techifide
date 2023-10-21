import { Wrapper } from "@/components/atoms";
import styles from './Image.module.scss';
import { ImageProps } from "./ImageProps";

export default function Image(props: ImageProps) {
  const {
    loading = 'lazy',
    decoding = 'async',
    figureProps,
    caption,
    ...rest
  } = props

  return (
    <Wrapper element="figure" aria-label="figure" className={styles.figure} {...figureProps}>
      <img
        {...rest}
        loading={loading}
        decoding={decoding}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </Wrapper>
  )
}
