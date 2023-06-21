import React, { ReactNode} from 'react';

import './projects.scss';
import {Link} from "react-router-dom";

type ProjectsT = {
  projects: any[];
  children: ReactNode
}

const Projects: React.FC<ProjectsT> = ({children, projects}) => {
  console.log(projects)
  return (
    <section className='projects'>
      <div className="container">
        {children}
        <div className="projects-inner">
          {projects.map((project, i) =>

              // <div key={i} className="project" style={{backgroundImage: `url(http://1627061-ci09322.twc1.net:3001/upload/fayl/${project.uploadedFile[0].id})`}}>
            <div key={i} className="project">
                <div className="project-bg"></div>
                <h3>{project.title}</h3>
                <Link className="btn" to={`/services/${project.id}`}>Подробнее</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;