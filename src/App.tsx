import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Planner from './pages/Planner';
import Recipe from './pages/Recipe';
import Error from './pages/Error';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/recipe/:id/:name" element={<Recipe />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default App;
