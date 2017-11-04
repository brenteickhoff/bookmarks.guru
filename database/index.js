
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'guru'
});

db.connect();

module.exports.getSites = callback => {
  var sql = 'SELECT * FROM Site';
  db.query(sql, (err, rows, fields) => callback(err, rows));
}; 

module.exports.getTags = callback => {
  var sql = 'SELECT * FROM Tag';
  db.query(sql, (err, rows, fields) => callback(err, rows));
}; 
