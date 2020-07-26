const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playerdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("There was an issue connecting to the database"));