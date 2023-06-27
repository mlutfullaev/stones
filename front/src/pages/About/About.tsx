import React from 'react'
import './about.scss'
import Header from '../../layouts/Header/Header'
import Info from '../Main/Info/Info'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

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


export default function About() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className='contanct'>
      <Header />
      <div className="main" style={{marginBottom: "20px"}}>
        <Info/>
        <h1 className='contact__title' >Наши партнеры</h1>
        <Swiper
        slidesPerView={6}
        spaceBetween={1}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide><img width={100} height={50} src={parner1} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner2} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner3} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner4} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner5} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner6} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner7} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner8} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner9} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner10} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner11} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner12} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner13} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner14} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner15} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner16} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner17} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner18} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner19} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner20} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner21} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner22} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner23} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner24} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner25} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner26} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner27} alt="" /></SwiperSlide>
        <SwiperSlide><img width={100} height={50} src={parner28} alt="" /></SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}
