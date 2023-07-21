import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import data from './data.json';

const About = () => {
  const {
    aboutMe
  } = data;

  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">{aboutMe.mainHeading}</span>
          <span className="heading-sec__sub">{aboutMe.mainSubHeading}</span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">{aboutMe.getToKnowMeHeading}</h3>
            <div className="about__content-details">
              {aboutMe.getToKnowMeDetails.map((detail, index) => (
                <p className="about__content-details-para" key={index}>
                  {detail}
                </p>
              ))}
            </div>
            <Link to="#contact" className="btn btn--med btn--theme dynamicBgClr">
              Contact
            </Link>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">My Skills</h3>
            <div className="skills">
              {aboutMe.skills.map((skill, index) => (
                <div className="skills__skill" key={index}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
