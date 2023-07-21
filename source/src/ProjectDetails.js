import React, { useState , useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Clouds from './Clouds.js';
import data from './data.json';

const ProjectDetails = () => {

  const navigate = useNavigate();
  
  const [ notFound , setNotFound ] = useState(false);
  
  useEffect(() => {
    if(notFound) navigate("/#projects");
  }, [notFound]);

  const { name } = useParams(); 
  const project = data.projects.projects[name];
  
  if (project == null)
  {
    if (!notFound) setNotFound(true);
  }
  else
  {
    return (
      <div>
        <section className="project-cs-hero">
          <Clouds />
          <div className="project-cs-hero__content">
            <h1 className="heading-primary">{project.title}</h1>
            <div className="project-cs-hero__info">
              <p className="text-primary">{project.short_description}</p>
            </div>
            <div className="project-cs-hero__cta">
              <Link to="/#projects" className="btn btn--bg">
                BACK TO OVERVIEW
              </Link>
            </div>
          </div>
        </section>
        <section id="details" className="project-details">
          <div className="main-container">
            <div className="project-details__content">
              <div style={{ position: "relative" }} className="project-details__showcase-img-cont">
                <img src="/img/laptop.jpeg" className="project-details__showcase-img"/>
                <iframe src={project.videoSrc} style={{ position: "absolute", top: "10%", left: "14%", width: "72%", height: "76%", border: "none" }} />
              </div>
              <div className="project-details__content-main">
                {project.projectOverview.map((item, index) => (
                  <div className="project-details__desc" key={index}>
                    <h3 className="project-details__content-title">{item.heading}</h3>
                    {item.paragraphs.map((paragraph, pIndex) => (
                      <p className="project-details__desc-para" key={pIndex}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
                <div className="project-details__tools-used">
                  <h3 className="project-details__content-title">Tools and Technologies</h3>
                  <div className="skills">
                    {project.toolsUsed.map((tool, tIndex) => (
                      <div className="skills__skill" key={tIndex}>
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="project-details__links">
                  <h3 className="project-details__content-title">{project.demo.heading}</h3>
                  {Object.entries(project.demo.links).map(([key,url]) => (
                    <a
                      href={url}
                      className="btn btn--med btn--theme project-details__links-btn"
                      target="_blank"
                      key={key}
                    >
                      {key}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default ProjectDetails;
