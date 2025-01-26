const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'zotbase.cdeago04kw0e.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'Zot4lolbase1',
  database: 'base',
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});
/*
// Example query
connection.query('SELECT * FROM your_table', (err, results) => {
  if (err) {
    console.log(err);
  } else {
    console.log(results);
  }
});

// Close the connection
*/
connection.end();
