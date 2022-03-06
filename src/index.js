const express = require('express');
const cors = require('cors');
const { getDestinations, getFilteredDestinations } = require('./functions');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log('Listening on Port: ', PORT);
});

app.get('/destinations', (req, res) => {
  getDestinations()
  .then((destinations) => res.status(200).send(destinations));
});

app.get('/destinations/filtered', (req, res) => {
  getFilteredDestinations().then((filteredDestinations) =>
    res.status(200).send(filteredDestinations)
  );
});
