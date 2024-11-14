import { Button } from '../'

import styles from './Navigation.module.scss'

import Shevron from '../../assets/icons/shevron.svg?react'

export const Navigation = () => {
  const scrollIntoViewHandler = (id) => {
    document.querySelector(id)?.scrollIntoView(true);
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__li}>
          <Button
            onClick={() => scrollIntoViewHandler('#Home')}
            buttonClassName={styles.navigation__button}
          >
            Home
          </Button>
        </li>

        <li className={styles.navigation__li}>
          <Button
            onClick={() => scrollIntoViewHandler('#Courses')}
            buttonClassName={styles.navigation__button}
          >
            Courses <Shevron className={styles.navigation__shevron} />
          </Button>
        </li>

        <li className={styles.navigation__li}>
          <Button
            onClick={() => scrollIntoViewHandler('#About')}
            buttonClassName={styles.navigation__button}
          >
            About
          </Button>
        </li>

        <li className={styles.navigation__li}>
          <Button
            onClick={() => scrollIntoViewHandler('#Contact')}
            buttonClassName={styles.navigation__button}
          >
            Contact us
          </Button>
        </li>
      </ul>
    </nav>
  )
}
