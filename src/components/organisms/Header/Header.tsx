import { Icon, Typography, Wrapper } from '@/components/atoms';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';
import styles from './Header.module.scss';
 
function Header() {  
  return (
    <Wrapper element="header" className={styles.header} aria-label="header">
      <Wrapper className={styles.header__container}>
        <Typography element='h1'>Where in the world?</Typography>
        <Wrapper className={styles.header__theme} role="button">
          <Icon
            label="theme"
            icon={faMoon}
          />
          <Typography element="p">Dark Mode</Typography>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export default memo(Header)
