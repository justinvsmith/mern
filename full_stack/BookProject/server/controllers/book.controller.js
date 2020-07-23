const {Book} = require('../models/book.model');

module.exports.getAllBooks = (req, res) => {
    Book.find({})
        .then(books => res.json(books))
        .catch(err => res.json(err));
}

module.exports.createBook = (req, res) => {
    const {title, numberOfPages} = req.body;
    Book.create({
        title,
        numberOfPages
    })
        .then(book => res.json(book))
        .catch(err => res.status(400).json(err))
}