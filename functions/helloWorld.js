const mysql = require('serverless-mysql')({
  config: {
    host: 'tvozlishe0l0.us-east-1.psdb.cloud',
    user: 'bcfsah6y61ik',
    password: 'pscale_pw_7nP4KruYwmDeebrl01vQQdOT4jsNAAqomJPR_W3L9v8',
    database: 'example',
    ssl: {
      rejectUnauthorized: true,
    },
  },
});
// Main handler function
exports.handler = async (event, context) => {
  // Run your query
  let results = await mysql.query('SELECT * FROM users');

  // Run clean up function
  await mysql.end();

  // Return the results

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Allow from anywhere
    },
    body: JSON.stringify({ users: results }),
  };
};
