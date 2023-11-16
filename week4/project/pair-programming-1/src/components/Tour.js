function Tour({ tour, onDelete }) {
  const handleDelete = () => {
    onDelete(tour.id); // Pass the item's ID to the parent component for deletion
  };
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={tour.image} className="tour-img" alt="Tibet Adventure" />
        <p className="tour-date">{tour.date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{tour.title}</h4>
        </div>
        <p>{tour.info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {tour.location}
          </p>
          <p>from ${tour.cost}</p>
          <p>{tour.duration} days</p>
        </div>
      </div>
      <div className="delete-button-container">
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
      </div>
    </article>
  );
}

export default Tour;
