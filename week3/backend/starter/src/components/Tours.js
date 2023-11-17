import Tour from "./Tour";
import { tours } from "../data";

function Tours() {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          FEATURED <span>TOURS</span>
        </h2>
      </div>
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
