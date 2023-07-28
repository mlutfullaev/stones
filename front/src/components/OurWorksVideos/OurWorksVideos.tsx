import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/css";
import './OurWorksVideos.scss'
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function OurWorksVideos() {

  const videos = [
    'yPJQjciYf_c', 'nY3Dpywixfw', 'idfbnqLJT7I', 'GzXTjbZYCco', 'meye81X-oI4', 
    'ahoLlniQzlg', 'XP8BjeTjWuk', 'hu79IbyT0x0', 'FRdMV-TIcjM', 'oJdynCHJ_wU'
  ]


  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={1}
      navigation={true}
      modules={[Navigation]}
      loop={true}
      breakpoints={{
        // when window width is >= 640px
        0: {
          slidesPerView: 1,
        },
      }}
    >
      {/* {videos.map(video => (  
        <SwiperSlide key={video}>
          <iframe width="315" height="560" src={'https://www.youtube.com/embed/' + video} title="YouTube video player"></iframe>
        </SwiperSlide>
      ))} */}

        <SwiperSlide>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLTkWDQAHIMHdpZoiL53eg9qgfh5BAgkrR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </SwiperSlide>


    </Swiper>
  )
}
