import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './components/Landing';
import PrayerTimes from './components/PrayerTimes';
import TvDisplay from './components/TvDisplay';
import TvMenu from './components/tvMenu';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/reviews" element={<Testimonials />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/prayer-times" element={<PrayerTimes />} />
      <Route path="/sandwiches" element={<TvMenu />} />
      <Route path="/tv-menu" element={<TvMenu />} />
      <Route path="/tv-display" element={<TvDisplay />} />
    </Routes>
  );
}

export default App;
