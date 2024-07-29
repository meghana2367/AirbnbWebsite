import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import cardData from "./data.js";

export default function App() {
  const cardElements = cardData.map(item => {
    return <Card 
      key = {item.id}
      {...item}
    />
  });
  return (
    <div id = "app">
      <Navbar />
      <Hero />
      <section className="cards-list"> 
        {cardElements}
      </section>
    </div>
  )
}