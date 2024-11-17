import { useState } from 'react'
import cn from 'classnames'

import { Button } from '..'

import styles from './FaqCard.module.scss'

import MinusIcon from '../../assets/icons/minus.svg?react'
import PlusIcon from '../../assets/icons/plus.svg?react'

export const FaqCard = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeInfoHandler = () => {
    setIsOpen(false);
  };

  const openInfoHandler = () => {
    setIsOpen(true);
  };

  return (
    <li
      className={cn(
        styles.card,
        { [styles.card__padding]: isOpen },
      )}
    >
      <div className={styles.card__info}>
        <h5
          className={cn(
            styles.card__title,
            { [styles['card__title-padding']]: isOpen },
          )}
        >
          {faq.title}
        </h5>

        <div
          className={cn(
            styles.card__description,
            { [styles.card__visible]: isOpen },
          )}
        >
          <hr className={styles.card__hr} />

          <p>{faq.description}</p>
        </div>
      </div>

      <div className={styles.card__control}>
        {isOpen
          ? (
              <Button
                buttonClassName={styles.card__button}
                onClick={closeInfoHandler}
              >
                <MinusIcon />
              </Button>
          ) : (
              <Button
                onClick={openInfoHandler}
                buttonClassName={styles.card__button}
              >
                <PlusIcon />
              </Button>
        )}
      </div>
    </li>
  )
}
