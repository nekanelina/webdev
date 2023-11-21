const tours = require("../models/ToursMongoose");

// Create new tour
const createTours = async (req, res) => {
  try {
    const { image, date, title, info, location, duration, cost } = req.body;
    if (!image || !date || !title || !info || !location || !duration || !cost) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    const newTour = new tours({
      image,
      date,
      title,
      info,
      location,
      duration,
      cost,
    });
    const savedTour = await newTour.save();
    res.status(201).json(savedTour);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all tours
const getAllTours = async (req, res) => {
  try {
    const allTours = await tours.find();
    res.json(allTours);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTourByID = async (req, res) => {
  try {
    const tour = await tours.findById(req.params.id);
    if (!tour) {
      return res.status(404).json({ msg: "tour not found" });
    }
    res.json(tour);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PATCH
const updatetour = async (req, res) => {
  try {
    const tour = await tours.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!tour) {
      return res.status(404).json({ msg: "tour not found" });
    }
    res.json(tour);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//PUT
const putTour = async (req, res) => {
  try {
    const tour = await tours.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!tour) {
      return res.status(404).json({ msg: "tour not found" });
    }
    res.json(tour);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//DELETE
const deletetour = async (req, res) => {
  try {
    const tour = await tours.findOneAndDelete({ _id: req.params.id });
    if (!tour) {
      return res.status(404).json({ msg: "tour not found" });
    }
    res.json({ msg: "tour deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTours,
  getTourByID,
  createTours,
  updatetour,
  putTour,
  deletetour,
};
