const tours = require("../models/tours");

const getAllTours = (req, res) => {
  res.json(tours);
};

const getTourById = (req, res) => {
  const found = tours.some((tour) => tour.id === parseInt(req.params.id));

  if (found) {
    res.json(tours.filter((tour) => tour.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
  }
};

const createTour = (req, res) => {
  const newTour = {
    id: tours.length + 1,
    ...req.body,
  };

  if (!newTour.name || !newTour.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }

  tours.push(newTour);
  res.json(tours);
};

const updateTour = (req, res) => {
  const found = tours.some((tour) => tour.id === parseInt(req.params.id));

  if (found) {
    tours.forEach((tour, i) => {
      if (tour.id === parseInt(req.params.id)) {
        tours[i] = { ...tour, ...req.body };
        res.json({ msg: "Tour updated", tour: tours[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
  }
};

const deleteTour = (req, res) => {
  const found = tours.some((tour) => tour.id === parseInt(req.params.id));

  if (found) {
    const updatedTours = tours.filter(
      (tour) => tour.id !== parseInt(req.params.id)
    );
    res.json({ msg: "Tour deleted", tours: updatedTours });
  } else {
    res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};
