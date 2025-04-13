// src/App.js
import React from "react";
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";

function Home() {
  return (
    <div>
      <h1>React Exercises</h1>
      <ul>
        <li><Link to="/question1">Question 1</Link></li>
        <li><Link to="/question2">Question 2</Link></li>
        <li><Link to="/question3">Question 3</Link></li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
        <Route path="/question3" element={<Question3 />} />
      </Routes>
    </Router>
  );
}

export default App;
