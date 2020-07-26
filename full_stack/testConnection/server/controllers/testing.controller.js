const { Player } = require('../models/testing.model');

module.exports.getAllPlayers = (req, res) => {
    Player.find({})
        .then(Players => res.json(Players))
        .catch(err => res.json(err));

}

module.exports.createPlayer = (req,res) => {
    const {playerName, preferredPosition} = req.body;
    Player.create({
        playerName,
        preferredPosition
    })
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err))
}

module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true}
    )
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => res.json(err))
}

module.exports.removePlayer = (req, res) => {
    Player.findByIdAndDelete({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}

module.exports.getPlayer = (req, res) => {
    Player.findById(
        {_id: req.params.id},
        )
        .then(player => res.json(player))
        .catch(err => res.json(err))
}