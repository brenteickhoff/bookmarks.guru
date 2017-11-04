const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const app = express();
const port = 5150;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.listen(port, () => (console.log('Listening on port:', port)));

app.get('/sites', (req, res) =>
  db.getSites((err, dbRows) => 
    res.status(200).send(JSON.stringify({sites: dbRows}))
  )
);

app.get('/tags', (req, res) =>
  db.getTags((err, dbRows) => 
    res.status(200).send(JSON.stringify({tags: dbRows}))
  )
);



 