import { Subtitle } from '..'

import styles from './AdvantagesCard.module.scss'

export const AdvantagesCard = ({ icon, title, text }) => {
  return (
    <li className={styles.card}>
      {icon}

      <Subtitle subtitleClassName={styles.card__title}>{title}</Subtitle>

      <p>{text}</p>
    </li>
  )
}
