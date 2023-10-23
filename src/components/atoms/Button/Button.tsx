import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import styles from './Button.module.scss'
import { ButtonProps } from './ButtonProps'
 
export default function Button(props: ButtonProps) {
  const {
    className = '',
    children,
    icon = true,
    link = '',
    ...rest
  } = props

  const content = (
    <>
      {icon ? <Icon label='back' icon={faArrowLeftLong} /> : ''}
      {children}
    </>
  )

  if (link) {
    return (
      <Link to={link} aria-label="link">
        <button className={styles.button} {...rest}>
          {content}
        </button>
      </Link>
    )
  }
  
  return (
    <button className={styles.button} {...rest}>
      {content}
    </button>
  )
}
