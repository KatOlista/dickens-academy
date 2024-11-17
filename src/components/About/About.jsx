import { LinkWithArrow, Title } from '..'

import styles from './About.module.scss'

import team from '../../assets/images/team.webp'

export const About = () => {
  return (
    <section id='About' className={styles.about}>
      <div className="container">
        <div className={styles.about__header}>
          <Title titleClassName={styles.about__title}>
            About us
          </Title>

          <LinkWithArrow link='./' title='learn more' />
        </div>

        <div className={styles.about__content}>
          <img className={styles.about__image} src={team} alt="We are the team" />

          <div className={styles.about__info}>
            <div className={styles.about__team}>
              <h3 className={styles.about__subtitle}>Hi, we’re Dickens Executive Coaching Academy</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur. Odio nec dictum tortor id proin rhoncus elit. Orci lacus pellentesque ultrices ut aliquet non fusce faucibus dictumst. Massa sit aliquam quam urna nam. Maecenas massa varius scelerisque pellentesque. Vestibulum ut rhoncus iaculis eleifend. Euismod cras et tortor at pellentesque duis cursus donec.
              </p>
            </div>

            <div className={styles.about__results}>
              <div className={styles.about__result}>
                <span>5+</span>

                <p>years on the educational market</p>
              </div>
              <div className={styles.about__result}>
                <span className={styles.about__count}>1000+</span>

                <p>successful graduates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
