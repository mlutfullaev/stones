import React from 'react';
import advantagesStone from '../../../assets/img/advantages/advantages-stone.png';
import advantages1 from '../../../assets/img/advantages/advantages-01.png'
import advantages2 from '../../../assets/img/advantages/advantages-02.png'
import advantages3 from '../../../assets/img/advantages/advantages-03.png'
import advantages4 from '../../../assets/img/advantages/advantages-04.png'
import advantages5 from '../../../assets/img/advantages/advantages-05.png'
import advantages6 from '../../../assets/img/advantages/advantages-06.png'

import './advantages.scss'

const Advantages = () => {
  return (
    <section className='advantages'>
      <img src={advantagesStone} alt=""/>
      <div className="container">
        <h1 className="title">НАШИ ПРЕИМУЩЕСТВА</h1>
        <div className="advantages-inner">
          <div className="advantage">
            <img src={advantages1} alt=""/>
            <h3>Огромный выбор природного камня</h3>
            <p>Сотрудничество с нами дает вам возможность выбрать именно тот натуральный камень, который поможет максимально реализовать вашу дизайнерскую идею!</p>
          </div>
          <div className="advantage">
            <img src={advantages2} alt=""/>
            <h3>Собственная производственная база</h3>
            <p>Полное техническое оснащение, опыт и профессионализм сотрудников позволяют эффективно и качественно осуществлять весь спектр работ любого уровня! </p>
          </div>
          <div className="advantage">
            <img src={advantages3} alt=""/>
            <h3>30 лет на рынке</h3>
            <p>Основана в Санкт-Петербурге в 1991 году. «В КАМНЕ» зарекомендовала себя, как стабильный и надежный партнер, став одним из ведущих предприятий в области поставки натурального камня и камнеобработки!</p>
          </div>
          <div className="advantage">
            <img src={advantages4} alt=""/>
            <h3>Доставка по всей России</h3>
            <p>Для обсуждения вопросов доставки камня – связывайтесь с менеджерами компании по телефону: +7 911 742-87-10 (звонок бесплатный из любых регионов России)</p>
          </div>
          <div className="advantage">
            <img src={advantages5} alt=""/>
            <h3>Производственная компания полного цикла</h3>
            <p>Изготавливаем и проектируем интерьеры и изделия любой сложности с использованием натурального камня, кварцевого агломерата и кварцекерамики</p>
          </div>
          <div className="advantage">
            <img src={advantages6} alt=""/>
            <h3>Долговечность и надежность</h3>
            <p>Мрамор – это камень, который славится своей прочностью и долговечностью. Поэтому продукция, изготовленная из мрамора, будет служить долгие годы.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;