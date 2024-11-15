import { Button } from '../'

import styles from './Hero.module.scss'

import heroImg from '../../assets/images/hero.webp'

export const Hero = () => {
  return (
    <section id='Home' className={styles.hero}>
      <div className='container'>
        <div className={styles.hero__content}>
          <div className={styles.hero__info}>
            <h1 className={styles.hero__title}>
              <span>Welcome to &nbsp;</span>
              Dickens Executive Coaching Academy
            </h1>

            <p className={styles.hero__description}>
              Your resource of choice for coaching education
            </p>

            <Button buttonClassName={styles.hero__button}>Explore Courses</Button>
          </div>

          <div className={styles.hero__picture}>
            <img className={styles.hero__img} src={heroImg} alt="coaching session" />
          </div>
        </div>
      </div>
    </section>
  )
}
