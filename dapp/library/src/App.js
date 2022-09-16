import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LibraryPage from "./pages/library";
import CollectionPage from "./pages/collection";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LibraryPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </Router>
  );
}

export default App; 