const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        validate: {
          validator: function (value) {
           return value.length <= 100;
          },
          message: 'Name must be less than 100 characters',
        },
      
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function (value) {
            return validator.isEmail(value);
          },
          message: 'Email is not valid',
        },
    },
    password: {
        type: String,
        required: true,
    },
},
)

module.exports = mongoose.model('User', userSchema)
