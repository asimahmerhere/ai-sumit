import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import CountdownTimer from './components/CountdownTimer';
import AboutSection from './components/AboutSection';
import SpeakersSection from './components/SpeakersSection';
import ScheduleSection from './components/ScheduleSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CountdownTimer />
      <AboutSection />
      <SpeakersSection />
      <ScheduleSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
