import React from "react";

import AboutPage from "./Pages/AboutPage";
import "../src/Styles/App.scss";
import Nav from "./components/Nav";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";
import MovieDetails from "./Pages/MovieDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/work/:id" element={<MovieDetails />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
