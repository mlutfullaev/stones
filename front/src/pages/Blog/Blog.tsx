import React from 'react';
import blogLeft from '../../assets/img/blog/blog-left.png';
import blogRight from '../../assets/img/blog/blog-right.png';
import blog1 from '../../assets/img/blog/blog-img1.png';
import blog2 from '../../assets/img/blog/blog-img2.png';
import blog3 from '../../assets/img/blog/blog-img3.png';

import Header from "../../layouts/Header/Header";

import './blog.scss';
import {Link} from "react-router-dom";

const blogs = [
  {
    title: 'КРАСОТА И ДОЛГОВЕЧНОСТЬ КВАРЦЕВОГО КАМНЯ: ПОДРОБНОЕ РУКОВОДСТВО',
    img: blog1,
    link: '#',
    date: 'Апрель 30, 2023'
  },
  {
    title: 'НИ ХОЛОДНО, НИ ЖАРКО: ТЕПЛЫЕ И ХОЛОДНЫЕ ТОНА В ИНТЕРЬЕРЕ ИЗ НАТУРАЛЬНОГО КАМНЯ',
    img: blog2,
    link: '#',
    date: 'Апрель 30, 2023'
  },
  {
    title: 'НАТУРАЛЬНЫЙ КАМЕНЬ В ИНТЕРЬЕРЕ КВАРТИРЫ',
    img: blog3,
    link: '#',
    date: 'Апрель 30, 2023',
  },
  {
    title: 'КРАСОТА И ДОЛГОВЕЧНОСТЬ КВАРЦЕВОГО КАМНЯ: ПОДРОБНОЕ РУКОВОДСТВО',
    img: blog1,
    link: '#',
    date: 'Апрель 30, 2023'
  },
  {
    title: 'НИ ХОЛОДНО, НИ ЖАРКО: ТЕПЛЫЕ И ХОЛОДНЫЕ ТОНА В ИНТЕРЬЕРЕ ИЗ НАТУРАЛЬНОГО КАМНЯ',
    img: blog2,
    link: '#',
    date: 'Апрель 30, 2023'
  },
  {
    title: 'НАТУРАЛЬНЫЙ КАМЕНЬ В ИНТЕРЬЕРЕ КВАРТИРЫ',
    img: blog3,
    link: '#',
    date: 'Апрель 30, 2023',
  },
  {
    title: 'КРАСОТА И ДОЛГОВЕЧНОСТЬ КВАРЦЕВОГО КАМНЯ: ПОДРОБНОЕ РУКОВОДСТВО',
    img: blog1,
    link: '#',
    date: 'Апрель 30, 2023'
  },
  {
    title: 'НИ ХОЛОДНО, НИ ЖАРКО: ТЕПЛЫЕ И ХОЛОДНЫЕ ТОНА В ИНТЕРЬЕРЕ ИЗ НАТУРАЛЬНОГО КАМНЯ',
    img: blog2,
    link: '#',
    date: 'Апрель 30, 2023'
  },
  {
    title: 'НАТУРАЛЬНЫЙ КАМЕНЬ В ИНТЕРЬЕРЕ КВАРТИРЫ',
    img: blog3,
    link: '#',
    date: 'Апрель 30, 2023',
  },
]

const Blog = () => {
  return (
    <div className='blogs'>
      <img src={blogLeft} className='blog-left' alt=""/>
      <img src={blogRight} className='blog-right' alt=""/>
      <Header />
      <div className="container">
        <h1 className="title">БЛОГ</h1>
        <div className="blogs-content">
          {blogs.map(blog =>
            <div className="blog">
              <img src={blog.img} alt=""/>
              <h2>{blog.title}</h2>
              <p className="date">{blog.date} | <Link to='/blog'>Блог</Link></p>
              <div className='more'>
                <div className='line'></div>
                <a href={blog.link}>Подробнее</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;