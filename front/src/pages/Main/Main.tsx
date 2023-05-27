import React from "react";
import Slider from "react-slick";
import mainbg from "../../assets/img/main-bg.png";
import bottomStone from "../../assets/img/bottom-stone.png";
import Header from "../../layouts/Header/Header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.scss";
import Statics from "./Statics";
import Info from "./Info";
import Events from "./Events";
import Collection from "./Collection";
import Advantages from "./Advantages";
import Projects from "./Projects";
import Consultation from "../../components/Consultation/Consultation";

const Main = () => {

  return (
    <div className="main">
      <div className="main-bg">
        <Slider {...settings}>
          <div className="main-slide">
            <img src={mainbg} alt=""/>
          </div>
          <div className="main-slide">
            <img src={mainbg} alt=""/>
          </div>
          <div className="main-slide">
            <img src={mainbg} alt=""/>
          </div>
        </Slider>
      </div>
      <Header/>
      <main>
        <div className="container">
          <h1 className="main-title">Современная эстетика, воплощенна в камне...</h1>
          <button className="btn">Подробнее</button>
          <div className="main-arrow">
            <button>
              <svg width="62" height="32" viewBox="0 0 62 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.4998 2L37.0133 27.7217C33.9443 30.7594 28.9224 30.7594 25.8535 27.7217L1.99982 2"
                      stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round"
                      strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </main>
      <Info/>
      <Statics/>
      <Events/>
      <Collection/>
      <Advantages/>
      <Projects/>
      {/*<section className='main-bottom'>*/}
      {/*  <img src={bottomStone} alt=""/>*/}
      {/*  <div className="container">*/}
      {/*    <h1 className="title">ОСТАЛИСЬ ВОПРОСЫ? <br/><span>МЫ ПОМЖЕМ ВАМ!</span></h1>*/}
      {/*    <div className="inner">*/}
      {/*      <Consultation/>*/}
      {/*      <div className="video">*/}
      {/*        <iframe width="560" height="315" src="https://www.youtube.com/embed/n67dRQihNJ4"*/}
      {/*                title="YouTube video player" frameBorder="0"*/}
      {/*                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
      {/*                allowFullScreen></iframe>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  );
};

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  fade: true,
  vertical: true,
  swipe: false,
  slidesToScroll: 1,
};

export default Main;