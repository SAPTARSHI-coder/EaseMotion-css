import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Animate } from 'easemotion-react';

const Home = () => (
  <Animate type="fade-in" duration="fast" className="page">
    <h1>Home Page</h1>
  </Animate>
);

const About = () => (
  <Animate type="slide-up" duration="fast" className="page">
    <h1>About Us</h1>
  </Animate>
);

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    // We bind the location key so React mounts/unmounts fresh instances,
    // triggering the EaseMotion CSS entrance animations automatically.
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
