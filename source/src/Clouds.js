import React from 'react';

const Clouds = () => {
  return (
    <div id="Clouds">
    {Array.from({ length: 5 }).map((_, index) => (
      <div className="Cloud Foreground" key={`foreground-${index}`}></div>
    ))}
    {Array.from({ length: 5 }).map((_, index) => (
      <div className="Cloud Background" key={`background-${index}`}></div>
    ))}
  </div>
  );
};

export default Clouds;
