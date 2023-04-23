const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Post', PostSchema);