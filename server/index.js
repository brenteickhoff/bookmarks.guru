const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const app = express();
const port = 5150;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.listen(port, () => (console.log('Listening on port:', port)));

app.post('/addTag', (req, res) => {
  console.log('server post addtagname', req.body.tagName)
  var tagName = req.body.tagName;
  db.addTag(tagName,(err, dbRows) => {
    db.getTags((err, dbRows) => {
      res.status(200).send(JSON.stringify({tags: dbRows}))
    });
  });
});

app.get('/sites', (req, res) => {
  console.log('server get sites by tag id', req.query.tagId);

  if (!req.query.tagId) {
    db.getSites((err, dbRows) => {
      res.status(200).send(JSON.stringify({sites: dbRows}))
    });
  } else {
    db.getSitesByTagId(req.query.tagId, (err, dbRows) => {
      res.status(200).send(JSON.stringify({sites: dbRows}))
    });
  }
});

app.get('/tags', (req, res) => {
  db.getTags((err, dbRows) => {
    res.status(200).send(JSON.stringify({tags: dbRows}))
  });
});



 