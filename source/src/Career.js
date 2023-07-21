import React, { useState } from 'react';
import data from './data.json';

const Projects = () => {

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  const { heading, subHeading, timelineData } = data.career;

  return (
    <section id="career" className="career-timeline sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">{heading}</span>
          <span className="heading-sec__sub">{subHeading}</span>
        </h2>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${activeItem === index ? 'active' : ''}`}
              onClick={() => handleItemClick(index)}
            >
              <div className="timeline-item-content">
                <span className="timeline-item-date">{item.date}</span>
                <h3 className="timeline-item-title">{item.title}</h3>
                {activeItem === index && (
                  <div className="timeline-description projects__row-content-desc">
                    <br/>
                    {item.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
