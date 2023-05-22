const mongoose = require('mongoose');

const ApprovalSchema = new mongoose.Schema({
    userEmail:{
        type: String,
        required: true,
        unique: true
    },
    postDescription: {
        type: String,
        required: true
    },
    postFile:{
        type: String,
    },
    location:{
        type: String,
    }
});

module.exports = mongoose.model('Approval', ApprovalSchema);