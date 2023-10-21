import { memo } from 'react'
import styles from './ListItem.module.scss'
import { ListItemProps } from './ListItemProps'
 
function ListItem(props: ListItemProps) {
  const { className, children, ...rest } = props
  
  return (
    <li className={`${styles.list__item} ${className}`} {...rest}>
      {children}
    </li>
  )
}

export default memo(ListItem)
