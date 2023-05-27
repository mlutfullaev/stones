import React from 'react';
import stoneLeft from '../../../assets/img/stone-left.png'
import stoneRight from '../../../assets/img/store-right.png'
import staticsImg from '../../../assets/img/statics-img.png'
import staticsBg from '../../../assets/img/statics-bg.png'
import staticsTextBg from '../../../assets/img/statics-text-bg.png'

import './statics.scss';

const Statics = () => {
  return (
    <section className="statics" style={{backgroundImage: `url(${staticsTextBg})`}}>
      <img src={stoneLeft} className='stone-left' alt=""/>
      <img src={stoneRight} className='stone-right' alt=""/>
      <div className="container">
        <h1 className="title">СОВРЕМЕННЫЕ СКАЛДСКИЕ КОМПЛЕКСЫ <br/><span>НАТУРАЛЬНОГО КАМНЯ</span></h1>
      </div>
      <div className="statics-inner">
        <div className="statics-img" style={{backgroundImage: `url(${staticsBg})`}}>
          <img src={staticsImg} alt=""/>
        </div>
        <div className="statics-text">
          <h3>850000 м²</h3>
          <p className='text'>Натурального камня в наличии на складе</p>
          <h3>Свыше 370</h3>
          <p className='text'>Сортов мрамора, гранита, оникса, травертина,
            кварцита и кварцевого аглометра</p>
          <h3>20000 м²</h3>
          <p className='text'>Общей складской территории</p>
          <h3>17</h3>
          <p className='text'>Стран поставщиков натурального камня по
            всему миру</p>
        </div>
      </div>
    </section>
  );
};

export default Statics;