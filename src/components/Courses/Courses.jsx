import { CourseItem, Title } from '..'
import { COURSES } from '../../data/index.js'

import styles from './Courses.module.scss'

export const Courses = () => {
  return (
    <section id='Courses' className={styles.courses}>
      <div className="container">
        <Title>
          Our courses
        </Title>

        <ul className={styles.courses__list}>
          {COURSES.map(course => (
            <CourseItem key={course.id} course={course} />
          ))}
        </ul>
      </div>
    </section>
  )
}
