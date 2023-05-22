const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
    userEmail:{
        type: String,
        required: true,
        unique: true
    },
    postDescription: {
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    location:{
        type: String,
    }
});

module.exports = mongoose.model('Donation', DonationSchema);