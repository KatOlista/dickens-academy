import styles from './Subtitle.module.scss'

export const Subtitle = ({ children, subtitleClassName }) => {
  return (
    <h3 className={`${styles.subtitle} ${subtitleClassName}`}>
      {children}
    </h3>
  )
}
