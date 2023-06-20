import React from 'react';
import empty from '../../assets/img/404.png';

import './empty.scss';

const Empty = () => {
  return (
    <div className='empty'>
      <img src={empty} alt=""/>
      <h1>Ничего не найдено</h1>
    </div>
  );
};

export default Empty;