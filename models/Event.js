const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    userEmail:{
        type: String,
        required: true,
        unique: true
    },
    eventDescription: {
        type: String,
        required: true
    },
    eventFile:{
        type: String,
    },
    location:{
        type: String,
    }
});

module.exports = mongoose.model('Event', EventSchema);