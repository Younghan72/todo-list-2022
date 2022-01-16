const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'a12281@3277',
  port: 3306,
  database : 'study'
});

connection.connect();

connection.query('SELECT * FROM todo;', function(err, rows, fields) {
    // err = null;
  if (err != null) throw err;
  console.log('The solution is: ', rows[0]);
});

connection.end();