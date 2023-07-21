import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import data from './data.json';

const Projects = () => {

  const { projects } = data;

  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">{projects.mainHeading}</span>
          <span className="heading-sec__sub">{projects.mainSubHeading}</span>
        </h2>

        <div className="projects__content">
          {Object.entries(projects.projects).map(([key,project]) =>
            <div className="projects__row" key={key}>
              <div className="projects__row-img-cont">
                <div style={{ position: "relative" }} alt="Demo" loading="lazy">
                  <img className="projects__row-img" src="/img/laptop.jpeg"/>
                  <iframe src={project.videoSrc} style={{ position: "absolute", top: "10%", left: "14%", width: "72%", height: "76%", border: "none" }} />
                </div>
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">{project.title}</h3>
                <p className="projects__row-content-desc">
                  {project.short_description}
                </p>
                <Link
                  to={`/projects/${key}#details`}
                  className="btn btn--med btn--theme dynamicBgClr"
                >Details</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
