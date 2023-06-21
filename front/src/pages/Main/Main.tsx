import React from "react";
import Slider from "react-slick";
import {ProjectT} from "../../@types";
import bottomStone from "../../assets/img/bottom-stone.png";
import mainbg from "../../assets/img/main-bg.png";
// import projectStone from '../../assets/img/projects/project-stone.png';
import project1 from "../../assets/img/projects/project1.png";
import project2 from "../../assets/img/projects/project2.png";
import project3 from "../../assets/img/projects/project3.png";
import project4 from "../../assets/img/projects/project4.png";
import project5 from "../../assets/img/projects/project5.png";
import project6 from "../../assets/img/projects/project6.png";
import project7 from "../../assets/img/projects/project7.png";
import project8 from "../../assets/img/projects/project8.png";

import Header from "../../layouts/Header/Header";
import Statics from "./Statics/Statics";
import Info from "./Info/Info";
import Events from "./Events/Events";
import Collection from "./Collection/Collection";
import Advantages from "./Advantages/Advantages";
import Consultation from "../../components/Consultation/Consultation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.scss";

const projects: ProjectT[] = [
  {
    img: project1,
    name: 'Квартира в Сантк-Петербурге',
    link: '#'
  },
  {
    img: project2,
    name: 'Студия интерьера и дизайна  Ganga Gallery',
    link: '#'
  },
  {
    img: project3,
    name: 'Уборная в отеле',
    link: '#'
  },
  {
    img: project4,
    name: 'Частный дом в СПБ',
    link: '#'
  },
  {
    img: project5,
    name: 'Столешницы из камня',
    link: '#'
  },
  {
    img: project6,
    name: 'Ступени из гранита',
    link: '#'
  },
  {
    img: project7,
    name: 'Подоконники из мрамора',
    link: '#'
  },
  {
    img: project8,
    name: 'Балясины',
    link: '#'
  },
]

const Main = () => {

  return (
    <div className="main">
      <div className="main-bg">
        <Slider {...settings}>
          <div className="main-slide">
            <div style={{backgroundImage: `url(${mainbg})`}}></div>
          </div>
          <div className="main-slide">
            <div style={{backgroundImage: `url(${mainbg})`}}></div>
          </div>
          <div className="main-slide">
            <div style={{backgroundImage: `url(${mainbg})`}}></div>
          </div>
        </Slider>
      </div>
      <Header logo={'white'}/>
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
      {/*<Projects projects={projects}>*/}
      {/*  <img className='stone-bg' src={projectStone} alt=""/>*/}
      {/*  <h1 className="title">Проекты с натуральным камнем</h1>*/}
      {/*</ Projects>*/}
      <section className='main-bottom'>
        <img src={bottomStone} alt=""/>
        <div className="container">
          <h1 className="title">ОСТАЛИСЬ ВОПРОСЫ? <br/><span>МЫ ПОМЖЕМ ВАМ!</span></h1>
          <div className="inner">
            <Consultation/>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/n67dRQihNJ4"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
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
  autoplay: true,
  autoplaySpeed: 5000,
};

export default Main;