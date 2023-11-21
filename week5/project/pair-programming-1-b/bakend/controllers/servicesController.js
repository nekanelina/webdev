const services = require("../models/ServicesMongoose");

// Create new service
const createService = async (req, res) => {
  try {
    const { icon, title, text } = req.body;
    if (!icon || !title || !text) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    const newService = new services({
      icon,
      title,
      text,
    });
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all services
const getAllservices = async (req, res) => {
  try {
    const allServices = await services.find();
    res.json(allServices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getserviceById = async (req, res) => {
  try {
    const service = await services.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ msg: "service not found" });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PATCH
const updateservice = async (req, res) => {
  try {
    const service = await services.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (!service) {
      return res.status(404).json({ msg: "service not found" });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//PUT
const putService = async (req, res) => {
  try {
    const service = await services.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!service) {
      return res.status(404).json({ msg: "service not found" });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//DELETE
const deleteService = async (req, res) => {
  try {
    const service = await services.findOneAndDelete({ _id: req.params.id });
    if (!service) {
      return res.status(404).json({ msg: "service not found" });
    }
    res.json({ msg: "service deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllservices,
  getserviceById,
  createService,
  updateservice,
  putService,
  deleteService,
};
