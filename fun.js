// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'tvozlishe0l0.us-east-1.psdb.cloud',
  user: 'bcfsah6y61ik',
  password: 'pscale_pw_7nP4KruYwmDeebrl01vQQdOT4jsNAAqomJPR_W3L9v8',
  database: 'example',
  ssl : {
    rejectUnauthorized: true
}
});
connection.connect()
var someVar = [];
function setValue(value) {
  someVar = value;
  console.log(someVar);
}
connection.query('SELECT * FROM `users`', function (err, results, fields) {
    
    if(err) {
      throw err;
    } else {
      setValue(results);
    }
  });
  console.log(someVar);