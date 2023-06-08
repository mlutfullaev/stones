import React from 'react';

import './consultation.scss'

type ConsultationT = {
  title?: string;
  subtitle?: string;
}

const Consultation: React.FC<ConsultationT> = ({title, subtitle}) => {
  return (
    <div className='consultation'>
      <h1>{title || 'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ'}</h1>
      <form action="">
        <p className="subtitle">{subtitle || 'Оставьте заявку и в ближайшее время мы с Вами свяжемся'}</p>
        <label htmlFor="name">Ваше имя</label>
        <input type="text" id='name'/>
        <label htmlFor="phone">Ваш номер телефона *</label>
        <input type="text" id='phone'/>
        <label htmlFor="question">Ваш вопрос</label>
        <textarea rows={4} id='question'/>

        <button className='btn grey'>Задать вопрос</button>
        <p className="subtext">Нажимая кнопку, вы даете согласие на <a href="#">обработку персональных данных</a></p>
      </form>
    </div>
  );
};

export default Consultation;