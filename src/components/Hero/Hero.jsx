import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { Button } from '../'

import styles from './Hero.module.scss'

import heroImg from '../../assets/images/hero.webp'

export const Hero = () => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.timeline()
      .from(`.${styles.hero__picture}`, {
        opacity: 0,
        delay: 1,
        duration: 1,
      })
      .from(`.${styles.hero__description}`, {
        x: '10%',
        opacity: 0,
        duration: 1,
      });
    });

  return (
    <section id='Home' className={styles.hero}>
      <div className={styles.hero__content}>
        <div className={styles.hero__info}>
          <h1 className={styles.hero__title}>
            <span>Welcome to &nbsp;</span>

            Dickens Executive Coaching Academy
          </h1>

          <p className={styles.hero__description}>
            Your resource of choice for coaching education
          </p>

          <Button buttonClassName={styles.hero__button}>
            Explore Courses
          </Button>
        </div>

        <img className={styles.hero__img} src={heroImg} alt="coaching session" />
      </div>
    </section>
  )
}
