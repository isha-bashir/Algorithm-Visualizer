import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Home from './Pages/Home';
import SortingApp from './Pages/Sorting';
import NQueen from './Pages/N_Queen';

function App() {

  return (
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/sorting" element={<SortingApp/>} />
            <Route exact path="/nqueens" element={<NQueen/>} />
          </Routes>
    </div>
  );
}

export default App;