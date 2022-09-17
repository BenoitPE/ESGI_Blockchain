import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarketplacePage from "./pages/Marketplace";
import CollectionPage from "./pages/Collection";
import AdministrationPage from "./pages/Administration";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MarketplacePage />} />
        <Route path="/Marketplace" element={<MarketplacePage />} />
        <Route path="/Collection" element={<CollectionPage />} />
        <Route path="/Administration" element={<AdministrationPage />} />
      </Routes>
    </Router>
  );
}

export default App; 