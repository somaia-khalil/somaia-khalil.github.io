import React from 'react';
import data from './data.json';

const Footer = () => {

  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              {Object.entries(data.social).map(([key,url]) => (
                <a key={key} target="_blank" rel="noreferrer" href={url}>
                  <img
                    className="main-footer__icon"
                    src={`/img/${key.toLowerCase()}-ico.png`}
                    alt="icon"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">{data.name.toLocaleUpperCase()}</h4>
            <p className="main-footer__short-desc">{data.conclusion}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
