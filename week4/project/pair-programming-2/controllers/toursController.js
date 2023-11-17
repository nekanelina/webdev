const uuid = require("uuid");
const tours = require("../models/tours");

// Get All tours
const getAlltours = (req, res) => {
  res.json(tours);
};

// Get Single tour by ID
const gettourById = (req, res) => {
  const found = tours.some((tour) => tour.id === parseInt(req.params.id));

  if (found) {
    res.json(tours.filter((tour) => tour.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
  }
};

// Create a New tour
const createtour = (req, res) => {
  const newtour = {
    id: uuid.v4(),
    ...req.body,
  };

  if (!newtour.title || !newtour.location) {
    return res.status(400).json({ msg: "Please include a title and location" });
  }

  tours.push(newtour);
  res.json(tours);
};

// Update tour by ID
const updatetour = (req, res) => {
  const found = tours.some((tour) => tour.id === parseInt(req.params.id));

  if (found) {
    tours.forEach((tour, i) => {
      if (tour.id === parseInt(req.params.id)) {
        tours[i] = { ...tour, ...req.body };
        res.json({ msg: "tour updated", tour: tours[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
  }
};

// Delete tour by ID
const deletetour = (req, res) => {
  const found = tours.some((tour) => tour.id === parseInt(req.params.id));

  if (found) {
    const updatedtours = tours.filter(
      (tour) => tour.id !== parseInt(req.params.id)
    );
    res.json({ msg: "tour deleted", tours: updatedtours });
  } else {
    res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAlltours,
  gettourById,
  createtour,
  updatetour,
  deletetour,
};
