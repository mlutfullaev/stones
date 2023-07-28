import React, { useState } from 'react';

import './consultation.scss'
import axios from 'axios';
import { HOST_URL } from '../../assets/consts';

type ConsultationT = {
  title?: string;
  subtitle?: string;
}

const Consultation: React.FC<ConsultationT> = ({title, subtitle}) => {
  const [name, setName]=useState('')
  const [phoneNumber, setPhoneNumber]=useState('')
  const [question, setQuestion]=useState('')



  const sendForm = (e:any)=> {
    e.preventDefault()
    axios.post(`${HOST_URL}/sendmail`, {
      name,
      phoneNumber,
      question
    })
    .then(res=> {
      console.log(res);
    })
    .catch(err=> {
      console.log(err);
      
    })
  }

  
  return (
    <div className='consultation'>
      <h1>{title || 'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ'}</h1>
      <form action="">
        <p className="subtitle">{subtitle || 'Оставьте заявку и в ближайшее время мы с Вами свяжемся'}</p>
        <label htmlFor="name">Ваше имя</label>
        <input value={name} type="text" id='name' onChange={(e)=> setName(e.target.value)}/>
        <label htmlFor="phone">Ваш номер телефона *</label>
        <input value={phoneNumber} type="text" id='phone' onChange={(e)=> setPhoneNumber(e.target.value)}/>
        <label htmlFor="question">Ваш вопрос</label>
        <textarea value={question} rows={4} id='question' onChange={(e)=> setQuestion(e.target.value)} />

        <button className='btn grey' onClick={(e)=>sendForm(e)}>Задать вопрос</button>
        <p className="subtext">Нажимая кнопку, вы даете согласие на <a href="#">обработку персональных данных</a></p>
      </form>
    </div>
  );
};

export default Consultation;