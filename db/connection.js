const mySql = require('mysql2');

const con =mySql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

con.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL server');
});

module.exports = connection;

 