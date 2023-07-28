import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/css";
import './OurWorks.scss'
import "swiper/css/pagination";
import work1 from '../../assets/img/ourworks/1.jpg'
import work2 from '../../assets/img/ourworks/2.jpg'
import work3 from '../../assets/img/ourworks/3.jpg'
import work4 from '../../assets/img/ourworks/4.jpg'
import work5 from '../../assets/img/ourworks/5.jpg'
import work6 from '../../assets/img/ourworks/6.jpg'
import work7 from '../../assets/img/ourworks/7.jpg'
import work8 from '../../assets/img/ourworks/8.jpg'
import work9 from '../../assets/img/ourworks/9.jpg'
import work10 from '../../assets/img/ourworks/10.jpg'
import work11 from '../../assets/img/ourworks/11.jpg'
import work12 from '../../assets/img/ourworks/12.jpg'
import work13 from '../../assets/img/ourworks/13.jpg'
import work14 from '../../assets/img/ourworks/14.jpg'
import work16 from '../../assets/img/ourworks/16.jpg'
import work17 from '../../assets/img/ourworks/17.jpg'
import work18 from '../../assets/img/ourworks/18.jpg'
import work19 from '../../assets/img/ourworks/19.jpg'
import work20 from '../../assets/img/ourworks/20.jpg'
import work21 from '../../assets/img/ourworks/21.jpg'
import work22 from '../../assets/img/ourworks/22.jpg'
import work23 from '../../assets/img/ourworks/23.jpg'
import work24 from '../../assets/img/ourworks/24.jpg'
import work25 from '../../assets/img/ourworks/25.jpg'
import work26 from '../../assets/img/ourworks/26.jpg'
import work27 from '../../assets/img/ourworks/27.jpg'
import work28 from '../../assets/img/ourworks/28.jpg'
import work29 from '../../assets/img/ourworks/29.jpg'
import work30 from '../../assets/img/ourworks/30.jpg'


export default function OurWorks() {

  const images = [
    work1, work2, work3, work4, work5,
    work6, work7, work8, work9, work10,
    work11, work12, work13, work14, work16,
    work17, work18, work19, work20, work21,
    work22, work23, work24, work25, work26,
    work27, work28, work29, work30
  ]



  return (
    <div>
      <h1 className='ourworksimagetitle'>Наши работы</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={1}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          }
        }}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}><img width={400} height={500} src={image} alt="vkamne" /></SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
