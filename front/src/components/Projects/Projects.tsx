import React, { ReactNode} from 'react';

import './projects.scss';
import {ProjectT} from "../../@types";

type ProjectsT = {
  projects: ProjectT[];
  children: ReactNode
}

const Projects: React.FC<ProjectsT> = ({children, projects}) => {

  return (
    <section className='projects'>
      <div className="container">
        {children}
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