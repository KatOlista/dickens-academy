import { useState } from 'react'

import { Button, Input } from '..'

import styles from './FaqForm.module.scss'

export const FaqForm = () => {
  const [nameInputValue, setNameInputValue] = useState('');
  const [emailInputValue, setEmailInputValue] = useState('');

  const submitFormHandler = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={submitFormHandler} className={styles.form}>
      <h3 className={styles.form__title}>Ask your question</h3>

      <hr className={styles.form__hr} />

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

        <textarea
          name="question"
          id="question"
          className={styles.form__question}
          placeholder='Enter Your Question Here .....'
        />
      </div>

      <Button
        type='submit'
        buttonClassName={styles.form__submit}
      >
        Send your message
      </Button>
    </form>
  )
}
