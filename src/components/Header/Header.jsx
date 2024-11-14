import { useState } from 'react'
import cn from 'classnames'

import { Navigation, Button, Menu } from '../'

import styles from './Header.module.scss'

import Logo from '../../assets/icons/logo.svg'
import MenuIcon from '../../assets/icons/burger-menu.svg?react'
import CloseIcon from '../../assets/icons/close.svg?react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = (e) => {
    e?.stopPropagation();

    const menu = document.querySelector('#menu');

    if (menu?.classList.contains('menu-active')) {
      menu?.classList.remove('menu-active');

      document.body.classList.remove('noscroll');

      setTimeout(() => {
        setIsMenuOpen((open) => !open);
      }, 200);
    } else {
      setIsMenuOpen((open) => !open);
      document.body.classList.add('noscroll');

      setTimeout(() => {
        document.querySelector('#menu')?.classList.add('menu-active');
      }, 101);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.header__content}>
            <a className={styles.header__link} href="./">
              <img src={Logo} alt="logo" className={styles.header__logo} />
            </a>

            <Navigation />

            <Button buttonClassName={styles.header__button} onClick={toggleMenuHandler}>
              <MenuIcon
                className={cn(styles.header__icon, {
                  [styles.header__show]: !isMenuOpen,
                })}
              />

              <CloseIcon
                className={cn(
                  styles.header__icon, {
                  [styles.header__show]: isMenuOpen,
                })}
              />
            </Button>

            <Button buttonClassName={styles.header__login}>Login</Button>
          </div>
        </div>
      </header>

      {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}
    </>
  )
}
