const express = require('express');
const bodyParser = require('body-parser');
// const passport = require('passport');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Middleware
app.use(cors());
// app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(passport.initialize());

// Passport configuration (implement authentication strategy)

// Routes
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
