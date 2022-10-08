import React from "react";

import AboutPage from "./Pages/AboutPage";
import "../src/Styles/App.scss";
import Nav from "./components/Nav";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";
import MovieDetails from "./Pages/MovieDetails";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" exact element={<AboutPage />} />
          <Route path="/work" exact element={<OurWork />} />
          <Route path="/work/:id" exact element={<MovieDetails />} />
          <Route path="/contact" exact element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
