const PlayerController = require('../controllers/player.controller');

module.exports = app => {
    app.get('/api/players', PlayerController.getPlayers);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
    app.post('/api/players', PlayerController.createPlayer);
}