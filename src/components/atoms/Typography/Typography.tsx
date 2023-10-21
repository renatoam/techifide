import { memo } from 'react'
import styles from './Typography.module.scss'
import { TypographyProps } from './TypographyProps'
 
function Typography(props: TypographyProps) {
  const {
    element: Element,
    className,
    children,
    ...rest
  } = props
  
  return (
    <Element
      className={`${styles.typography} ${styles[Element]} ${className}`}
      {...rest}
    >
      {children}
    </Element>
  )
}

export default memo(Typography)
