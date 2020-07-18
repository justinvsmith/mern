const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established connection to database"))
    .catch(err => console.log("There was a problem when connecting to the database"))