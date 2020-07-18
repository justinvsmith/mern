const express = require('express');

const app = express();
app.use(express.json());

require('./config/mongoose.config');
const jokeRoutes = require('./routes/jokes.routes');
jokeRoutes(app);


app.listen(8000, () => console.log('Listening Now'));