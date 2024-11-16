import styles from './Footer.module.scss'

import Logo from '../../assets/icons/logo.svg'
import { Button } from '../UI/Button/Button'
import { scrollIntoView } from '../../utils'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          <a className={styles.footer__link} href="./">
            <img src={Logo} alt="logo" className={styles.footer__logo} />
          </a>

          <p className={styles.footer__group}>© 2024 Dickens Consulting Group, LLC</p>

          <ul className={styles.footer__list}>
            <li>
              <Button
                onClick={() => scrollIntoView('#Courses')}
                buttonClassName={styles.footer__button}
              >
                Courses
              </Button>
            </li>

            <li>
              <Button
                onClick={() => scrollIntoView('#About')}
                buttonClassName={styles.footer__button}
              >
                About
              </Button>
            </li>

            <li>
              <Button
                onClick={() => scrollIntoView('#Contact')}
                buttonClassName={styles.footer__button}
              >
                Contact
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
