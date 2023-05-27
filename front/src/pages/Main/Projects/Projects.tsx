import React from 'react';
import projectStone from '../../../assets/img/projects/project-stone.png';
import project1 from '../../../assets/img/projects/project1.png';
import project2 from '../../../assets/img/projects/project2.png';
import project3 from '../../../assets/img/projects/project3.png';
import project4 from '../../../assets/img/projects/project4.png';
import project5 from '../../../assets/img/projects/project5.png';
import project6 from '../../../assets/img/projects/project6.png';
import project7 from '../../../assets/img/projects/project7.png';
import project8 from '../../../assets/img/projects/project8.png';

import './projects.scss';

const Projects = () => {
  const projects = [
    {
      img: project1,
      name: 'Квартира в Сантк-Петербурге',
      link: '#'
    },
    {
      img: project2,
      name: 'Студия интерьера и дизайна  Ganga Gallery',
      link: '#'
    },
    {
      img: project3,
      name: 'Уборная в отеле',
      link: '#'
    },
    {
      img: project4,
      name: 'Частный дом в СПБ',
      link: '#'
    },
    {
      img: project5,
      name: 'Столешницы из камня',
      link: '#'
    },
    {
      img: project6,
      name: 'Ступени из гранита',
      link: '#'
    },
    {
      img: project7,
      name: 'Подоконники из мрамора',
      link: '#'
    },
    {
      img: project8,
      name: 'Балясины',
      link: '#'
    },
  ]
  return (
    <section className='projects'>
      <img src={projectStone} alt=""/>
      <div className="container">
        <h1 className="title">Проекты с натуральным камнем</h1>
        <div className="projects-inner">
          {projects.map((project, i) =>
            <div key={i} className="project" style={{backgroundImage: `url(${project.img})`}}>
              <div className="project-bg"></div>
              <h3>{project.name}</h3>
              <a className="btn" href={project.link}>Подробнее</a>
            </div>)}
        </div>
      </div>
    </section>
  );
};

export default Projects;