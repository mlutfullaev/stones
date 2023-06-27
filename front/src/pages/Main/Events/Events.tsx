import React, {useState} from "react";
import Slider from "react-slick";
import eventImg from "../../../assets/img/event.png";

import './events.scss';
import { Link } from "react-router-dom";

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const NextSlide = (props: any) => {
    const {className, onClick} = props;
    return (
      <div
        className={className}
        style={{display: currentSlide < 2 ? 'block' : 'none',}}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="62" viewBox="0 0 32 62" fill="none">
          <path d="M2 2.5L27.7217 24.9865C30.7594 28.0555 30.7594 33.0774 27.7217 36.1464L2 60" stroke="#444444"
                strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    )
  }
  const PrevSlide = (props: any) => {
    const {className, onClick} = props;
    return (
      <div
        className={className}
        style={{ display: currentSlide > 0 ? 'block' : 'none',}}
        onClick={onClick}
      >
        <svg width="32" height="62" viewBox="0 0 32 62" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 59.5L4.27827 37.0135C1.24058 33.9445 1.24058 28.9226 4.27827 25.8536L30 2" stroke="#444444"
                strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0px",
    centerMode: true,
    prevArrow: <PrevSlide />,
    nextArrow: <NextSlide />
  };

  return (
    <section className="events">
      <div className="container">
        <h1 className="title">НАШИ АКЦИИ!</h1>
        <div className="events-slider">
          <Slider {...settings} afterChange={index => setCurrentSlide(index)}>
            <div>
              <div className="event">
                <div className="event-text">
                  <h3>Превратите свой дом в шедевр с мраморными <span>плитами!</span></h3>
                  <p>Наша компания предлагает широкий выбор мраморных плит для любых интерьеров</p>
                  <Link to='/catalog'><button className="btn grey">Смотреть</button></Link>
                </div>
                <img src={eventImg} alt=""/>
              </div>
            </div>
            <div>
              <div className="event">
                <div className="event-text">
                  <h3>Превратите свой дом в шедевр с мраморными <span>плитами!</span></h3>
                  <p>Наша компания предлагает широкий выбор мраморных плит для любых интерьеров</p>
                  <Link to='/catalog'><button className="btn grey">Смотреть</button></Link>
                </div>
                <img src={eventImg} alt=""/>
              </div>
            </div>
            <div>
              <div className="event">
                <div className="event-text">
                  <h3>Превратите свой дом в шедевр с мраморными <span>плитами!</span></h3>
                  <p>Наша компания предлагает широкий выбор мраморных плит для любых интерьеров</p>
                  <Link to='/catalog'><button className="btn grey">Смотреть</button></Link>
                </div>
                <img src={eventImg} alt=""/>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Events;