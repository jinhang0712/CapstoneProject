const mongoose = require('mongoose');

const SeatSchema = mongoose.Schema({
    seat_number: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    section: {
        type: Number,
        required: true
    }

});
module.exports = mongoose.model('seats', SeatSchema);
//example for staus making table unavailable
// Status = 1 table section = 1 
// if table section >= status table is available 
// Status = 2 table section = 1 will make tables labeled 1 unavailable
// tables that are available during limited seating will have a section of 2 
// outdoor tables will have section of 3 
// Status 4 removes all tables and makes restraunt take out only