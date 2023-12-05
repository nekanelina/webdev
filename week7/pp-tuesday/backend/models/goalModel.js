const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    title: { 
        type: String, 
        required: true,
        validate:{
        validator: function (value) {
            return value.length <= 200;
        },
        message: 'Goal cannot be over 200 characters',
    }},
    createdAt: {
        type: Date,
        required: true,
    },
}
  
)

module.exports = mongoose.model('Goal', goalSchema)
