import { useState } from 'react'
import { Button, Input } from '..'

import styles from './ContactForm.module.scss'

export const ContactForm = () => {
  const [nameInputValue, setNameInputValue] = useState('');
  const [emailInputValue, setEmailInputValue] = useState('');

  const submitFormHandler = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={submitFormHandler} className={styles.form}>
      <div className={styles.form__inputs}>
        <Input
          placeholder='Name'
          value={nameInputValue}
          onChange={setNameInputValue}
        />

        <Input
          placeholder='Email'
          value={emailInputValue}
          onChange={setEmailInputValue}
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
