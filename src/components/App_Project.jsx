import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About_Projects';
import Projects from './Projects/ProjectsList';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer_Project_List';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/projects_data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <About />
      <Projects />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
