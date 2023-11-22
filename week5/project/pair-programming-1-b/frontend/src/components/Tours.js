import { useState, useEffect } from "react";
import { tours } from "../data";
import Tour from "./Tour";
import Title from "./Title";
const apiUrl = "http://localhost:3001/api/tours"; // Replace with the actual API URLimport { tours } from "../data";

function Tours() {
  const [toursData, setToursData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("data", data);
        if (response.ok) {
          setToursData(data);
        }
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchData();
  }, [toggle]);

  const handleDeleteItem = (itemId) => {
    const deleteTour = async () => {
      try {
        await fetch(`${apiUrl}/${itemId}`, {
          method: "DELETE",
        });
        setToggle(!toggle);
      } catch (error) {
        console.error("Error deleting tour:", error);
      }
    };
    deleteTour();
    console.log(itemId);
  };

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData &&
            toursData.map((tour) => (
              <Tour key={tour._id} {...tour} handleDelete={handleDeleteItem} />
            ))}
        </div>
      </section>
    </div>
  );
}

export default Tours;
