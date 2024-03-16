import React from 'react';
import { Button } from './styles'; // Ensure this import is correct

function Home() {
  return (
    <div className="solver-selection">
      <h1>Select the solver</h1>
      <div className="button-grid">
        <Button to="/solver1d">Solver1D</Button>
        <Button to="/solver2d">Solver2D</Button>
        <Button to="/bundlesolver1d">BundleSolver1D</Button>
        <Button to="/sphericalsolver">SphericalSolver</Button>
      </div>
    </div>
  );
}

export default Home;