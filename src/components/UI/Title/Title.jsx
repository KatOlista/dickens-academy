import styles from './Title.module.scss'

export const Title = ({ children, titleClassName }) => {
  return (
    <h2 className={`${styles.title} ${titleClassName}`}>
      {children}
    </h2>
  )
}
