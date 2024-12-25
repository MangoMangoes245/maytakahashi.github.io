import React from "react";
import "../assets/css/events.css";

const Events = () => (
  <main>
    <h1>Weekly Workshops</h1>
    <section className="gallery">
      {Array.from({ length: 24 }, (_, i) => (
        <img
          key={i}
          src={`/src/assets/images/image-${i + 1}.jpg`}
          alt={`Gallery ${i + 1}`}
        />
      ))}
    </section>
  </main>
);

export default Events;
