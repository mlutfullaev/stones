import React from 'react';
import infoBg from '../../assets/img/statics-bg.png';

import './servicesPage.scss';
import Header from "../Header/Header";

const ServicesPage = () => {
  return (
    <div className='services-page'>
      <Header logo='white'/>
      <div className="container">
        <div className="title">Камин</div>
        <div className="services-info">
          <div className='info-text'>
            <h1 className="title">Камины из натурального мрамора</h1>
            <p className="text">Холодные зимние вечера – это идеальное время для того, чтобы уютно устроиться у камина. И если вы хотите создать в своем доме настоящую атмосферу тепла и уюта, то камин из мрамора – это именно то, что вам нужно!</p>
            <p className="text">Мрамор – это элегантный и изысканный материал, который придает интерьеру роскошный вид. Камин из мрамора – это не только функциональный предмет, но и настоящее произведение искусства. Он станет главным украшением вашего дома и привлечет внимание всех гостей.</p>
            <p className="text">Камин из мрамора – это не только красиво, но и практично. Он обеспечивает комфортную температуру в помещении, а также создает особую атмосферу для отдыха и развлечений. Вы можете наслаждаться теплом огня и приятным шумом дров, сидя в уютном кресле или диване.</p>
            <button className="btn">Подробнее</button>
          </div>
          <div className="info-img">
            <img src={infoBg} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;