const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const app = express();
const port = 5150;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.listen(port, () => (console.log('Listening on port:', port)));

// app.get('/items', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });  