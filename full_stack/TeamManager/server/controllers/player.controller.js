const { Player } = require('../models/player.models');
const { json } = require('express');

module.exports.getPlayers = (req, res) => {
    Player.find({})
        .then(players => res.json(players))
        .catch(err => res.json(err))
}

module.exports.deletePlayer = (req, res) => {
    Player.findByIdAndDelete({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}

module.exports.createPlayer = (req, res) => {
    const {playerName, preferredPosition} = req.body;
    Player.create({
        playerName,
        preferredPosition
    })
        .then(player => res.json(player))
        .catch(err => res.json(err))
}