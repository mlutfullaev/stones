import React from 'react';
import {Link} from "react-router-dom";

import './headerNav.scss'

const HeaderNav = () => {
  return (
    <nav className="header-nav">
      <ul className='nav-list'>
        <li className='nav-item'>
          <Link to='/'>Главная</Link>
        </li>
        <li className='nav-item'>
          <a href="#">О компании</a>
        </li>
        <li className='nav-item'>
          <Link to="/blog">Новости</Link>
        </li>
        <li className='nav-item'>
          <Link to='/services'>Услуги</Link>
        </li>
        <li className='nav-item'>
          <a href="/catalog">Каталог</a>
        </li>
        <li className='nav-item'>
          <a href="#">Информация</a>
        </li>
        <li className='nav-item'>
          <Link to="/contacts">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;