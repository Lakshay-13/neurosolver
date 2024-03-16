// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Solver1D from './solvers/Solver1D';
import Solver2D from './solvers/Solver2D';
import BundleSolver1D from './solvers/BundleSolver1D';
import SphericalSolver from './solvers/SphericalSolver';
import './styles.js'; // or individual CSS files if not using styled-components

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solver1d" element={<Solver1D />} />
        <Route path="/solver2d" element={<Solver2D />} />
        <Route path="/bundlesolver1d" element={<BundleSolver1D />} />
        <Route path="/sphericalsolver" element={<SphericalSolver />} />
      </Routes>
    </Router>
  );
}

export default App;
