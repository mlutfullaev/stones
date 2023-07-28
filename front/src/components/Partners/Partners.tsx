import React from 'react'
import parner1 from '../../assets/img/partners/1.jpg'
import parner2 from '../../assets/img/partners/2.jpg'
import parner3 from '../../assets/img/partners/3.jpg'
import parner4 from '../../assets/img/partners/4.jpg'
import parner5 from '../../assets/img/partners/5.jpg'
import parner6 from '../../assets/img/partners/6.jpg'
import parner7 from '../../assets/img/partners/7.jpg'
import parner8 from '../../assets/img/partners/8.jpg'
import parner9 from '../../assets/img/partners/9.jpg'
import parner10 from '../../assets/img/partners/10.jpg'
import parner11 from '../../assets/img/partners/11.jpg'
import parner12 from '../../assets/img/partners/12.jpg'
import parner13 from '../../assets/img/partners/13.jpg'
import parner14 from '../../assets/img/partners/14.jpg'
import parner15 from '../../assets/img/partners/15.jpg'
import parner16 from '../../assets/img/partners/16.jpg'
import parner17 from '../../assets/img/partners/17.jpg'
import parner18 from '../../assets/img/partners/18.jpg'
import parner19 from '../../assets/img/partners/19.jpg'
import parner20 from '../../assets/img/partners/20.jpg'
import parner21 from '../../assets/img/partners/21.jpg'
import parner22 from '../../assets/img/partners/22.jpg'
import parner23 from '../../assets/img/partners/23.jpg'
import parner24 from '../../assets/img/partners/24.jpg'
import parner25 from '../../assets/img/partners/25.jpg'
import parner26 from '../../assets/img/partners/26.jpg'
import parner27 from '../../assets/img/partners/27.jpg'
import parner28 from '../../assets/img/partners/28.jpg'
import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";

export default function Partners() {
  const images = [
    parner1, parner2, parner3, parner4, parner5, 
    parner6, parner7, parner8, parner9, parner10,
    parner11, parner12, parner13, parner14, parner15,
    parner16, parner17, parner18, parner19, parner20,
    parner21, parner22, parner23, parner24, parner25,
    parner26, parner27, parner28
  ]
  return (
    <div>
      <h1 className='contact__title' >Наши партнеры</h1>
      <Swiper
        slidesPerView={6}
        spaceBetween={1}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 6,
          }
        }}
      >
        {images.map((image, i)=> (
          <SwiperSlide key={i}><img width={100} height={50} src={image} alt="vkamne" /></SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
