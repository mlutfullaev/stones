import React from 'react';

const HeaderNav = () => {
  return (
    <nav className="header-nav">
      <ul className='nav-list'>
        <li className='nav-item'>
          <a href="#">Главная</a>
        </li>
        <li className='nav-item'>
          <a href="#">О компании</a>
        </li>
        <li className='nav-item'>
          <a href="#">Новости</a>
        </li>
        <li className='nav-item'>
          <a href="#">Услуги</a>
        </li>
        <li className='nav-item'>
          <a href="#">Портфолио</a>
        </li>
        <li className='nav-item'>
          <a href="#">Информация</a>
        </li>
        <li className='nav-item'>
          <a href="#">Контакты</a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;