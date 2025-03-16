import React from 'react';
import './Styles/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import WhyWorkWithMe from './components/Why_work_with_me';
import HireMe from './components/HireMe';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="image-overlay"></div> 
      <section id="home"><Home /></section>
      <section id="about-me"><AboutMe /></section>
      <section id="hire-me"><HireMe /></section>
      <section id="projects"><Projects /></section>
      <section id="contact-me"><ContactMe /></section>
      <Footer />
    </div>
  );
};

export default App;
