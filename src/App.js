import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./component/header/header.component";
import HomePage from "./pages/home/home.page";
import DestinationPage from "./pages/destination/destination.page";
import CrewsPage from "./pages/crew/crews.page";
import TechnologyPage from "./pages/technology/technology.page";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="destination" element={<DestinationPage />} />
          <Route path="crews" element={<CrewsPage />} />
          <Route path="technology" element={<TechnologyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
