const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        max: 255,
        min: 2
    },
    lastname: {
        type: String,
        required: true,
        max: 255,
        min: 2
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 5
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('User', userSchema);