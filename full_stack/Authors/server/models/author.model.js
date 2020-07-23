const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true, 
            "The Author name is required."
        ],
        minlength: [3, "The author field must be at least 3 characters long"]
    }
})

module.exports.Author = mongoose.model('Author', AuthorSchema);