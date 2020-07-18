const jokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', jokeController.getAll);
    app.get('/api/jokes/random', jokeController.random);
    app.post('/api/jokes/new', jokeController.create);
    app.put('/api/jokes/:id', jokeController.update);
    app.get('/api/jokes/:id', jokeController.getOne);
    app.delete('/api/jokes/:id', jokeController.delete);
}