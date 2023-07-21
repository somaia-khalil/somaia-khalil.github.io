import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import data from './data.json';

const Navigation = () => {
  const [isSmallMenuActive, setSmallMenuActive] = useState(false);

  const handleHamMenuBtnClick = () => {
    setSmallMenuActive((prev) => !prev);
  };

  const handleSmallMenuLinkClick = () => {
    setSmallMenuActive(false);
  };

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <span className="header__logo-sub">{data.name}</span>
        </div>
        <div className="header__main">
          <ul className={`header__links ${isSmallMenuActive ? 'd-none' : ''}`}>
            {Object.entries(data.navigation).map(([text,url]) => (
              <li className="header__link-wrapper" key={text}>
                <Link to={url} className="header__link">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="header__main-ham-menu-cont"
            onClick={handleHamMenuBtnClick}
          >
            <img
              src="/img/ham-menu.svg"
              alt="hamburger menu"
              className={`header__main-ham-menu ${
                isSmallMenuActive ? 'd-none' : ''
              }`}
            />
            <img
              src="/img/ham-menu-close.svg"
              alt="hamburger menu close"
              className={`header__main-ham-menu-close ${
                isSmallMenuActive ? '' : 'd-none'
              }`}
            />
          </div>
        </div>
      </div>
      <div
        className={`header__sm-menu ${
          isSmallMenuActive ? 'header__sm-menu--active' : ''
        }`}
      >
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            {Object.entries(data.navigation).map(([text,url]) => (
              <li
                className="header__sm-menu-link"
                onClick={handleSmallMenuLinkClick}
                key={text}
              >
                <Link to={url}>{text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
