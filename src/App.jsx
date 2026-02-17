import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import RamadanLanding from './components/RamadanLanding';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/ramadan" element={<RamadanLanding />} />
    </Routes>
  );
}

export default App;
