import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button, TestimonialSliderCard, Title } from '..'
import { TESTIMONIALS } from '../../data'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import styles from './Testimonials.module.scss'

import ShevronIcon from '../../assets/icons/shevron.svg?react'

export const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <Title>
          Testimonials
        </Title>

        <div className={styles.testimonials__slider}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}

            loop

            autoplay={{
              delay: 300000,
            }}

            pagination={{
              clickable: true,
              el: `.${styles.testimonials__bullets}`,
              bulletClass: styles.testimonials__bullet,
              bulletActiveClass: styles['testimonials__bullet-active'],
            }}

            navigation={{
              prevEl: `.${styles['testimonials__button-prev']}`,
              nextEl: `.${styles['testimonials__button-next']}`,
            }}

            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24
              }
            }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialSliderCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.testimonials__buttons}>
          <Button buttonClassName={styles['testimonials__button-prev']}>
            <ShevronIcon className={styles.testimonials__icon} />
          </Button>

          <ul className={styles.testimonials__bullets} />

          <Button buttonClassName={styles['testimonials__button-next']}>
            <ShevronIcon />
          </Button>
        </div>
      </div>
    </section>
  )
}
