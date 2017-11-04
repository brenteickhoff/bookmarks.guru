
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'guru'
});

db.connect();

module.exports.getSites = (callback) => {
  var sql = 'SELECT * FROM Site';
  db.query(sql, (err, rows, fields) => callback(err, rows));
}; 

module.exports.getSitesByTagId = (tagId, callback) => {
  var sql = `SELECT * FROM Site 
              INNER JOIN Site_Tag ON Site.id = Site_Tag.id_site 
              WHERE Site_Tag.id_tag = ${tagId}`;

  db.query(sql, (err, rows, fields) => callback(err, rows));
}; 

module.exports.getTags = (callback) => {
  var sql = 'SELECT * FROM Tag';
  db.query(sql, (err, rows, fields) => callback(err, rows));
}; 
