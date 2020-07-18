const express = require('express');
const app = express();
const cors = require('cors');

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
require('./server/routes/person.routes')(app);

app

app.listen(8000, () => {
    console.log("Now Listening on Port 8000!");
})

