import styles from './ProgrammItem.module.scss'

import ListMarker from '../../assets/icons/list-marker.svg?react'

export const ProgrammItem = ({ list }) => {
  const {listTitle, programs} = list

  return (
    <li className={styles.programm}>
      <p className={styles.programm__title}>{listTitle}</p>

      <ul className={styles.programm__list}>
        {programs.map(program => (
          <li key={program}>
            <span>
              <ListMarker />
            </span>

            {program}
          </li>
        ))}
      </ul>
    </li>
  )
}
