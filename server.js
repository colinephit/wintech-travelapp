const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 4000;

app.use(cors());

app.get('/places', async (req, res) => {
  try {
    const apiKey = 'AIzaSyC8b6pWwiE-bUcv9JX-09a9lO0g4hXGrNg';
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(req.query.query)}&key=${apiKey}`;

    const response = await axios.get(apiUrl);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
