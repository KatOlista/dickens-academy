import styles from './TestimonialSliderCard.module.scss'

export const TestimonialSliderCard = ({ testimonial }) => {
  const {
    name,
    role,
    stars,
    photo,
    feedback
  } = testimonial;

  return (
    <div className={styles.card}>
      <img className={styles.card__image} src={photo} alt="photo" />

      <div className={styles.card__info}>
        <p className={styles.card__name}>{name}</p>

        <p className={styles.card__role}>{role}</p>

        <img className={styles.card__stars} src={stars} alt="stars" />

        <p className={styles.card__feedback}>{feedback}</p>
      </div>
    </div>
  )
}
