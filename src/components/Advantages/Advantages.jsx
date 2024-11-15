import { AdvantagesCard, Title } from '..'

import styles from './Advantages.module.scss'

import RocketIcon from '../../assets/icons/rocket.svg?react'
import LampIcon from '../../assets/icons/lamp.svg?react'
import BookIcon from '../../assets/icons/book.svg?react'

export const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <div className="container">
        <div className={styles.advantages__content}>
          <Title titleClassName={styles.advantages__title}>
            advantages
          </Title>

          <ul className={styles.advantages__cards}>
            <AdvantagesCard
              icon={<RocketIcon className={styles.advantages__icon} />}
              title='Launch Your Coaching Career'
              text='A comprehensive course track to ICF credentialing'
            />

            <AdvantagesCard
              icon={<LampIcon className={styles.advantages__icon} />}
              title='Coaching in the workplace'
              text='Serve as a thought leader within your organization'
            />

            <AdvantagesCard
              icon={<BookIcon className={styles.advantages__icon} />}
              title='Continuing Coaching Education'
              text="Beginner or a seasoned pro, you'll find a course right for you"
            />
          </ul>
        </div>
      </div>
    </section>
  )
}
