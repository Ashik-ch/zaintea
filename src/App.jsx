import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import RamadanLanding from './components/RamadanLanding';
import PrayerTimes from './components/PrayerTimes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/ramadan" element={<RamadanLanding />} />
      <Route path="/prayer-times" element={<PrayerTimes />} />
    </Routes>
  );
}

export default App;
