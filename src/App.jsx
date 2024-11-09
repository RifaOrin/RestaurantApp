import React, { useState } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import PopularFood from "./components/PopularFood";
import Reservation from "./components/Reservation";
import Review from "./components/Review";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <PopularFood />
      <Reservation />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
