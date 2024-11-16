import { Button } from '../'

import styles from './Navigation.module.scss'

import Shevron from '../../assets/icons/shevron.svg?react'
import { scrollIntoView } from '../../utils/'

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__li}>
          <Button
            onClick={() => scrollIntoView('#Home')}
            buttonClassName={styles.navigation__button}
          >
            Home
          </Button>
        </li>

        <li className={styles.navigation__li}>
          <Button
            onClick={() => scrollIntoView('#Courses')}
            buttonClassName={styles.navigation__button}
          >
            Courses <Shevron className={styles.navigation__shevron} />
          </Button>
        </li>

        <li className={styles.navigation__li}>
          <Button
            onClick={() => scrollIntoView('#About')}
            buttonClassName={styles.navigation__button}
          >
            About
          </Button>
        </li>

        <li className={styles.navigation__li}>
          <Button
            onClick={() => scrollIntoView('#Contact')}
            buttonClassName={styles.navigation__button}
          >
            Contact us
          </Button>
        </li>
      </ul>
    </nav>
  )
}
