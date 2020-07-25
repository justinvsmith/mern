const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [
            true,
            "The player name field is required"
        ],
        minlength: [3, "The player name field must be at least 3 characters long"]
    },
    preferredPosition: {
        type: String,
        required: [
            false,
        ]
    }
})

module.exports.Player = mongoose.model('Player', PlayerSchema);