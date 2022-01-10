const mysql = require('serverless-mysql')({
  config: {
    host: process.env.ENDPOINT,
    database: process.env.DATABASE,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
  },
});
// Main handler function
exports.handler = async (event, context) => {
  // Run your query
  let results = await mysql.query('SELECT * FROM table');

  // Run clean up function
  await mysql.end();

  // Return the results

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Allow from anywhere
    },
    body: JSON.stringify({ message: results }),
  };
};
