// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'tvozlishe0l0.us-east-1.psdb.cloud',
  user: 'bcfsah6y61ik',
  password: 'pscale_pw_7nP4KruYwmDeebrl01vQQdOT4jsNAAqomJPR_W3L9v8',
  database: 'example',
});

exports.handler = async function (event, context) {
  var message = 'aun no conecta';
  // simple query
  connection.query('SELECT * FROM `users`', function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  });
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Allow from anywhere
    },
    body: JSON.stringify({ message }),
  };
};
