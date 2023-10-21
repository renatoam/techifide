import { Icon, Typography, Wrapper } from '@/components/atoms';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { memo, useState } from 'react';
import styles from './Header.module.scss';
 
function Header() {
  const [mode, setMode] = useState('Dark')

  function switchTheme() {
    const root = document.querySelector('html')
    root?.classList.toggle('dark')
    const newMode = root?.classList.contains('dark') ? 'Light' : 'Dark'
    setMode(newMode)
  }
  
  return (
    <Wrapper element="header" className={styles.header} aria-label="header">
      <Wrapper className={styles.header__container}>
        <Typography element='h1'>Where in the world?</Typography>
          <Wrapper className={styles.header__theme} onClick={switchTheme} role="button">
            <Icon
              label="theme"
              icon={faMoon}
            />
            <Typography element="p">{mode} Mode</Typography>
          </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export default memo(Header)
