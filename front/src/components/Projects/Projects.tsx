import React, { ReactNode} from 'react';
import {Link} from "react-router-dom";

import './projects.scss';
import {HOST_URL} from "../../assets/consts";

type ProjectsT = {
  projects: any[];
  children: ReactNode
}

const Projects: React.FC<ProjectsT> = ({children, projects}) => {
  return (
    <section className='projects'>
      <div className="container">
        {children}
        <div className="projects-inner">
          {projects.map((project, i) =>
              <div key={i} className="project" style={{backgroundImage: `url(${HOST_URL}upload/fayl/${project.uploadedFile[0]?.id})`}}>
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