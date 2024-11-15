import styles from './LinkWithArrow.module.scss'

import Arrow from '../../../assets/icons/arrow.svg?react'

export const LinkWithArrow = ({ link, title }) => {
  return (
    <a className={styles.link} href={link} target='_blank'>
      <span><Arrow /></span>

      {title}
    </a>
  )
}
