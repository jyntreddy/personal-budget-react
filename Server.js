//Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());


app.get('/budget', (req, res) => {
  const samp=require('./data.json')
  res.json(samp);
});

app.listen(port, () => {
    console.log(`Example API served at http://localhost:${port}!`);
});