const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authorsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log("Established connection to database"))
    .catch(err => console.log("There was a problem when connecting to the database"))