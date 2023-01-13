import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
 import "bootstrap/dist/js/bootstrap.bundle.min";
import SinglePage from './Components/SinglePage';
import './Styles/App.css'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/portfolio" element={<SinglePage />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
