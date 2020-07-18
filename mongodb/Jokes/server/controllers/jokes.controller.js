const Joke = require('../models/jokes.model');

module.exports.getAll = (req, res) => {
    Joke.find()
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err));
}

module.exports.getOne = (req, res) => {
    Joke.findById(req.params.id)
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err));
}

module.exports.random = (req, res) => {
    Joke.aggregate([{
        $sample:
        {size: 1}
    }])
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err));
}

module.exports.create = (req,res) => {
    Joke.create(req.body)
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err));
}

module.exports.update = (req,res) => {
    Joke.findByIdAndUpdate(
        req.params.id,
        {
            setup: req.body.setup,
            punchLine: req.body.punchLine
        },
        {
            new: true,
            runValidators: true
        }
    )
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err));
}

module.exports.delete = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err));
}