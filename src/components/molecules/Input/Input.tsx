import { Icon, Wrapper } from '@/components/atoms'
import { ForwardedRef, forwardRef, memo } from 'react'
import styles from './Input.module.scss'
import { InputProps } from './InputProps'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
 
const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const {
    type = "text",
    ...rest
  } = props

  return (
    <Wrapper className={styles.input__control} aria-label="textbox">
      <Icon label='search' icon={faSearch} className={styles.input__icon} />
      <input
        ref={ref}
        type={type}
        autoComplete="off"
        aria-label={rest['aria-label'] ? rest['aria-label'] : 'input'}
        className={`${rest.className} ${styles.input}`}
        {...rest}
      />
    </Wrapper>
  )
})

export default memo(Input)
