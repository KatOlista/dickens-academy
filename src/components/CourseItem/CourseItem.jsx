import { Button, LinkWithArrow, ProgramItem, Subtitle } from '..'

import styles from './CourseItem.module.scss'

import StarIcon from '../../assets/icons/white-star.svg?react'
import ClockIcon from '../../assets/icons/clock.svg?react'
import DesktopIcon from '../../assets/icons/online.svg?react'
import LanguageIcon from '../../assets/icons/language.svg?react'
import ModulesIcon from '../../assets/icons/modules.svg?react'

export const CourseItem = ({ course }) => {
  const {
    title,
    duration,
    modules,
    format,
    language,
    subtitle,
    lists,
    price
  } = course;

  return (
    <li className={styles.item}>
      <div className={styles.item__header}>
        <Subtitle subtitleClassName={styles.item__title}>
          <span><StarIcon /></span>
          {title}
        </Subtitle>

        <LinkWithArrow link='./' title='Details' />
      </div>

      <ul className={styles.item__icons}>
        <li><ClockIcon /> {duration}</li>

        {!!modules && (
          <li><ModulesIcon /> {modules}</li>
        )}

        <li><DesktopIcon /> {format}</li>

        <li><LanguageIcon /> {language}</li>
      </ul>

      <p className={styles.item__subtitle}>{subtitle}</p>

      <ul className={styles.item__list}>
        {lists.map(list => (
          <ProgramItem key={list.id} list={list} />
        ))}
      </ul>

      <p className={styles.item__price}>
        <span>Price</span>
        <span>{price}</span>
      </p>

      <Button buttonClassName={styles.item__join}>JOIN</Button>
    </li>
  )
}
