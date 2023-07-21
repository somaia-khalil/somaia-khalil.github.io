import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Clouds from './Clouds.js';
import data from './data.json';

const Header = () => {
  const { name, motto, ctaButton, social } = data;

  return (
    <section id="header" className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">{name.toUpperCase()}</h1>
        <div className="home-hero__info">
          <p className="text-primary">{motto}</p>
        </div>
        <div className="home-hero__cta">
          <Link to={ctaButton.link} className="btn btn--bg">
            {ctaButton.text}
          </Link>
        </div>
      </div>
      <div className="home-hero__socials">
        {Object.entries(social).map(([key, url]) => (
          <div className="home-hero__social" key={key}>
            <a href={url} className="home-hero__social-icon-link">
              <img
                src={`/img/${key.toLowerCase()}-ico.png`}
                alt={key}
                className="home-hero__social-icon"
              />
            </a>
          </div>
        ))}
      </div>
      <div className="home-hero__mouse-scroll-cont">
      <Link to="/#about"><div className="mouse"></div></Link>
      </div>
      <Clouds/>
    </section>
  );
};

export default Header;
