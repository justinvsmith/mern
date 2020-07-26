const PlayerController = require('../controllers/testing.controller');
const { Player } = require('../models/testing.model');

module.exports = app => {
    app.get('/api/players', PlayerController.getAllPlayers);
    app.post('/api/players', PlayerController.createPlayer);
    app.put('/api/players/:id', PlayerController.updatePlayer);
    app.delete('/api/players/:id', PlayerController.updatePlayer);
    app.get('/api/players/:id', PlayerController.getPlayer);
}