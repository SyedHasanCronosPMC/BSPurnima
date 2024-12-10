import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Breadcrumbs } from './components/Breadcrumbs';
import { Hero } from './components/Hero';
import { WhyBuildSchool } from './components/WhyBuildSchool';
import { JoinCohort } from './components/JoinCohort';
import { FAQ } from './components/FAQ';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Schedule } from './components/Schedule';
import { Contact } from './components/Contact';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ApplicationPage } from './pages/ApplicationPage';
import { ErrorBoundary } from './components/ErrorBoundary';

function HomePage() {
  return (
    <main>
      <Hero />
      <WhyBuildSchool />
      <JoinCohort />
      <FAQ />
      <Gallery />
      <Testimonials />
      <Schedule />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="bg-gray-900 min-h-screen">
          <Header />
          <Breadcrumbs />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route 
              path="/apply" 
              element={
                <ErrorBoundary>
                  <ApplicationPage />
                </ErrorBoundary>
              } 
            />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;