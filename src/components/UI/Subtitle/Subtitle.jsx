import styles from './Subtitle.module.scss'

export const Subtitle = ({ children, subtitleClassName }) => {
  return (
    <h4 className={`${styles.subtitle} ${subtitleClassName}`}>
      {children}
    </h4>
  )
}
