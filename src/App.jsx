import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './components/Landing';
import PrayerTimes from './components/PrayerTimes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/prayer-times" element={<PrayerTimes />} />
    </Routes>
  );
}

export default App;
