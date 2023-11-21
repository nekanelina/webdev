const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const Service = mongoose.model("Service", servicesSchema);

module.exports = Service;
