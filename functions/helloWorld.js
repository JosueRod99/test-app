exports.handler = async function (event, context) {
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'tvozlishe0l0.us-east-1.psdb.cloud',
    user: 'bcfsah6y61ik',
    password: 'pscale_pw_7nP4KruYwmDeebrl01vQQdOT4jsNAAqomJPR_W3L9v8',
  });
  var message = '';
  connection.connect(function (err) {
    if (err) {
      message = 'error connecting: ' + err.stack;
      return;
    }

    message = 'connected as id ' + connection.threadId;
  });
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Allow from anywhere
    },
    body: JSON.stringify({ message }),
  };
};
