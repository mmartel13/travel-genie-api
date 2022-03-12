const express = require('express');
const cors = require('cors');
const { getDestinations, getFilteredDestinations, updateDestination } = require('./functions');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log('Listening on Port: ', PORT);
});

app.get('/destinations', getDestinations);
app.post('/destinations/filtered', getFilteredDestinations);
app.patch('/destinations/:destinationId', updateDestination);

