import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";

export default function App() {
  return (
    <div id = "app">
      <Navbar />
      <Hero />
      <Card />
    </div>
  )
}