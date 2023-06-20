import React from 'react';
import error from '../../assets/img/error.png';

import './error.scss';

const Error = () => {
  return (
    <div className='error'>
      <img src={error} alt=""/>
      <h1>Что-то пошло не так</h1>
    </div>
  );
};

export default Error;