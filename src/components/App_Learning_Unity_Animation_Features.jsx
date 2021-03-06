import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About_Project_Item';
import Projects from './Projects/TestList';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer_Project';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/Learning_Unity_Animation_Features_data';

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
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
