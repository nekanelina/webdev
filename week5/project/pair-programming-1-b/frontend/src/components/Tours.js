import { useState, useEffect } from "react";
import { tours } from "../data";
import Tour from "./Tour";
import Title from "./Title";

const apiUrl = "http://localhost:3001/api/tours"; // Replace with the actual API URL

const Tours = () => {
  const [toursData, setToursData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setToursData(data);
      console.log(data);
    };

    fetchData();
  }, []);

  const removeTour = async (id) => {
    await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });
    const newTours = toursData.filter((tour) => tour.id !== id);
    setToursData(newTours);
  };

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData.map((tour) => (
            <Tour key={tour.id} {...tour} removeTour={removeTour} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tours;
