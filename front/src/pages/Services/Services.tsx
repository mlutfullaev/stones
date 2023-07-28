import React, { useEffect, useState } from 'react';
import {ServiceT} from "../../@types";
import Header from "../../layouts/Header/Header";
import Projects from "../../components/Projects/Projects";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Empty from "../../components/Empty/Empty";
import { HOST_URL } from "../../assets/consts";
import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import './Services.scss'
import { Pagination } from 'swiper';

import eksteryer1 from '../../assets/img/eksteryer/kovanye-ograzhdeniya.jpg'
import eksteryer2 from '../../assets/img/eksteryer/2.jpg'
import eksteryer3 from '../../assets/img/eksteryer/3.jpg'

import inter1 from '../../assets/img/interyer/1.jpg'
import inter2 from '../../assets/img/interyer/1056.970.jpg'
import inter3 from '../../assets/img/interyer/2.jpg'
import inter4 from '../../assets/img/interyer/3.jpg'
import inter5 from '../../assets/img/interyer/kamin.jpg'
import inter6 from '../../assets/img/interyer/wood.jpg'

const Services = () => {
  const [services, setServices] = useState<ServiceT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filteredServices, setFilteredServices] = useState<ServiceT[]>([])
  const [filter, setFilter] = useState('')
  // const [eksteryerPopup, setEksteryerPopup] = useState(false)
  // const [interyerPopup, setInteryerPopup] = useState(false)
  // const [eksteryersObj, setEksteryersObj] = useState([])
  // const [interyersObj, setInteryersObj] = useState([])

  // const [mapServices, setMapServices] = useState([])

  // const eksteryer = [eksteryer1, eksteryer2, eksteryer3]
  // const interyer = [inter1, inter2, inter3, inter4, inter5, inter6]


  useEffect(() => {
    setLoading(true)
    axios.get(`${HOST_URL}service`)
      .then((res: any) => {
        setLoading(false);
        setError(false);
        setServices(res.data);
        setFilteredServices(res.data)
        // setMapServices(res.data)
        // setEksteryersObj(res.data[1])
        // setInteryersObj(res.data[2])
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      })
  }, []);

    useEffect(() => {
        setFilteredServices(services.filter(item => item.interorekster.includes(filter)))
    }, [services, filter]);

  return (
    <div>
      <Header />
      {loading && <Loading />}
      {error && <Error />}
      {!error && !loading ?
        filteredServices.length ?
          <Projects projects={filteredServices}>
            <h1 className="title">Услуги</h1>
            <div style={{ marginTop: 20 }}>
              <button className={`btn ${filter === 'Изделия в интерьере' ? 'grey' : 'grey-outline'}`} style={{ marginRight: 20 }} onClick={() => filter === 'Изделия в интерьере' ? setFilter('') : setFilter("Изделия в интерьере")}>Изделия в интерьере</button>
              <button className={`btn ${filter === 'Изделия в экстерьере' ? 'grey' : 'grey-outline'}`} onClick={() => filter === 'Изделия в экстерьере' ? setFilter('') : setFilter("Изделия в экстерьере")}>Изделия в экстерьере</button>
            </div>
          </Projects> : <Empty />
        : null}
      {/*{eksteryerPopup &&*/}
      {/*  <div id="myModal" className="modal">*/}

      {/*    <div className='modal_content modal_eksteryer'>*/}
      {/*      <Swiper*/}
      {/*        slidesPerView={1}*/}
      {/*        spaceBetween={1}*/}
      {/*        pagination={true}*/}
      {/*        modules={[Pagination]}*/}
      {/*        loop={true}*/}
      {/*      >*/}
      {/*        {eksteryer.map((image, i) => (*/}
      {/*          <SwiperSlide key={i}><img width="100%" height="100%" src={image} alt="vkamne" /></SwiperSlide>*/}
      {/*        ))}*/}
      {/*      </Swiper>*/}
      {/*      <svg onClick={() => setEksteryerPopup(false)} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" /></svg>*/}
      {/*    </div>*/}

      {/*  </div>*/}
      {/*}*/}

      {/*{interyerPopup &&*/}
      {/*  <div id="myModal" className="modal">*/}

      {/*    <div className='modal_content modal_eksteryer'>*/}
      {/*      <Swiper*/}
      {/*        slidesPerView={1}*/}
      {/*        spaceBetween={1}*/}
      {/*        pagination={true}*/}
      {/*        modules={[Pagination]}*/}
      {/*        loop={true}*/}
      {/*      >*/}
      {/*        {interyer.map((image, i) => (*/}
      {/*          <SwiperSlide key={i}><img width="100%" height="100%" src={image} alt="vkamne" /></SwiperSlide>*/}
      {/*        ))}*/}
      {/*      </Swiper>*/}
      {/*      <svg onClick={() => setInteryerPopup(false)} clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" /></svg>*/}
      {/*    </div>*/}

      {/*  </div>*/}
      {/*}*/}

      <div className="container">
        <div className="activity" style={{ padding: '30px 0' }}>
          <h1 className="title">Деятельность</h1>
          <p className="grey-text" style={{ padding: '20px 0' }}>Камнеобрабатывающая компания "В КАМНЕ" занимается поставкой натурального камня с отечественных и зарубежных карьеров на свой склад (в наличие более 10 000 м2), проектированием, изготовлением и монтажом изделий, облицовкой пола и стен плитами мрамора, гранита, оникса, кварцита и известняка, реставрационными работами, облицовкой зданий «мокрым» способом, а также вентилируемыми фасадами.</p>
          <p className="grey-text">Мы изготавливаем и устанавливаем камины, лестницы, подоконники, столешницы, порталы, колонны, пилястры, архитрав и различные элементы декора. Наши специалисты занимаются архитектурным проектированием и моделированием каменных изделий, благодаря которому возможно не только воплощение дизайнерских решений, но и создание уникальных предметов интерьера.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;