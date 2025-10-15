import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Header from './components/Home_Page/Header';
import HeroSection from './components/Home_Page/HeroSection';
import Features from './components/Home_Page/Features';
import Brands from './components/Home_Page/Brands';
import ServicesSection from './components/Home_Page/ServicesSection';
import Aboutus from './components/Home_Page/Aboutus';
import Testimonials from './components/Home_Page/Testimonials';
import Company from './components/Home_Page/company';
import OurBest from './components/Home_Page/ourBest';
import Helping from './components/Home_Page/Helping';
import CoursesOffered from './components/Home_Page/CoursesOffered';
import FrequentQuestion from './components/Home_Page/FrequentQuestion';
import CallToAction from './components/Home_Page/CallToAction';
import Contact from './components/Home_Page/Contact';
import Footer from './components/Home_Page/Footer';
import Service from './Service_page/Service'; 
import Whose from './components/About_Page/Whose';
import Meeting from './components/Contact_Page/Meeting';

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      {/* Header Always Visible */}
      <Header />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Features />
              <Brands />
              <ServicesSection />
              <Testimonials />
              <Aboutus />
              <Company />
              <OurBest />
              <Helping />
              <CoursesOffered />
              <FrequentQuestion />
            </>
          }
        />

        {/* Services Page */}
        <Route path="/services" element={<Service />} />

        {/* About Page */}
        <Route path="/Whose" element={<Whose />} />

        {/* Meeting (Contact Page) */}
        <Route path="/Meeting" element={<Meeting />} />
      </Routes>

      {/* Common sections visible on all pages */}
      <FrequentQuestion />
      <CallToAction />
      
       <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
