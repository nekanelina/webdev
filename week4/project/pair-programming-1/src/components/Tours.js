import { tours } from "../data";
import Tour from "./Tour";
import Title from "./Title";
import React, { useState } from "react";

function Tours() {
  const [data, setItems] = useState(tours);

  const handleDeleteItem = (tourId) => {
    // Filter out the item with the specified ID and update the state
    const updatedItems = data.filter((tour) => tour.id !== tourId);
    setItems(updatedItems);
  };
  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {data.map((tour) => (
            <Tour
              key={tour.id}
              {...tour}
              tour={tour}
              onDelete={handleDeleteItem}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tours;
