import { Button } from '..'

import styles from './ContactForm.module.scss'

export const ContactForm = () => {
  const submitFormHandler = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={submitFormHandler} className={styles.form}>
      <div className={styles.form__inputs}>
        <input
          className={styles.form__input}
          type="text"
          placeholder='Name'
        />

        <input
          className={styles.form__input}
          type="text"
          placeholder='Email'
        />
      </div>

      <Button
        type='submit'
        buttonClassName={styles.form__submit}
      >
        Schedule a call
      </Button>
    </form>
  )
}
