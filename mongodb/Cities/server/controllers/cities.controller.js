const City = require('../models/City.model');

module.exports.getAll = function (req,res){
    City.find()
        .then(cities => res.json(cities))
        .catch(err => res.json(err));
}

module.exports.create = (req, res) => {
    City.create(req.body)
        .then(city => res.json(city))
        .catch(err => res.json(err));
}

module.exports.getOne = (req, res) => {
    City.findById(req.params.id)
        .then(city => res.json(city))
        .catch(err => res.json(err));
}

module.exports.update = (req,res) => {
    City.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            population: req.body.population,
            imageUrl: req.body.imageUrl,
            maskMandate: req.body.maskMandate
        },
        {
            new: true,
            runValidators: true
        }
    )
        .then(city => res.json(city))
        .catch(err => res.json(err));
};

module.exports.delete = (req, res) => {
    City.findByIdAndDelete(req.params.id)
        .then(() => res.json({message: "Success"}))
        .catch(err => res.json(err))
}