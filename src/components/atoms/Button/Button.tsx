import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import Icon from '../Icon'
import styles from './Button.module.scss'
import { ButtonProps } from './ButtonProps'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
 
export default function Button(props: ButtonProps) {
  const {
    className = '',
    children,
    icon = true,
    link = '',
    ...rest
  } = props

  const ButtonWrapper = link ? Link : Fragment
  
  return (
    <ButtonWrapper to={link} aria-label="link">
      <button className={styles.button} {...rest}>
        {icon ? <Icon label='back' icon={faArrowLeftLong} /> : ''}
        {children}
      </button>
    </ButtonWrapper>
  )
}
