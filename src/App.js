import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/details/:countryCode" element={<DetailsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
