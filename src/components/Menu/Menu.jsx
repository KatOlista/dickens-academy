import { useRef } from 'react'

import { Button } from '../'
import { useClickOutside } from '../../hooks/useClickOutside'

import styles from './Menu.module.scss'

import Shevron from '../../assets/icons/shevron.svg?react'

export const Menu = ({ setIsMenuOpen }) => {
  const closeMenuHandler = (id = undefined) => {
    if (id) {
      document.querySelector(id)?.scrollIntoView(true);
    }

    document.querySelector('#menu')?.classList.remove('menu-active');
    document.body.classList.remove('noscroll');

    setTimeout(() => {
      setIsMenuOpen(false);
    }, 200);
  };

  const menuRef = useRef(null);

  useClickOutside(menuRef, closeMenuHandler);

  return (
    <aside className={styles.menu__wrapper}>
      <ul
        className={styles.menu}
        id='menu'
        ref={menuRef}
      >
        <li className={styles.menu__li}>
          <Button
            onClick={() => closeMenuHandler('#Home')}
            buttonClassName={styles.menu__button}
          >
            Home
          </Button>
        </li>

        <li className={styles.menu__li}>
          <Button
            onClick={() => closeMenuHandler('#Courses')}
            buttonClassName={styles.menu__button}
          >
            Courses <Shevron className={styles.menu__shevron} />
          </Button>
        </li>

        <li className={styles.menu__li}>
          <Button
            onClick={() => closeMenuHandler('#About')}
            buttonClassName={styles.menu__button}
          >
            About
          </Button>
        </li>

        <li className={styles.menu__li}>
          <Button
            onClick={() => closeMenuHandler('#Contact')}
            buttonClassName={styles.menu__button}
          >
            Contact us
          </Button>
        </li>
      </ul>

      <div className={styles.menu__layout}></div>
    </aside>
  )
}
