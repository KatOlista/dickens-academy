import { ContactForm } from '..'

import styles from './Contact.module.scss'

export const Contact = () => {
  return (
    <section className={styles.contact} id='Contact'>
      <div className="container">
        <div className={styles.contact__content}>
          <div className={styles.contact__info}>
            <h3 className={styles.contact__title}>
              Companies, universities, directors and presidents
            </h3>

            <p>
              If you&apos;d like to learn more information about our work with large organizations, let&apos;s schedule a call.
            </p>
          </div>

          <div className={styles.contact__form}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
