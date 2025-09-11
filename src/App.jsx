import React from 'react';
import './App.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Brands from './components/Brands';
import ServicesSection from './components/ServicesSection';
import CompanyRoadmap from './components/CompanyRoadmap';
import AchieveSuccess from './components/AchieveSuccess';
import CoursesOffered from './components/CoursesOffered';
import WhyBest from './components/WhyBest';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <Brands />
      <ServicesSection />
      <CompanyRoadmap />
      <AchieveSuccess />
      <CoursesOffered />
      <WhyBest />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;

