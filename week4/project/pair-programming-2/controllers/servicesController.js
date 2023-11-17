const uuid = require("uuid");
const services = require("../models/services");

// Get All services
const getAllservices = (req, res) => {
  console.log("getAllservices");
  res.json(services);
};

// Get Single service by ID
const getserviceById = (req, res) => {
  const found = services.some(
    (service) => service.id === parseInt(req.params.id)
  );

  if (found) {
    res.json(
      services.filter((service) => service.id === parseInt(req.params.id))
    );
  } else {
    res.status(400).json({ msg: `No service with the id of ${req.params.id}` });
  }
};

// Create a New service
const createservice = (req, res) => {
  const newservice = {
    id: uuid.v4(),
    ...req.body,
  };

  if (!newservice.title || !newservice.text) {
    return res.status(400).json({ msg: "Please include a title and text" });
  }

  services.push(newservice);
  res.json(services);
};

// Update service by ID
const updateservice = (req, res) => {
  const found = services.some(
    (service) => service.id === parseInt(req.params.id)
  );

  if (found) {
    services.forEach((service, i) => {
      if (service.id === parseInt(req.params.id)) {
        services[i] = { ...service, ...req.body };
        res.json({ msg: "service updated", service: services[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No service with the id of ${req.params.id}` });
  }
};

// Delete service by ID
const deleteservice = (req, res) => {
  const found = services.some(
    (service) => service.id === parseInt(req.params.id)
  );

  if (found) {
    const updatedservices = services.filter(
      (service) => service.id !== parseInt(req.params.id)
    );
    res.json({ msg: "service deleted", services: updatedservices });
  } else {
    res.status(400).json({ msg: `No service with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAllservices,
  getserviceById,
  createservice,
  updateservice,
  deleteservice,
};
