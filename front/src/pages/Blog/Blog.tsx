import React, {useEffect, useState} from "react";
import blogLeft from "../../assets/img/blog/blog-left.png";
import blogRight from "../../assets/img/blog/blog-right.png";
import axios from "axios";
import {Link} from "react-router-dom";

import Loading from "../../components/Loading/Loading";
import Header from "../../layouts/Header/Header";

import "./blog.scss";
import Error from "../../components/Error/Error";
import Empty from "../../components/Empty/Empty";
import {BlogT} from "../../@types";
import {HOST_URL} from "../../assets/consts";

// const blogs = [
//   {
//     title: "КРАСОТА И ДОЛГОВЕЧНОСТЬ КВАРЦЕВОГО КАМНЯ: ПОДРОБНОЕ РУКОВОДСТВО",
//     img: blog1,
//     link: "#",
//    date: "Апрель 30, 2023"
//  },
//  {
//     title: "НИ ХОЛОДНО, НИ ЖАРКО: ТЕПЛЫЕ И ХОЛОДНЫЕ ТОНА В ИНТЕРЬЕРЕ ИЗ НАТУРАЛЬНОГО КАМНЯ",
//    img: blog2,
//    link: "#",
//     date: "Апрель 30, 2023"
//   },
//   {
//     title: "НАТУРАЛЬНЫЙ КАМЕНЬ В ИНТЕРЬЕРЕ КВАРТИРЫ",
//     img: blog3,
//     link: "#",
//     date: "Апрель 30, 2023",
//   },
//   {
//    title: "КРАСОТА И ДОЛГОВЕЧНОСТЬ КВАРЦЕВОГО КАМНЯ: ПОДРОБНОЕ РУКОВОДСТВО",*/}
//    img: blog1,
//    link: "#",
//     date: "Апрель 30, 2023"
//   },
//   {
//     title: "НИ ХОЛОДНО, НИ ЖАРКО: ТЕПЛЫЕ И ХОЛОДНЫЕ ТОНА В ИНТЕРЬЕРЕ ИЗ НАТУРАЛЬНОГО КАМНЯ",
//     img: blog2,
//     link: "#",
//     date: "Апрель 30, 2023"
//   },
//   {
//     title: "НАТУРАЛЬНЫЙ КАМЕНЬ В ИНТЕРЬЕРЕ КВАРТИРЫ",
//     img: blog3,
//     link: "#",
//     date: "Апрель 30, 2023",
//   },
//   {
//     title: "КРАСОТА И ДОЛГОВЕЧНОСТЬ КВАРЦЕВОГО КАМНЯ: ПОДРОБНОЕ РУКОВОДСТВО",
//     img: blog1,
//     link: "#",
//     date: "Апрель 30, 2023"
//   },
//   {
//     title: "НИ ХОЛОДНО, НИ ЖАРКО: ТЕПЛЫЕ И ХОЛОДНЫЕ ТОНА В ИНТЕРЬЕРЕ ИЗ НАТУРАЛЬНОГО КАМНЯ",
//     img: blog2,
//     link: "#",
//     date: "Апрель 30, 2023"
//   },
//   {
//     title: "НАТУРАЛЬНЫЙ КАМЕНЬ В ИНТЕРЬЕРЕ КВАРТИРЫ",
//     img: blog3,
//     link: "#",
//     date: "Апрель 30, 2023",
//   },
// ];

const months = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
]

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogT[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get(`${HOST_URL}blog`)
      .then((res: any) => {
        setLoading(false);
        setError(false);
        setBlogs(res.data);
        console.log(res.data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      })
  }, []);

  return (
    <div className="blogs">
      <img src={blogLeft} className="blog-left" alt=""/>
      <img src={blogRight} className="blog-right" alt=""/>
      <Header/>
      <div className="container">
        <h1 className="title">БЛОГ</h1>
        {loading && <Loading/>}
        {error && <Error/>}
        {!error && !loading ?
          blogs.length ? <div className="blogs-content">
          {blogs.map((blog) =>
            <div className="blog" key={blog.id}>
              {/*<img src={`${HOST_URL}upload/fayl/${blog.uploadedFile[0].id}`} alt=""/>*/}
              <h2>{blog.title}</h2>
              <p className="date">{months[new Date(blog.createdAt).getMonth()]} {new Date(blog.createdAt).getDate()}, {new Date(blog.createdAt).getDate()} | <Link to="/blog">Блог</Link></p>
              <div className="more">
                <div className="line"></div>
                <a href={blog.link}>Подробнее</a>
              </div>
            </div>
          )}
        </div> : <Empty />
        : null}
      </div>
    </div>
  );
};

export default Blog;