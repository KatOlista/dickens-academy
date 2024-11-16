import { FaqCard, FaqForm, Title } from '..'
import { FAQS } from '../../data'

import styles from './FAQ.module.scss'

export const FAQ = () => {
  return (
    <section className={styles.faq}>
      <div className="container">
        <Title>
          faq
        </Title>

        <div className={styles.faq__content}>
          <ul className={styles.faq__questions}>
            {FAQS.map(faq => (
              <FaqCard key={faq.id} faq={faq} />
            ))}

          </ul>

          <div className={styles.faq__form}>
            <FaqForm />
          </div>
        </div>
      </div>
    </section>
  )
}
