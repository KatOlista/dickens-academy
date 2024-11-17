import styles from './ProgramItem.module.scss'

import ListMarker from '../../assets/icons/list-marker.svg?react'

export const ProgramItem = ({ list }) => {
  const {listTitle, programs} = list

  return (
    <li className={styles.program}>
      <p className={styles.program__title}>{listTitle}</p>

      <ul className={styles.program__list}>
        {programs.map(program => (
          <li key={program}>
            <ListMarker />

            {program}
          </li>
        ))}
      </ul>
    </li>
  )
}
