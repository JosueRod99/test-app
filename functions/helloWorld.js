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
exports.handler = async function (event, context) {
  var message = 'aun no conecta';
  // simple query
  
  connection.query('SELECT * FROM users', function (err, rows, fields) {
    if (err) throw err

    message = rows;
  })
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Allow from anywhere
    },
    body: JSON.stringify({ message }),
  };
};
