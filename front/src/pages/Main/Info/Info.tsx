import React, {useRef, useState} from 'react';
import Slider from "react-slick";
import infoBg from "../../../assets/img/info/infobg.png";
import info1 from "../../../assets/img/info/info.png";
import info2 from "../../../assets/img/info/info1.png";
import info3 from "../../../assets/img/info/info2.png";

import './info.scss';
import { Link } from 'react-router-dom';

const Info = () => {
  const infoSlides = [info1, info1, info1]
  const [infoSlide, setInfoSlide] = useState<number>(1);
  const infoSlideRef = useRef(null);

  return (
    <section className="info" style={{backgroundImage: `url(${infoBg})`}}>
      <div className="info-text">
        <h2 className="title">{"<<В КАМНЕ>> - ЛИДЕР САНКТ-ПЕТЕРБУРГА"}</h2>
        <p className="text">
          Наша компания является лидером в области работы с камнем. Мы предоставляем широкий спектр услуг по обработке,
          установке и реставрации камня.<br/><br/>
          Мы работаем с различными видами камня, включая гранит, мрамор, известняк и травертин. Наша команда
          профессионалов имеет богатый опыт работы с камнем и всегда готова
          предложить нашим клиентам лучшие решения для их проектов.<br/><br/>
          Мы предоставляем услуги по изготовлению столешниц, полов, каминов, ванных комнат и других элементов интерьера
          из камня. Мы также специализируемся на установке наружных элементов из камня, таких как площадки, ступени и
          дорожки.<br/><br/>
          Наша компания также предоставляет услуги по реставрации поврежденных каменных поверхностей. Мы используем
          только
          высококачественные материалы и инструменты для восстановления камня в его первоначальное состояние.
        </p>
        <Link to="/about">
        <button className="btn black">Подробнее
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
            <path
              d="M19.7071 8.70711C20.0976 8.31658 20.0976 7.68342 19.7071 7.2929L13.3431 0.928934C12.9526 0.538409 12.3195 0.538409 11.9289 0.928933C11.5384 1.31946 11.5384 1.95262 11.9289 2.34315L17.5858 8L11.9289 13.6569C11.5384 14.0474 11.5384 14.6805 11.9289 15.0711C12.3195 15.4616 12.9526 15.4616 13.3431 15.0711L19.7071 8.70711ZM-1.01226e-07 9L19 9L19 7L1.01226e-07 7L-1.01226e-07 9Z"
              fill="black" fillOpacity="0.73"/>
          </svg>
        </button>
        </Link>
      </div>
      <div className="info-slide">
        <Slider ref={infoSlideRef} {...infoSettings} beforeChange={index => setInfoSlide(index + 1)}>
          <div className="info-img">
            <img src={info2} style={{minHeight: "380px"}} alt=""/>
          </div>
          <div className="info-img">
            <img src={info1} style={{minHeight: "380px"}} alt=""/>
          </div>
          <div className="info-img">
            <img src={info3} style={{minHeight: "380px"}} alt=""/>
          </div>
        </Slider>
        <div className="slider-bottom">
          {/* @ts-ignore*/}
          <button onClick={() => infoSlideRef.current.slickPrev()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 28 16" fill="none">
              <path
                d="M0.292891 7.29289C-0.0976334 7.68342 -0.0976334 8.31658 0.292891 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292891 7.29289ZM28 7L0.999998 7V9L28 9V7Z"
                fill="black"/>
            </svg>
          </button>
          <p>{infoSlide}<span>/{infoSlides.length}</span></p>
          {/* @ts-ignore*/}
          <button onClick={() => infoSlideRef.current.slickNext()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="16" viewBox="0 0 28 16" fill="none">
              <path
                d="M27.7071 8.70711C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.928932C20.9526 0.538408 20.3195 0.538408 19.9289 0.928932C19.5384 1.31946 19.5384 1.95262 19.9289 2.34315L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.70711ZM0 9L27 9V7L0 7L0 9Z"
                fill="black"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

const infoSettings = {
  className: "center",
  centerMode: true,
  infinite: true,
  slidesToShow: 2,
  speed: 500,
  arrows: false,
  responsive: [
    {
      breakpoint: 470,
      settings: {
        slidesToShow: 1,
        centerPadding: '20px'
      }
    },
  ]
};

export default Info;