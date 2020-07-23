const AuthorController = require('../controllers/author.controller');

module.exports = app => {
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.post('/api/authors', AuthorController.createAuthor);
    app.delete('/api/authors/:id', AuthorController.removeAuthor);
    app.put('/api/authors/:id', AuthorController.updateAuthor);
    app.get('/api/authors/:id', AuthorController.getAuthor);
}