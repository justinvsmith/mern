const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        minlength: [10, 'Your setup is too short!']
    },
    punchline: {
        type: String,
        minlength: [3, 'We need a longer punchline than 3 characters']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Joke', JokeSchema);