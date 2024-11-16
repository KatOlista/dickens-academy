import styles from './Input.module.scss'

export const Input = ({ placeholder, value, setValue}) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={setValue}
    />
  )
}
