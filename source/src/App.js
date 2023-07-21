import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation.js';
import Header from './Header.js';
import About from './About.js';
import Projects from './Projects.js';
import ProjectDetails from './ProjectDetails.js';
import Career from './Career.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
      <Navigation />
        <Routes>
          <Route path="/projects/:name" element={<ProjectDetails/>} />
          <Route path="*" element={
            <>
              <Header />
              <About />
              <Projects />
              <Career />
              <Contact />
            </>
          } />
        </Routes>
      <Footer />
  </>
  );
}

export default App;
