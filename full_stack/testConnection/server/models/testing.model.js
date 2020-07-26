const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [
            true,
            "The player name is required"
        ],
        minlength: [2, "The player name needs to be at least 2 characters"]
    },
    preferredPosition: {
        type: String,
        required: [
            false
        ],

    }
})

module.exports.Player = mongoose.model('Player', PlayerSchema);