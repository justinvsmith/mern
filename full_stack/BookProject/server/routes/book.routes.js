const BookController = require('../controllers/book.controller');

module.exports = app => {
    app.get('/api/books', BookController.getAllBooks);
    app.post('/api/books', BookController.createBook);
}